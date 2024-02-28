import React from "react";
import { Text } from "@/ui/text";
import { Welcome } from "@/modules/dashboard/welcome";
import { SetupGuide } from "@/modules/dashboard/setup-guide";

export default function Dashboard() {
  return (
    <div className="flex flex-col gap-5">
      <Welcome />
      <SetupGuide />
    </div>
  );
}
