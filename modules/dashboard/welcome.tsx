"use client";
import React from "react";
import { Text } from "@/ui/text";

export const Welcome = () => {
  const greeting = getGreeting();

  return (
    <div>
      <Text variant="h1">{greeting}, John</Text>
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
