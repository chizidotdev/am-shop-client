"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { getUser, signOut } from "./api";

type SessionStatus = "loading" | "authenticated" | "unauthenticated";
type UseSessionReturn = {
  data: User | undefined;
  status: SessionStatus;
  update: () => void;
  logout: () => void;
};

const SessionContext = createContext({} as UseSessionReturn);

export const SessionProvider = ({ children }: { children: React.ReactNode }) => {
  const [data, setData] = useState<User>();
  const [status, setStatus] = useState<SessionStatus>("loading");

  useEffect(() => {
    update();
  }, []);

  async function update() {
    setStatus("loading");
    const response = await getUser();
    if (!response?.data) {
      setStatus("unauthenticated");
      return;
    }
    setData(response.data);
    setStatus("authenticated");
  }

  async function logout() {
    setStatus("loading");
    const response = await signOut();
    if (response?.code !== 200) {
      // TODO: handle error
      return;
    }
    setData(undefined);
    setStatus("unauthenticated");
  }

  return (
    <SessionContext.Provider value={{ data, update, logout, status }}>
      {children}
    </SessionContext.Provider>
  );
};

export function useSession(): UseSessionReturn {
  const context = useContext(SessionContext);
  if (!context) {
    throw new Error("useSession must be used within a SessionProvider");
  }

  return context;
}
