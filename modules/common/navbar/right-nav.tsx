import React from "react";
import { AuthMenu } from "@/modules/auth/login";
import { FavoritesButton } from "./favorites-button";
import { CartDialog } from "../cart-dialog";

export const RightNav = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div className="flex items-center gap-1">
      {children}
      <FavoritesButton />
      <CartDialog />
      <AuthMenu />
    </div>
  );
};
