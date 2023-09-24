import { createContext, useContext, useState } from "react";
import axios from "axios";
import { API } from "@/config";
import toast from "react-hot-toast";

interface AuthContextModel {
  login: (loginData: userLoginFormDataModel) => any;
  signup: (signupData: userSignupFormDataModel) => any;
  isAuthenticated: boolean;
  //   logout: () => void;
  //   isAuthenticated: () => boolean;
  //   toggleAuthModal: () => void;
}

export const AuthContext = createContext<AuthContextModel | null>(null);

export function useAuth() {
  return useContext(AuthContext);
}
export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [authLoading, setAuthLoading] = useState<boolean>(false);
  const login = async (loginData: userLoginFormDataModel) => {
    try {
      const { data } = await axios.post(`${API}/user/login`, loginData);
      console.log({ data });
      const { token } = data;

      localStorage.setItem("token", token);
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      toast.success("Successfully logged in");
      setIsAuthenticated(true);
      return data;
    } catch (e: any) {
      toast.error(e.message ?? "Failed to signup");
      console.log("error in auth login ", e);
    }
  };

  const signup = async (signupData: userSignupFormDataModel) => {
    try {
      const { data } = await axios.post(`${API}/user/register`, signupData);
      const { token } = data;
      localStorage.setItem("token", token);
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      toast.success("Successfully signed up");

      setIsAuthenticated(true);
      return { data };
    } catch (e: any) {
      toast.error(e.message ?? "Failed to signup");
      console.log("error in auth signup ", e);
    }
  };

  const value = {
    login,
    signup,
    isAuthenticated,
  };

  return (
    <AuthContext.Provider value={value}>
      {authLoading ? null : children}
    </AuthContext.Provider>
  );
};
