"use client";
import React from "react";
import { Text } from "@/ui/text";
import { useSession } from "../auth/session-context";
import { Skeleton } from "@/ui/skeleton";

export const Welcome = () => {
  const { data, status } = useSession();
  const greeting = getGreeting();

  if (status === "loading") {
    return <Skeleton className="w-96 h-8" />;
  }

  return (
    <div>
      <Text variant="h1">
        {greeting}, {data?.firstName}
      </Text>
    </div>
  );
};

const getGreeting = () => {
  const date = new Date();
  const hours = date.getHours();
  if (hours < 12) {
    return "Good Morning";
  } else if (hours < 18) {
    return "Good Afternoon";
  } else {
    return "Good Evening";
  }
};
