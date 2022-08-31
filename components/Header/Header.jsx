import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="flex justify-between items-center py-2 sm:py-0">
      <div className="logo">logo</div>
      <Link href="/login">
        <a className="tag bg-blue-500 text-white rounded-full">Log In</a>
      </Link>
    </header>
  );
};

export default Header;
