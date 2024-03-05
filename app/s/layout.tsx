import type { Metadata } from "next";
import { MainNav } from "@/common/navbar";

export const metadata: Metadata = {
  title: "Store Front - Aidmedium",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <MainNav />
      <div className="relative max-w-5xl mx-auto p-5">{children}</div>
    </>
  );
}
