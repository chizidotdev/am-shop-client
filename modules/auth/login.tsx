import React from "react";
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

export const Login = () => {
  return (
    <Dialog>
      <DialogTrigger>
        <Button variant="outline">Sign In</Button>
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
          <Button variant="outline" className="gap-2 items-center px-6 w-full">
            <FcGoogle size={18} />
            <span className="">Continue with Google</span>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
