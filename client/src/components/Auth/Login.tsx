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

type LoginProps = {
  showSignup: () => void;
};

const Login: React.FC<LoginProps> = (props) => {
  return (
    <>
      <CardHeader>
        <CardTitle>Login</CardTitle>
        <CardDescription>Sign in with your credentials</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">User Name</Label>
              <Input id="name" placeholder="johndoe" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Password</Label>
              <Input id="name" placeholder="password" />
            </div>
          </div>
        </form>

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
    </>
  );
};

export default Login;
