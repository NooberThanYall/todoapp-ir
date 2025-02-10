"use client";
import React, { useEffect, useState } from "react";
import { decrypt } from "@/lib/auth/jwt";
import { useRouter } from "next/navigation";
import { getCookieValue } from "@/lib/utils";

const SignInForm = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false); // Add loading state
  const router = useRouter();

  useEffect(() => {
    async function checkUserAdmin() {
      const session = getCookieValue("session");if (!session) {
        router.push("/auth/login");
      }
      // @ts-expect-error huh
      const user = await decrypt(session);
      if (!user.admin) {
        router.push("/app");
      }
    }
    checkUserAdmin();
  }, []);
  async function handleSignIn(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const values = Object.fromEntries(formData.entries());

    try {
      setLoading(true); // Set loading to true
      setError(""); // Reset error state

      // Send login request
      const req = await fetch("/api/admin/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (!req.ok) {
        throw new Error("Login failed. Please try again.");
      }

      const res = await req.json();

      // Handle unsuccessful login
      if (!res.success) {
        throw new Error(res.message);
      }

      router.push("/admin/panel");
    } catch (err) {
      setError(err.message || "An unexpected error occurred.");
    } finally {
      setLoading(false); // Set loading to false
    }
  }

  return (
    <div
      className="w-full rounded-lg shadow-lg dark:border md:mt-0 sm:max-w-md xl:p-0 bg-darkblue"
      style={{ opacity: loading ? 0.5 : 1 }} // Lower opacity during loading
    >
      <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
        <h1 className="text-xl text-center leading-tight tracking-tight text-white md:text-3xl dark:text-white">
          ورود
        </h1>
        <form className="space-y-4 md:space-y-6" onSubmit={handleSignIn}>
          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              پسورد
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="••••••••"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <button
            type="submit"
            className={`w-full text-white bg-lightblue outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-800 ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={loading}
          >
            ورود
          </button>
          {error && <p className="text-red-500">{error}</p>}
          <p className="text-sm font-light text-gray-500 dark:text-gray-400">
            اکانت نداری؟{" "}
            <a
              href="#"
              className="font-medium text-primary-600 hover:underline dark:text-primary-500"
            >
              ثبت نام
            </a>
          </p>
        </form>
        {loading && (
          <div className="flex justify-center mt-4">
            <div className="w-6 h-6 border-4 border-blue-500 rounded-full animate-spin border-t-transparent"></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SignInForm;
