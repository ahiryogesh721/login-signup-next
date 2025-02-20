"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

const Auth = () => {
  const router = useRouter();
  const sessionKey = Cookies.get("sessionKey");

  const sessiomChek = () => {
    const sessionKey = new URLSearchParams(window.location.search).get(
      "sessionKey"
    );
    if (sessionKey) {
      Cookies.set("sessionKey", sessionKey);
      router.push("/home");
    }
  };

  useEffect(() => {
    sessiomChek();

    if (sessionKey) router.push("/home");
  }, []);

  return (
    <div className="p-6 w-full h-full flex flex-clo gap-5 justify-center">
      <div className="h-full">
        <a href="http://localhost:5000/auth/facebook-auth">
          <h1>
            <button className="p-3 bg-gray-800 rounded-full hover:bg-gray-950">
              Authenticate with Facebook: Login with Facebook
            </button>
          </h1>
        </a>
      </div>
    </div>
  );
};

export default Auth;
