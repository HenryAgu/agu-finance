"use client";
import Link from "next/link";
import React, { ChangeEvent, FormEvent, useState, useEffect } from "react";
import { ID, account } from "../appwrite";

const page = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [emailError, setEmailError] = useState<boolean>(false);
  const [passwordError, setPasswordError] = useState<boolean>(false);

  async function handleSignup(e: FormEvent) {
    try {
      await account.create(ID.unique(), email, password);
    } catch (e) {
      console.error;
    }
  }
  return (
    <div className="flex flex-col gap-y-5 items-center h-full mt-40">
      <div>
        <h1 className="font-bold text-2xl lg:text-3xl">Signup Page</h1>
      </div>
      <form
        action=""
        className="flex flex-col gap-y-3.5 border border-black shadow-lg px-6 py-7 rounded-md w-11/12 md:w-3/4 lg:w-1/3"
      >
        <div className="flex flex-col">
          <label htmlFor="" className="mb-1 font-medium text-sm lg:text-base">
            Email Address
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            name="email"
            className="p-2 border border-black rounded-md text-sm"
            onChange={(e) => setEmail(e.target.value)}
          />
          {emailError ? (
            <span className="text-xs text-red-600">
              Email address cannot be empty!
            </span>
          ) : null}
        </div>
        <div className="flex flex-col">
          <label htmlFor="" className="mb-1 font-medium text-sm lg:text-base">
            Password
          </label>
          <input
            type="text"
            placeholder="Enter your password"
            value={password}
            name="username"
            className="p-2 border border-black rounded-md text-sm"
            onChange={(e) => setPassword(e.target.value)}
          />
          {passwordError ? (
            <span className="text-xs text-red-600">
              Password cannot be empty!
            </span>
          ) : null}
        </div>
        <button
          className="bg-black text-white p-2.5 rounded-md text-sm"
          type="button"
          onClick={handleSignup}
        >
          Create account
        </button>
        <div className="flex items-center">
          <div className="h-[1px] w-full bg-[#eaeaec] mr-2"></div>
          <span className="text-sm">or</span>
          <div className="h-[1px] w-full bg-[#eaeaec] ml-2"></div>
        </div>
        <button className="flex items-center justify-center gap-x-3.5 bg-white text-black border-2 border-black p-2.5 rounded-md text-sm">
          <img src="assets/google.png" alt="" className="h-[25px] w-[25px]" />
          <p>
            Sign up with <span className="font-bold">Google</span>
          </p>
        </button>
        <span className="text-center text-xs">
          Already have an account?
          <Link href="/login" className="ml-1 text-green-700">
            Login
          </Link>
        </span>
      </form>
    </div>
  );
};

export default page;
