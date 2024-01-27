"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <div className="flex items-center gap-10 py-16">
      <Link
        className="text-sm font-medium hover:text-slate-200 ease-in-out transition-all duration-500"
        href="https://www.youtube.com/channel/UCK07KiZyQzHzc5NHs8r9a0w"  target="__blank_"
      >
        Subscribe Here &nbsp;&#129109;
      </Link>
      
      <Link
        className="text-sm font-medium hover:text-slate-200 ease-in-out transition-all duration-500"
        href="https://youtu.be/oikSYxS3nW4" target="__blank_"
      >
        Tutorial   &nbsp;&#129109;
      </Link>
    
    </div>
  );
}

export default Footer;
