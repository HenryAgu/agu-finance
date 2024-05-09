"use client";
import Link from "next/link";
import React, { FormEvent, useState } from "react";

const page = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [usernameError, setUsernameError] = useState<boolean>(false);
  const [passwordError, setPasswordError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const handleLogin = (e: FormEvent) => {
    e.preventDefault();
    if (username === "" && password === "") {
      setUsernameError(true);
      setPasswordError(true);
    } else if (username === "") {
      setUsernameError(true);
    } else if (password === "") {
      setPasswordError(true);
    } else {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setUsernameError(false);
        setPasswordError(false);
      },2000)
    }
  };
  return (
    <div className="flex flex-col gap-y-5 items-center h-full mt-40">
      <div>
        <h1 className="font-bold text-2xl lg:text-3xl">Login Page</h1>
      </div>
      <form
        action=""
        className="flex flex-col gap-y-3.5 border border-black shadow-lg px-6 py-7 rounded-md w-11/12 md:w-3/4 lg:w-1/3"
        onSubmit={handleLogin}
      >
        <div className="flex flex-col">
          <label htmlFor="" className="mb-1 font-medium text-sm lg:text-base">
            Username
          </label>
          <input
            type="text"
            placeholder="Enter your username"
            value={username}
            name="username"
            className="p-2 border border-black rounded-md text-sm"
            onChange={(e) => { setUsername(e.target.value); setUsernameError(false); }}
          />
          {usernameError ? (
            <span className="text-xs text-red-600">
              Username cannot be empty!
            </span>
          ) : null}
        </div>
        <div className="flex flex-col">
          <label htmlFor="" className="mb-1 font-medium text-sm lg:text-base">
            Password
          </label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            name="password"
            className="p-2 border border-black rounded-md text-sm"
            onChange={(e) => {setPassword(e.target.value); setPasswordError(false)}}
          />
          {passwordError ? (
            <span className="text-xs text-red-600">
              Password cannot be empty!
            </span>
          ) : null}
        </div>
        <button className="bg-black text-white p-2.5 rounded-md text-sm">
          {loading ? "Loggin in..." : "Login"}
        </button>
      </form>
      <p>
        Go back
        <Link href="/" className="text-hyperlink">
          {" "}
          home
        </Link>
      </p>
    </div>
  );
};

export default page;
