"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";

const HomePage = () => {
  const router = useRouter();

  const handleLogout = () => {
    Cookies.remove("token");
    router.push("/auth/login");
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center relative">
      {/* Connect Button */}
      <button className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700">
        Connect
      </button>

      {/* Logout Button */}
      <button
        onClick={handleLogout}
        className="absolute top-4 right-4 px-4 py-2 bg-red-500 text-white rounded-md shadow-md hover:bg-red-600"
      >
        Logout
      </button>
    </div>
  );
};

export default HomePage;
