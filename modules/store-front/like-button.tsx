"use client";
import { Button } from "@/ui/button";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import React, { useState } from "react";

export const LikeButton = () => {
  const [liked, setLiked] = useState(false);

  return (
    <Button
      variant="outline"
      size="icon"
      className="text-md rounded-full"
      onClick={() => setLiked((liked) => !liked)}
    >
      {liked ? <FaHeart /> : <FaRegHeart />}
    </Button>
  );
};
