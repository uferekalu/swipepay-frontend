import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { GeneralContext } from "../layouts/DefaultLayout";

export default function HeaderDefault(props) {
  const { token, setToken } = useContext(GeneralContext);
  const router = useRouter();

  useEffect(() => {
    const tokenData = localStorage.getItem("token");
    setToken(tokenData);
  }, [setToken]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken("");
    router.push("/");
  };

  return (
    <header className="flex navbar justify-between">
      <div className="">
        <Link href="/">
          <Image
            className="rounded-full"
            src="/assets/images/logo.jpg"
            width={50}
            height={50}
            alt="logo"
          />
        </Link>
      </div>
      <div className="flex space-x-4">
        {token ? (
            <>
            <button
              onClick={() => router.push("/order-history")}
              className="px-4 py-1 h-9 text-sm text-purple-600 font-medium rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-offset-2"
            >
              View Order History
            </button>
          <button
            onClick={handleLogout}
            className="px-4 py-1 h-9 bg-black text-sm text-white font-medium rounded-full hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-offset-2"
          >
            Logout
          </button>
            </>
        ) : (
          <>
            <button
              onClick={() => router.push("/signup")}
              className="px-4 py-1 h-9 text-sm text-purple-600 font-medium rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-offset-2"
            >
              Sign Up
            </button>
            <button
              onClick={() => router.push("/login")}
              className="px-4 py-1 h-9 bg-black text-sm text-white font-medium rounded-full hover:text-black hover:bg-white hover:border-slate-500 focus:outline-none focus:ring-2 focus:ring-offset-2"
            >
              Log In
            </button>
          </>
        )}
      </div>
    </header>
  );
}
