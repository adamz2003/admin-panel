import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import React from "react";
import {
  Button,
  Dialog,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
} from "@material-tailwind/react";
import { useRouter } from "next/router";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import Head from "next/head";

import { signIn } from "next-auth/react";
import Link from "next/link";

const frontEndUrl = "http://localhost:3000";

export default function Home() {
  const router = useRouter();

  const gotoDashboard = () => {
    router.push("/dashboard");
  };

  const signInWithGoogle = async () => {
    await signIn("google", { callbackUrl: frontEndUrl + "/dashboard" });
  };

  return (
    <main
      className={`min-h-screen bg-gray-200 ${inter.className} flex justify-center items-center`}
    >
      <Head>
        <title>BuBe Admin Panel</title>
      </Head>
      <Card className="mx-auto w-full max-w-[24rem]">
        <CardHeader
          variant="gradient"
          color="blue"
          className="mb-4 grid h-28 place-items-center"
        >
          <Typography variant="h3" color="white">
            Sign In
          </Typography>
        </CardHeader>
        <CardBody className="flex flex-col gap-4">
          <Button
            size="lg"
            variant="outlined"
            color="blue-gray"
            className="flex items-center gap-3"
            onClick={signInWithGoogle}
          >
            <FcGoogle className="w-6 h-6" />
            <Typography>Continue with google</Typography>
          </Button>
          <Button
            size="lg"
            variant="outlined"
            color="blue-gray"
            className="flex items-center gap-3"
          >
            <BsFacebook className="w-6 h-6" />
            <Typography>Continue with facebook</Typography>
          </Button>
          <Input label="Email" size="lg" />
          <Input label="Password" size="lg" />
          <div className="-ml-2.5">
            <Checkbox label="Remember Me" />
          </div>
        </CardBody>
        <CardFooter className="pt-0">
          <Button variant="gradient" onClick={gotoDashboard} fullWidth>
            Sign In
          </Button>
          <Typography variant="small" className="mt-6 flex justify-center">
            Don&apos;t have an account?
            <Link
              href="/signup"
              className="ml-1 font-bold text-[#3399ef] text-sm"
            >
              <a>Sign up</a>
            </Link>
          </Typography>
        </CardFooter>
      </Card>
    </main>
  );
}
