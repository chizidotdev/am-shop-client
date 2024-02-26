"use client";

import React from "react";
import { AppLogo } from "@/common/app-logo";
import { cn } from "@/lib/utils";
import { MdOutlineShoppingBag } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { Button } from "@/ui/button";
import { StorefrontSearch } from "./storefront-search";

export function MainNav() {
  const [hasScrolled, setHasScrolled] = React.useState(false);

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
        "sticky top-0 bg-background z-10 max-w-7xl mx-auto p-5 py-3",
        "flex items-center justify-between space-x-4 lg:space-x-6 transition-all",
        hasScrolled && "border-b shadow-sm",
      )}
    >
      <AppLogo />

      <StorefrontSearch />

      <div className="flex items-center gap-1">
        <Button variant="ghost" className="rounded-full h-11 w-11 p-3">
          <FaRegHeart size={24} />
        </Button>
        <Button variant="ghost" className="rounded-full h-11 w-11 p-3">
          <MdOutlineShoppingBag size={25} />
        </Button>
        <Button variant="secondary">Sign In</Button>
      </div>
      {/*links.map(({ href, label }) => {
        const isActive = pathname === href;

        return (
          <Link
            key={`${href}${label}`}
            href={href}
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary",
              !isActive && "text-muted-foreground",
            )}
          >
            {label}
          </Link>
        );
      })*/}
    </nav>
  );
}

const links = [
  { href: "/dashboard", label: "Overview" },
  { href: "/products", label: "Products" },
  // { href: '/dashboard', label: 'Customers' },
  // { href: '/dashboard', label: 'Settings' },
];
