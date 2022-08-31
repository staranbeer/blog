import { useRouter } from "next/router";
import React from "react";

const Login = () => {
  const router = useRouter();
  return (
    <div className="relative h-[95vh] grid place-items-center">
      <button
        onClick={() => router.push("/")}
        className="bg-blue-500 text-white font-bold text-lg md:text-2xl px-4 md:px-10 py-3 rounded-full"
      >
        Login As a Guest!
      </button>
    </div>
  );
};

export default Login;
