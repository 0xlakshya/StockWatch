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

const LoginModal = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [tab, setTab] = useState<"login" | "signup">("login");
  useEffect(() => {
    setTimeout(() => {
      setShowLoginModal(true);
    }, 1000);
  }, []);
  return (
    <>
      {showLoginModal && (
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
