import React from "react";
import { useSession } from "./session-context";
import { Login } from "./login";

export const Permissions = ({
  children,
  role,
}: {
  children: React.ReactNode;
  role: User["role"] | "authenticated";
}) => {
  const { status, data } = useSession();

  if (role === "authenticated" && status !== "authenticated") {
    return <Login>{children}</Login>;
  }

  if (role === "authenticated" && status === role) {
    return children;
  }

  if (status === "unauthenticated" || status === "loading" || !data) {
    return null;
  }

  if (data.role !== role) {
    return null;
  }

  return children;
};
