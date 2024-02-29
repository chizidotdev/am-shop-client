import { BASE_REST_URL } from "@/lib/constants";
import { useEffect, useState } from "react";
import { useSession } from "./session-context";
import { api } from "@/lib/axios";

export const getUser = async <T = APIResponse<User>>(): Promise<T> => {
  const response = await api.get<T>(`${BASE_REST_URL}/user`, {
    withCredentials: true,
  });

  console.log(response);
  return response.data;
};

export const signOut = async <T = APIResponse<null>>(): Promise<T> => {
  const response = await api.post<T>(`${BASE_REST_URL}/logout`);
  return response.data;
};

export const useGoogleLogin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { update } = useSession();

  useEffect(() => {
    return () => {
      setIsLoading(false);
      setIsSuccess(false);
    };
  }, []);

  const GOOGLE_AUTH_URL = `${BASE_REST_URL}/login/google`;

  function login() {
    setIsLoading(true);
    const browserWindow = window.open(GOOGLE_AUTH_URL, "Google Sign In", "width=800,height=600");
    let href = browserWindow?.location.href;

    let interval = setInterval(() => {
      if (browserWindow?.location.href) {
        href = browserWindow?.location.href;
      }

      if (browserWindow?.closed) {
        clearInterval(interval);
        setIsLoading(false);
        if (href?.includes("success=true")) {
          update();
          setIsSuccess(true);
        }
      }
    }, 1000);
  }

  return { isSuccess, isLoading, login };
};
