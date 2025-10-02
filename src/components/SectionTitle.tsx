"use client";

import Link from "next/link";
import React from "react";

type Props = {
  title: string;
  href?: string;
  onClick?: () => void;
};

export const SectionTitle = ({ title, href, onClick }: Props) => {
  return (
    <div className="flex justify-between mb-3 items-center">
      <h3 className="text-lg md:text-xl lg:text-2xl font-bold">{title}</h3>

      {onClick ? (
        <button
          onClick={onClick}
          className="text-primary font-bold cursor-pointer text-sm hover:underline"
        >
          Ver tudo
        </button>
      ) : href ? (
        <Link
          href={href}
          className="text-primary font-bold cursor-pointer text-sm hover:underline"
        >
          Ver tudo
        </Link>
      ) : (
        <span className="text-primary font-bold text-sm"> </span>
      )}
    </div>
  );
};
