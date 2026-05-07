"use client";

import { MessageSquare } from "lucide-react";
import Link from "next/link";
import { siteConfig } from "@/lib/data/site-data";
import { motion } from "framer-motion";

export function WhatsAppButton() {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
      className="fixed bottom-6 right-6 z-50"
    >
      <Link
        href={siteConfig.links.whatsapp}
        target="_blank"
        className="flex items-center justify-center size-14 rounded-full bg-[#25D366] text-white shadow-lg hover:bg-[#128C7E] transition-colors group relative"
      >
        <MessageSquare className="size-7" />
        <span className="sr-only">Book on WhatsApp</span>
        
        {/* Tooltip */}
        <span className="absolute right-16 bg-white text-foreground text-sm font-medium py-2 px-4 rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border">
          Book Appointment
        </span>
      </Link>
    </motion.div>
  );
}
