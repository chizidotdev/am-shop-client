import React from "react";
import { useSession } from "./session-context";
import { Login } from "./login";

type Role = User["role"] | "authenticated";
type PermissionsProps = {
  children: React.ReactNode;
  role: Role;
};
export const Permissions = ({ children, role }: PermissionsProps) => {
  const { status, data } = useSession();

  if (data?.role === "master") {
    return children;
  }

  if (role === "authenticated" && status !== "authenticated") {
    return <Login>{children}</Login>;
  }

  if (role === "authenticated" && status === role) {
    return children;
  }

  if (status === "unauthenticated" || status === "loading" || !data || data.role !== role) {
    return null;
  }

  return children;
};
