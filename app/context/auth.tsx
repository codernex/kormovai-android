import { createContext, useContext, useEffect, useState } from "react";
import api, { apiPost } from "@/app/api";
import SecureStore from "expo-secure-store";
import { TOKEN_KEY, USER_KEY } from "@/constans";
import axios from "axios";

interface IAuth {
  authState: {
    isAuth: boolean;
    token: string | null | undefined;
    user: any;
  };
  onRegister: (userId: string, password: string) => Promise<void>;
  onLogin: (userId: string, password: string) => Promise<void>;
  onLogout: () => Promise<void>;
  accounts: string[];
  onAccountChange: () => Promise<void>;
}

const Auth = createContext<IAuth>({
  authState: {
    isAuth: true,
    token: null,
    user: null,
  },
  onLogin: () => Promise.resolve(),
  onLogout: () => Promise.resolve(),
  onRegister: () => Promise.resolve(),
  accounts: [],
  onAccountChange: () => Promise.resolve(),
});

export default function AuthProvider({ children }: React.PropsWithChildren) {
  const [authState, setAuthState] = useState<IAuth["authState"]>({
    isAuth: true,
    token: null,
    user: null,
  });

  useEffect(() => {
    const loadToken = async () => {
      const token = await SecureStore.getItemAsync(TOKEN_KEY);
      const JsonUser = await SecureStore.getItemAsync(USER_KEY);
      if (token && JsonUser) {
        axios.defaults.headers["Authorization"] = `Bearer ${token}`;

        setAuthState({
          isAuth: true,
          token: token,
          user: JSON.parse(JsonUser),
        });
      }
    };

    loadToken();
  }, []);

  const register = async (userId: string, password: string) => {};

  const login = async (userId: string, password: string) => {
    try {
      const res = await apiPost<unknown, { user: any; token: string }>(
        "/auth/user",
        { userId, password }
      );

      setAuthState({
        isAuth: true,
        token: res.data?.token,
        user: res.data?.user,
      });

      await SecureStore.setItemAsync(TOKEN_KEY, res.data?.token || "");
      await SecureStore.setItemAsync(USER_KEY, JSON.stringify(res.data?.user));
    } catch (err) {}
  };

  const logout = async () => {
    await api.get("/auth/user/logout");
    await SecureStore.deleteItemAsync(TOKEN_KEY);
    await SecureStore.deleteItemAsync(USER_KEY);
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
  };

  return <Auth.Provider value={value}>{children}</Auth.Provider>;
}

export const useAuth = () => useContext(Auth);
