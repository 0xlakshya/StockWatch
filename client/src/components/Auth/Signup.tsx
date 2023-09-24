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

import { Button } from "../ui/button";
import { Label } from "../ui/label";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
  SelectLabel,
  SelectGroup,
} from "../ui/select";
import { Input } from "../ui/input";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";

type SignupProps = {
  showLogin: () => void;
};

const Signup: React.FC<SignupProps> = (props) => {
    const auth = useAuth();
  const [broker, setBroker] = useState("Zerodha");
  const [type, setType] = useState("individual");
  const signupHandler = (e: any) => {
    e.preventDefault();
    const formData = {
      email: e.target.elements.email.value,
      password: e.target.elements.password.value,
      username: e.target.elements.username.value,
      broker,
      type,
    };
    console.log({ formData });
  };
  return (
    <form onSubmit={signupHandler}>
      <CardHeader>
        <CardTitle>Signup</CardTitle>
        <CardDescription>
          Fill your details to create an account.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid w-full items-center gap-4">
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="username">
              Username<sup>*</sup>
            </Label>
            <Input id="username" placeholder="johndoe" required />
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="email">
              Email<sup>*</sup>
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="john@doe.com"
              className="mb-4"
              required
            />
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="email">
              Password <sup>*</sup>
            </Label>
            <Input
              id="password"
              type="password"
              placeholder="password"
              required
            />
          </div>
          <div className="flex flex-col space-y-4">
            <Label htmlFor="radio">Account Type</Label>
            <RadioGroup
              id="type"
              defaultValue="individual"
              onValueChange={(e) => setType(e)}
              className="flex justify-around "
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="individual" id="r1" />
                <Label htmlFor="r1">Individual</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="institution" id="r2" />
                <Label htmlFor="r2">Institution</Label>
              </div>
            </RadioGroup>
          </div>

          <div className="flex flex-col space-y-4">
            <Label htmlFor="broker">Broker</Label>
            <RadioGroup
              id="broker"
              onValueChange={(e) => setBroker(e)}
              defaultValue="Zerodha"
              className="flex justify-around"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="Zerodha" id="r1" />
                <Label htmlFor="r1">Zerodha</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="Angel" id="r2" />
                <Label htmlFor="r2">Angel One</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="HDFC Securities" id="r3" />
                <Label htmlFor="r3">HDFC</Label>
              </div>
            </RadioGroup>
          </div>
        </div>

        <h2
          className="text-blue-600 cursor-pointer text-xs my-2 mt-[20px]"
          onClick={props.showLogin}
        >
          Already registered? Login
        </h2>
      </CardContent>
      <CardFooter>
        <Button className="w-full" type="submit">
          Submit
        </Button>
      </CardFooter>
    </form>
  );
};

export default Signup;
