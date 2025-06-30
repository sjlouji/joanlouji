import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

interface PaginationProps {
  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  className?: string;
}

export function Pagination({
  page,
  totalPages,
  onPageChange,
  className = "",
}: PaginationProps) {
  // Show up to 5 page numbers, with ellipsis if needed
  const getPageNumbers = () => {
    const pages = [];
    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      if (page <= 3) {
        pages.push(1, 2, 3, 4, "...", totalPages);
      } else if (page >= totalPages - 2) {
        pages.push(
          1,
          "...",
          totalPages - 3,
          totalPages - 2,
          totalPages - 1,
          totalPages
        );
      } else {
        pages.push(1, "...", page - 1, page, page + 1, "...", totalPages);
      }
    }
    return pages;
  };

  return (
    <nav
      className={`flex items-center justify-center gap-1 mt-8 ${className}`}
      aria-label="Pagination"
    >
      <motion.button
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="p-2 rounded hover:bg-gray-200 disabled:opacity-50"
        onClick={() => onPageChange(page - 1)}
        disabled={page === 1}
        aria-label="Previous"
      >
        <ChevronLeft className="w-5 h-5" />
      </motion.button>
      {getPageNumbers().map((p, i) =>
        typeof p === "number" ? (
          <motion.button
            key={p}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className={`px-3 py-1 rounded font-mono text-sm ${
              page === p
                ? "bg-gray-900 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
            onClick={() => onPageChange(p)}
            aria-current={page === p ? "page" : undefined}
          >
            {p}
          </motion.button>
        ) : (
          <span
            key={"ellipsis-" + i}
            className="px-2 text-gray-400 select-none"
          >
            …
          </span>
        )
      )}
      <motion.button
        whileHover={page === totalPages ? undefined : { scale: 1.08 }}
        whileTap={page === totalPages ? undefined : { scale: 0.95 }}
        className="p-2 rounded hover:bg-gray-200 disabled:opacity-50"
        onClick={() => onPageChange(page + 1)}
        disabled={page === totalPages}
        aria-label="Next"
      >
        <ChevronRight className="w-5 h-5" />
      </motion.button>
    </nav>
  );
}
