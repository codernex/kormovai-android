import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import api from "@/app/api";
import axios from "axios";
import * as SecureStore from "expo-secure-store";
import { CURRENT_USER, USERS } from "@/constans";
interface IAuth {
  authState: {
    isAuth: boolean;
    token: string | null | undefined;
    user: any;
  };
  onRegister: (user: any, token: string) => Promise<void>;
  onLogin: (data: any) => Promise<void>;
  onLogout: () => Promise<void>;
  accounts: string[];
  onAccountChange: () => Promise<void>;
  users: any[];
}

const Auth = createContext<IAuth | null>(null);

export default function AuthProvider({ children }: React.PropsWithChildren) {
  const [authState, setAuthState] = useState<IAuth["authState"]>({
    isAuth: false,
    token: null,
    user: null,
  });

  const [users, setAllUser] = useState<any[]>([]);

  const getUsers = async (): Promise<
    { user: any; token: any }[] | undefined
  > => {
    try {
      const jsonData = await SecureStore.getItemAsync(USERS);

      if (jsonData !== null) return JSON.parse(jsonData);
      else return [];
    } catch (error) {
      console.log("Error retrieving data: ", error);
    }
  };

  const setUsers = async (user: any, token: any) => {
    try {
      const previousData = await getUsers();
      if (previousData && previousData.length) {
        if (!(await userExist(user.id))) {
          const userArr = [{ user, token }, ...previousData];
          const jsonData = JSON.stringify(userArr);
          await SecureStore.setItemAsync(USERS, jsonData);
        }
      } else {
        const jsonData = JSON.stringify([{ user, token }]);
        await SecureStore.setItemAsync(USERS, jsonData);
      }
    } catch (err) {
      console.log("Error Setting User: ", err);
    }
  };

  const userExist = async (userId: string) => {
    const users = await getUsers();
    if (users) {
      return users.some((user) => user.user.id === userId);
    }
    return false;
  };

  const getCurrentUser = async () => {
    try {
      const jsonData = await SecureStore.getItemAsync(CURRENT_USER);

      if (jsonData !== null) return JSON.parse(jsonData);
      else return null;
    } catch (err) {}
  };

  const setCurrentUser = async (user: any, accessToken: any) => {
    const jsonData = JSON.stringify({ user, accessToken });
    await SecureStore.setItemAsync(CURRENT_USER, jsonData);
  };

  const loadToken = useCallback(async () => {
    const userData = await getCurrentUser();

    const user = userData?.user;

    if (userData?.token && user) {
      axios.defaults.headers["Authorization"] = `Bearer ${userData.token}`;

      setAuthState({
        isAuth: true,
        token: userData.token,
        user: JSON.parse(user),
      });
    }

    console.log("Running User Auth");
  }, []);

  const loadUsers = useCallback(async () => {
    const users = await getUsers();
    if (users) setAllUser(users);
  }, []);

  useEffect(() => {
    async function run() {
      await loadToken();
      await loadUsers();
    }

    run();
  }, []);

  const register = useCallback(async (user: any, token: any) => {
    setAuthState({
      isAuth: true,
      token,
      user,
    });
    await setUsers(user, token);
    await setCurrentUser(user, token);

    await loadToken();
    await loadUsers();
  }, []);

  const login = useCallback(async (data: any) => {
    try {
      if (data) {
        console.log(data);

        setAuthState({
          isAuth: true,
          token: data?.accessToken,
          user: data?.user,
        });
        await setUsers(data?.user, data?.token);
        await setCurrentUser(data?.user, data?.accessToken);

        await loadToken();
        await loadUsers();
      }
    } catch (err) {}
  }, []);

  const logout = async () => {
    await api.get("/auth/user/logout");
    setAuthState({
      isAuth: false,
      token: null,
      user: null,
    });
  };

  const value: IAuth = {
    authState,
    onLogin: login,
    onRegister: register,
    onLogout: logout,
    accounts: [],
    onAccountChange: async function () {},
    users,
  };

  return <Auth.Provider value={value}>{children}</Auth.Provider>;
}

export const useAuth = () => useContext(Auth);
