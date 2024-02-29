import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className=" w-screen bg-slate-700 p-2">
      <div className=" flex flex-1 items-center ml-10 mr-10">
        <h1 className=" text-l font-medium uppercase text-white mr-36">Phone List App</h1>
        <Link href="/" className=" text-gray-50 mr-5">
          Home
        </Link>
        <Link href="/contacts" className=" text-gray-50 mr-5">
          About
        </Link>
        <Link href="/contacts" className=" text-gray-50 mr-5">
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
