import React from "react";
import { Input } from "@/ui/input";
import { Label } from "@/ui/label";
import { Button } from "@/ui/button";

export const AccountSettings = () => {
  return (
    <div className="flex flex-col gap-2 max-w-lg">
      <div className="space-y-1">
        <Label htmlFor="name">Name</Label>
        <Input id="name" defaultValue="Pedro Duarte" />
      </div>
      <div className="space-y-1">
        <Label htmlFor="username">Username</Label>
        <Input id="username" defaultValue="@peduarte" />
      </div>

      <div>
        <Button className="mt-5">Update Account</Button>
      </div>
    </div>
  );
};
