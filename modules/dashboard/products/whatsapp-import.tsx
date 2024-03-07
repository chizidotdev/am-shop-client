import { ComingSoonBadge } from "@/common/coming-soon-badge";
import React from "react";
import { FaWhatsapp } from "react-icons/fa";

export const WhatsappImport = () => {
  return (
    <div className="flex items-center gap-1">
      <FaWhatsapp className="text-success mb-0.5" size={18} />
      Import&nbsp;
      <ComingSoonBadge />
    </div>
  );
};
