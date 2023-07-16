import React, { useRef, useState } from "react";
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
  Alert,
} from "@material-tailwind/react";
import { useRouter } from "next/router";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import Head from "next/head";

import { signIn } from "next-auth/react";
import Link from "next/link";
import notify from "@/utils/toast";
import ApiService from "@/services/ApiService";
import { setCookie } from "cookies-next";
import { InformationCircleIcon } from "@heroicons/react/24/outline";

const frontEndUrl = process.env.FRONTEND_URL || "http://localhost:3000";

export default function Home() {
  const email = useRef<any>(null);
  const pwd = useRef<any>(null);
  const router = useRouter();
  const [ErrAlert, setErrAlert] = useState(false);

  const gotoDashboard = async () => {
    const UserEmail = email.current.value;
    const Password = pwd.current.value;
    if (!UserEmail || !Password) {
      setErrAlert(true)
    }
    const res: any = await signIn("credentials", {
      username: UserEmail,
      password: Password,
      redirect: false,
    });
    console.log(res)
    if (res.error === null) {
      const user = await ApiService.getData({ url: `/users/${UserEmail}` });
      setCookie("NewUserId", user.id, {
        maxAge: 60 * 60 * 24 * 7,
        path: "/",
      });
      notify.success("Successful! Redirecting...");
      router.push(frontEndUrl + "/dashboard");
    } else setErrAlert(true);
  };

  const signInWithGoogle = async () => {
    await signIn("google", { callbackUrl: frontEndUrl + "/dashboard" });
  };

  return (
    <main
      className={`min-h-screen bg-gray-200 flex justify-center items-center`}
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
          {ErrAlert && (
            <Alert
              color="red"
              icon={
                <InformationCircleIcon strokeWidth={2} className="h-4 w-4" />
              }
              className="text-xs"
            >
              Please check your email or password!
            </Alert>
          )}
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
          <Input label="Email" size="lg" inputRef={email} onChange={() => setErrAlert(false)} />
          <Input type="password" label="Password" size="lg" inputRef={pwd} onChange={() => setErrAlert(false)} />
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
            <Link href="/signup" legacyBehavior>
              <a className="ml-1 font-bold text-[#3399ef] text-sm">Sign up</a>
            </Link>
          </Typography>
        </CardFooter>
      </Card>
    </main>
  );
}
