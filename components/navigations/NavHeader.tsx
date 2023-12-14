"use client";

import React from "react";

import { cn } from "@/lib/utils";

import "./navigation.css";

interface NavHeader {
  path: string;
}

const NavHeader = ({ path }: NavHeader) => {
  return (
    <div className="flex items-end justify-between px-40 mt-[50px] mx-auto">
      <div
        className={cn(
          path == "/"
            ? "invisible"
            : "text-base font-commissioner text-[#868686]"
        )}
      >
        <a href="/">Back</a>
      </div>
      <div className="text-base font-commissioner text-[#868686] max-md:hidden">
        <ul className="flex gap-4">
          <li className={cn(path == "/blogs" ? "text-black" : "")}>
            <a href="/blogs">Blog</a>
          </li>
          <li className={cn(path == "/components" ? "text-black" : "")}>
            <a href="/componenets">Components</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavHeader;
