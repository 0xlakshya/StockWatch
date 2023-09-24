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
import { useAuth } from "@/contexts/AuthContext";

type LoginProps = {
  showSignup: () => void;
};

const Login: React.FC<LoginProps> = (props) => {
  const auth = useAuth();
  const loginHandler = (e: any) => {
    e.preventDefault();
    const formData = {
      password: e.target.elements.password.value,
      user_name: e.target.elements.name.value,
    };
    auth?.login(formData);
  };
  return (
    <form onSubmit={loginHandler}>
      <CardHeader>
        <CardTitle>Login</CardTitle>
        <CardDescription>Sign in with your credentials</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid w-full items-center gap-4">
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="name">
              User Name <sup>*</sup>
            </Label>
            <Input id="name" placeholder="johndoe" required />
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="name">
              Password <sup>*</sup>
            </Label>
            <Input id="password" placeholder="password" required />
          </div>
        </div>

        <h2
          className="text-blue-600 cursor-pointer text-xs my-2"
          onClick={props.showSignup}
        >
          Not registered? Signup
        </h2>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Test Login</Button>
        <Button className="" type="submit">
          Submit
        </Button>
      </CardFooter>
    </form>
  );
};

export default Login;
