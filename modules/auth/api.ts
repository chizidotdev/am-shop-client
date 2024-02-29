import axios from "axios";
import { BASE_REST_URL } from "@/lib/constants";
import { useEffect, useState } from "react";
import { useSession } from "./session-context";

export const getUser = async (): Promise<APIResponse<User> | undefined> => {
  const response = await axios.get(`${BASE_REST_URL}/user`, {
    withCredentials: true,
  });

  return response.data;
};

export const signOut = async (): Promise<APIResponse<string>> => {
  const response = await axios.post(`${BASE_REST_URL}/logout`);
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
