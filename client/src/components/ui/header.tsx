import React from "react";
import { Button } from "./button";
import { useAuth } from "@/contexts/AuthContext";

function Header() {
  const auth = useAuth();
  return (
    <div className="top-0  justify-end h-[3.5rem] flex items-center  p-2">
      <Button variant="default" onClick={auth?.logout}>
        Logout
      </Button>
    </div>
  );
}

export default Header;
