import { createContext, useContext, useState } from "react";
import axios from "axios";
import { API } from "@/config";
import toast from "react-hot-toast";

interface AuthContextModel {
  login: (loginData: userLoginFormDataModel) => any;
  signup: (signupData: userSignupFormDataModel) => any;
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
  const [authenticated, setAuthenticated] = useState<boolean>(false);
  const [authLoading, setAuthLoading] = useState<boolean>(false);
  const login = async (loginData: userLoginFormDataModel) => {
    try {
      const { data } = await axios.post(`${API}/user/login`, loginData);
      console.log({ data });
      const { token } = data;

      localStorage.setItem("token", token);
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      toast.success("Successfully logged in");
      setAuthenticated(true);
      return data;
    } catch (e) {
      throw e;
    }
  };

  const signup = async (signupData: userSignupFormDataModel) => {
    try {
      const { data } = await axios.post(`${API}/user/register`, {
        user_name: signupData.username,
        ...signupData,
      });
      const { token } = data;
      localStorage.setItem("token", token);
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      toast.success("Successfully signed up");

      setAuthenticated(true);
      return { data };
    } catch (e) {
      console.log("error in auth signup ", e);
      throw e;
    }
  };

  const value = {
    login,
    signup,
  };

  return (
    <AuthContext.Provider value={value}>
      {authLoading ? null : children}
    </AuthContext.Provider>
  );
};
