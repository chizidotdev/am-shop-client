import React from "react";
import { Text } from "@/ui/text";
import { Welcome } from "@/modules/dashboard/welcome";
import { SetupGuide } from "@/modules/dashboard/setup-guide";
import { Overview } from "@/modules/dashboard/overview";

export default function Dashboard() {
  return (
    <div className="flex flex-col gap-5">
      <Welcome />
      <Overview />
      <SetupGuide />
    </div>
  );
}
