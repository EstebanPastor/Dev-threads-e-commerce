"use client";

import { useState, useRef, useEffect } from "react";

import { useSession } from "next-auth/react";

import { createUser } from "@/app/(auth)/actions/authActions";

import toast from "react-hot-toast";

import { TbBracketsAngle } from "react-icons/tb";

import Input from "../ui/input/Input";
import Button from "../ui/button/Button";

import Link from "next/link";
import { useRouter } from "next/navigation";

const SignUp = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const session = useSession();

  const ref = useRef<HTMLFormElement>(null);

  const router = useRouter();

  useEffect(() => {
    if (session.status === "authenticated") {
      toast.success("You are already signed in");
      router.push("/");
    }
  }, [session.status, router]);

  const handleSubmit = async (formData: FormData) => {
    setIsSubmitting(true);
    const result = await createUser(formData);
    if (result?.existingUser) {
      toast.error("User already exists");
    } else {
      toast.success("Account created successfully");
      ref.current?.reset();
      router.push("/sign-in");
    }
    setIsSubmitting(false);
  };

  return (
    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-2xl md:outline outline-1 outline-gray-200">
      <div className="px-4 py-8 sm:rounded-lg sm:px-10">
        <div className="md:text-4xl sm:text-2xl mb-5 uppercase w-full text-center flex items-center text-white gap-1 justify-center bg-gray-700 py-4 rounded-md">
          <h1>Join to dev threads gang</h1>
          <TbBracketsAngle />
        </div>
        <form
          className="space-y-6 mb-3"
          ref={ref}
          onSubmit={(e) => {
            e.preventDefault();
            const formData = new FormData(e.currentTarget);
            handleSubmit(formData);
          }}
        >
          <Input type="text" id="name" label="Name" disabled={isSubmitting} />
          <Input
            type="email"
            id="email"
            label="Email"
            disabled={isSubmitting}
          />
          <Input
            type="password"
            id="password"
            label="Password"
            disabled={isSubmitting}
          />
          <Button type="submit">Create Account</Button>
        </form>
        <Link href="/sign-in">
          <span className="mt-3 hover:underline">
            Already have an account? Sign in &#8594;
          </span>
        </Link>
      </div>
    </div>
  );
};

export default SignUp;
