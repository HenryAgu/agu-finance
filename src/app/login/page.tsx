"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { ChangeEvent, FormEvent, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/applications/store";
import { setInputValue } from "@/applications/inputValue/InputValueSlice";
import { account } from "../appwrite";
import { Toaster, toast } from "sonner";

interface User {}

const page = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [usernameError, setUsernameError] = useState<boolean>(false);
  const [passwordError, setPasswordError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [user, setUser] = useState<User | null>(null);

  const router = useRouter();
  console.log({user});

  useEffect(() => {
    async function getUser() {
      setUser(await account.get());
    }
    getUser();
  }, []);

  const dispatch = useDispatch();
  const username = useSelector((state: RootState) => state.inputValue.value);
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setInputValue(e.target.value));
    setUsernameError(false);
  };

  async function handleLogin(e: FormEvent) {
    try {
      await account.createEmailPasswordSession(email, password);
      setUser(await account.get());
      setEmail("");
      setPassword("");
      toast("Login successful!",{
        className:"text-green-700"
      });
    } catch (e) {
      console.error(e);
    }
    if(user){
      router.push("/dashboard");
    }
    if (username === "" && password === "" && email === "") {
      setUsernameError(true);
      setPasswordError(true);
      setEmailError(true);
    } else if (
      username.length <= 1 &&
      password.length <= 1 &&
      email.length <= 1
    ) {
      setUsernameError(true);
      setPasswordError(true);
      setEmailError(true);
    } else if (username === "") {
      setUsernameError(true);
    } else if (password === "") {
      setPasswordError(true);
    } else if (email === "") {
      setEmailError(true);
    } else {
      setLoading(true);
      setLoading(false);
      setUsernameError(false);
      setPasswordError(false);
      setEmailError(false);
    }
  }

  return (
    <div className="flex flex-col gap-y-5 items-center h-full mt-40">
      <Toaster />
      <div>
        <h1 className="font-bold text-2xl lg:text-3xl">Login Page</h1>
      </div>
      <form
        action=""
        className="flex flex-col gap-y-3.5 border border-black shadow-lg px-6 py-7 rounded-md w-11/12 md:w-3/4 lg:w-1/3"
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
            onChange={handleInputChange}
          />
          {usernameError ? (
            <span className="text-xs text-red-600">
              Username cannot be empty!
            </span>
          ) : null}
        </div>
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
            type="password"
            placeholder="Enter your password"
            value={password}
            name="password"
            className="p-2 border border-black rounded-md text-sm"
            onChange={(e) => {
              setPassword(e.target.value);
              setPasswordError(false);
            }}
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
          onClick={handleLogin}
        >
          {loading ? "Loggin in..." : "Login"}
        </button>
        <span className="text-center text-xs">
          Don't have an account?
          <Link href="/signup" className="ml-1 text-green-700">
            Sign up
          </Link>
        </span>
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
