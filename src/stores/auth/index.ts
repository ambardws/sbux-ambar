import { create } from "zustand";
import { loginUser, registerUser } from "./actions";
import { toast } from "react-toastify";
import { persist, createJSONStorage, StateStorage } from "zustand/middleware";
import useHydrated from "@trex/hooks/useHydrated";

interface AuthState {
  registerData: IUser[];
  isLoggedIn: boolean;
  token: string;
  user: {
    name: string;
    username: string;
    update_at?: any;
    id?: number;
    email: string;
    created_at?: string;
    user_profile?: {
      avatar: string;
      created_at: string;
      user_id: number;
      id: number;
      update_at: string;
    };
  } | null;
  loading: boolean;
  Register: (params: IUser) => void;
  Login: (params: ILogin) => Promise<LoginResponse> | null;
  Logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      registerData: [],
      user: null,
      isLoggedIn: false,
      token: "",
      loading: false,

      Register: async (credentials: IUser) => {
        try {
          const resRegister = await registerUser(credentials);
          if (resRegister) {
            set(() => ({
              token: resRegister.token,
              isLoggedIn: true,
              user: {
                name: credentials?.name,
                username: credentials?.username,
                email: credentials?.email
              },
            }));
            const url_login = encodeURI(
              `${window.location.origin}/dashboard/community`
            );
            window.location.replace(url_login);
          } else throw resRegister;
        } catch (error) {
          toast.error("Terjadi kesalahan");
        }
      },
      Login: async (credentials) => {
        try {
          const resLogin = await loginUser(credentials);
          console.log(resLogin)
          if (resLogin) {
            set(() => ({
              token: resLogin.access_token,
              isLoggedIn: true,
              user: resLogin?.users
            }));
            window.localStorage.setItem("access_token", resLogin?.access_token);
            return resLogin;
          } else throw resLogin;
        } catch (error) {
          toast.error("Sorry something went wrong!");
          throw error;
        }
      },

      Logout: () => {
        window.localStorage.clear();
        set(() => ({
          token: "",
          isLoggedIn: false,
        }));
      },
    }),
    {
      name: "auth-state",
      partialize: ({ token, isLoggedIn }) => ({
        token,
        isLoggedIn,
      }),
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

const useAuth: () => AuthState = () => {
  const store = useAuthStore();
  const isHydrated = useHydrated();
  return isHydrated
    ? store
    : {
        registerData: [],
        user: null,
        isLoggedIn: false,
        authCheck: false,
        token: "",
        loading: false,
        Register: () => null,
        Login: () => null,
        Logout: () => null,
        updateProfile: () => null,
      };
};

export default useAuth;
