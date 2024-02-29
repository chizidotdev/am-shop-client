"use client";
import React, { useEffect } from "react";
import { Alert, AlertDescription } from "@/ui/alert";
import { FiCheck } from "react-icons/fi";
import { useSearchParams } from "next/navigation";
import { AppLogo } from "@/common/app-logo";
import { AlertTriangleIcon } from "lucide-react";
import { Button } from "@/ui/button";

export default function Page() {
  const searchParams = useSearchParams();

  useEffect(() => {
    setTimeout(() => {
      window.close();
    }, 4000);
  }, []);

  let body = (
    <Alert variant="success">
      <FiCheck className="h-4 w-4" />
      <AlertDescription>
        You have successfully logged in. You'll be redirected to the dashboard in a few seconds.
      </AlertDescription>
    </Alert>
  );

  if (searchParams.get("error")) {
    body = (
      <Alert variant="destructive">
        <AlertTriangleIcon className="h-4 w-4" />
        <AlertDescription>
          There was an error logging in with Google. Please try again.
        </AlertDescription>
      </Alert>
    );
  }

  return (
    <div className="mx-5">
      <div className="mx-auto my-10 w-fit">
        <AppLogo />
      </div>

      <div className="mx-auto flex h-[70vh] max-w-sm flex-col justify-center px-5">
        {body}
        <Button className="mt-4" onClick={() => window.close()}>
          Return to app
        </Button>
      </div>
    </div>
  );
}
