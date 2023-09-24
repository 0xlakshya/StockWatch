import { createContext, useContext } from "react";
import axios from "axios";
import { BACKEND } from "@/constants";
import toast from "react-hot-toast";

interface AuthContextModel {
  login: (loginData: userLoginFormDataModel) => any;
  signup: (signupData: userSignupFormDataModel) => any;
  logout: () => void;
  isAuthenticated: () => boolean;
  toggleAuthModal: () => void;
}

export const AuthContext = createContext<AuthContextModel | null>(null);

export function useAuth() {
  return useContext(AuthContext);
}

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const login = async (loginData: userLoginFormDataModel) => {
    try {
      const { data } = await axios.post(`${BACKEND}/login`, loginData);
      const { token, user } = data;

      saveTokenInLocalStorage({ token, user });
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      toast.success("Successfully logged in");
      return data;
    } catch (e) {
      throw e;
    }
  };

  const signup = async (signupData: userSignupFormDataModel) => {
    try {
      const { data } = await axios.post(`${BACKEND}/register`, {
        ...signupData,
      });
      const { token } = data;
      saveTokenInLocalStorage({ toke });
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      return { data };
    } catch (e) {
      console.log("error in auth signup ", e);
      throw e;
    }
  };
};
