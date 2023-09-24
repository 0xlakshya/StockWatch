import React, { useEffect, useState } from "react";
import Modal from "../ui/modal";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "../ui/card";
import {
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@radix-ui/react-select";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Select } from "../ui/select";
import { Input } from "../ui/input";
import Login from "./Login";
import Signup from "./Signup";
import { useAuth } from "@/contexts/AuthContext";

const LoginModal = () => {
  const auth = useAuth();
  const [tab, setTab] = useState<"login" | "signup">("login");
  return (
    <>
      {!auth?.isAuthenticated && (
        <Modal closeOnOutsideClick={false}>
          <Card className="w-[300px] sm:w-[450px]">
            {tab === "login" && (
              <Login
                showSignup={() => {
                  setTab("signup");
                }}
              />
            )}
            {tab === "signup" && (
              <Signup
                showLogin={() => {
                  setTab("login");
                }}
              />
            )}
          </Card>
        </Modal>
      )}
    </>
  );
};

export default LoginModal;
