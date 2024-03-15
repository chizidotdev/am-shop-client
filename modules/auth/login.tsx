"use client";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/ui/dialog";
import { Button } from "@/ui/button";
import { FcGoogle } from "react-icons/fc";
import { AppLogo } from "@/common/app-logo";
import { useGoogleLogin } from "./api";
import { FaCircleNotch } from "react-icons/fa";
import { useSession } from "./session-context";
import { UserMenu } from "./user-menu";

export const Login = ({ children }: { children?: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger>
        {children ? children : <Button variant="outline">Sign In</Button>}
      </DialogTrigger>
      <DialogContent className="max-w-md">
        <DialogHeader className="text-center sm:text-center items-center">
          <div className="mb-3">
            <AppLogo />
          </div>
          <DialogTitle>Sign In</DialogTitle>
          <DialogDescription>Sign in to your account to continue</DialogDescription>
        </DialogHeader>

        <div className="py-4 mx-auto">
          <LoginContent setIsOpen={setIsOpen} />
        </div>
      </DialogContent>
    </Dialog>
  );
};

const LoginContent = ({
  setIsOpen,
}: {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const { isLoading, login } = useGoogleLogin(()=> setIsOpen(false));

  return (
    <Button
      variant="outline"
      className="gap-2 items-center px-6 w-full"
      onClick={login}
      disabled={isLoading}
    >
      {isLoading ? <FaCircleNotch className="animate-spin" /> : <FcGoogle size={18} />}
      <span className="">Continue with Google</span>
    </Button>
  );
};

export const AuthMenu = () => {
  const { status } = useSession();

  return <>{status === "authenticated" ? <UserMenu /> : <Login />}</>;
};
