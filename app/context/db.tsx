import { createContext, useCallback, useContext, useEffect } from "react";
import * as SQLite from "expo-sqlite";
interface IDBContext {
  db: SQLite.SQLiteDatabase;
  getUsers: () => Promise<{ id: string; token: string }[]>;
  insertUser: (id: string, token: string) => Promise<void>;
  removeUser: (id: string) => Promise<void>;
  getUserById: (
    id: string
  ) => Promise<{ id: string; token: string } | undefined>;
}

const DBContext = createContext<IDBContext | null>(null);

const DBProvider = ({ children }: React.PropsWithChildren) => {
  const db = SQLite.openDatabase("kormovai.db");

  const createUserTable = useCallback(() => {
    db.exec(
      [
        {
          sql: "CREATE TABLE IF NOT EXISTS users (id VARCHAR(300), token TEXT)",
          args: [],
        },
      ],
      false,
      () => {}
    );
  }, []);

  const insertUser = async (id: string, token: string): Promise<void> => {
    const sql = `insert into users (id,token) values (${id},${token})`;

    const userExist = (await db.execAsync(
      [{ sql: `select id from users where id=${id} limit 1`, args: [] }],
      false
    )) as any[];
    if (userExist[0]?.rows?.length) {
      return;
    }

    await db.execAsync([{ sql, args: [] }], false);
  };

  const getUsers = async () => {
    const sql = `select * from users`;
    const result = (await db.execAsync([{ sql, args: [] }], false)) as any[];

    return result[0]?.rows || ([] as { id: string; token: string }[]);
  };

  const removeUser = async (id: string) => {
    const sql = `DELETE FROM users WHERE id = ${id}`;
    const result = (await db.execAsync([{ sql, args: [] }], false)) as any[];

    return result[0]?.rowsAffected;
  };

  const getUserById = async (id: string) => {
    const userExist = (await db.execAsync(
      [{ sql: `select id from users where id=${id} limit 1`, args: [] }],
      false
    )) as any[];

    return userExist[0]?.rows[0];
  };

  useEffect(() => {
    createUserTable();
    getUserById("1");
  }, []);
  return (
    <DBContext.Provider
      value={{ db, getUsers, insertUser, getUserById, removeUser }}
    >
      {children}
    </DBContext.Provider>
  );
};

export default DBProvider;

export const useSqlite = () => useContext(DBContext);
