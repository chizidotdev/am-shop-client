import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { Button } from "@/ui/button";

export const FavoritesButton = () => {
  return (
    <Button variant="ghost" className="rounded-full h-10 w-10 p-2">
      <FaRegHeart size={18} />
    </Button>
  );
};
