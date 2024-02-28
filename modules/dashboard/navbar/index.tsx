"use client";

import React from "react";
import { AppLogo } from "@/common/app-logo";
import { cn } from "@/lib/utils";
import { MdOutlineShoppingBag } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { Button } from "@/ui/button";
import { DashboardSearch } from "./dashboard-search";
import { Login } from "@/modules/auth/login";
import { usePathname } from "next/navigation";
import Link from "next/link";

export function DashboardNav() {
  const [hasScrolled, setHasScrolled] = React.useState(false);
  const pathname = usePathname();

  React.useEffect(() => {
    const setScrollHandler = () => {
      const scroll = document.documentElement.scrollTop;
      scroll > 16 ? setHasScrolled(true) : setHasScrolled(false);
    };

    document.addEventListener("scroll", setScrollHandler);

    return () => {
      document.removeEventListener("scroll", setScrollHandler);
    };
  }, []);

  return (
    <nav
      className={cn(
        "sticky top-0 bg-background z-10 transition-all",
        hasScrolled && "border-b shadow-sm",
      )}
    >
      <div className="border-b">
        <div className="flex items-center justify-between gap-5 max-w-7xl mx-auto p-5 py-3">
          <AppLogo />

          <div className="flex items-center gap-1">
            <Link href="/">
              <Button variant="link">Shop</Button>
            </Link>
            <Button variant="ghost" className="rounded-full h-10 w-10 p-2">
              <FaRegHeart size={18} />
            </Button>
            <Button variant="ghost" className="rounded-full h-10 w-10 p-2">
              <MdOutlineShoppingBag size={20} />
            </Button>
            <Login />
          </div>
        </div>
      </div>

      <div className="border-b">
        <div className="max-w-7xl mx-auto px-5">
          <div className="flex items-center gap-3 md:gap-5">
            {links.map(({ href, label }) => {
              const isActive = pathname === href;

              return (
                <Link
                  key={`${href}${label}`}
                  href={href}
                  className={cn(
                    "text-sm font-medium transition-colors border-b-2 border-background text-muted-foreground",
                    "flex items-center h-12 sm:h-14 px-3",
                    isActive && "text-foreground border-b-2 border-primary",
                    "hover:text-foreground hover:border-primary",
                  )}
                >
                  {label}
                </Link>
              );
            })}
          </div>
          {/* <DashboardSearch className="sm:hidden w-full mt-5" /> */}
        </div>
      </div>
    </nav>
  );
}

const links = [
  { href: "/dashboard", label: "Dashboard" },
  { href: "/dashboard/products", label: "Products" },
  { href: "/settings", label: "Settings" },
];
