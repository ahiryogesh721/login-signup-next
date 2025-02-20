"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import Link from "next/link";

export type AdAcountType = {
  id: string;
  name: string;
};

const HomePage = () => {
  const router = useRouter();
  const sessionKey = Cookies.get("sessionKey");

  const handleLogout = () => {
    Cookies.remove("sessionKey");
    router.push("/auth/O");
  };

  const [adAccounts, setAdAccounts] = useState<AdAcountType[]>([]);

  const getAdAcounts = async () => {
    if (sessionKey) {
      try {
        const res = await axios.get(
          `http://localhost:5000/facebook/ad-accounts?sessionKey=${sessionKey}`
        );
        const data = JSON.parse(res.data);
        console.log("data::", data);
        setAdAccounts(data);
      } catch (error) {
        console.log("error::", error);
      }
    } else return;
  };

  useEffect(() => {
    getAdAcounts();

    if (!sessionKey) router.push("/auth/O");
  }, [router]);

  return (
    <div className="h-screen flex flex-col justify-center items-center relative">
      <div>
        <h1>Select an Ad Account</h1>
        <div className="flex flex-col gap-2 ">
          {adAccounts.length !== 0 ? (
            adAccounts.map((account) => (
              <Link
                href={`https://lookerstudio.google.com/u/0/datasources/create?connectorId=AKfycbx2XyIamlC0qP_pZIOyd8-hOC6oOX_-KWXPE8E3hNM?sessionKey=${Cookies.get(
                  "sessionKey"
                )}&adAccountId=${account.id}`}
                key={account.id}
                className="text-white p-3 rounded-2xl bg-gray-800 hover:bg-gray-950 self-center"
              >
                {account.name}
              </Link>
            ))
          ) : (
            <p>no acount found</p>
          )}
        </div>
      </div>

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
