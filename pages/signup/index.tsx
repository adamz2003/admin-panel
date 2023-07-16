import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
  CardHeader,
  CardBody,
} from "@material-tailwind/react";
import Link from "next/link";

export default function SignUp() {
  return (
    <div className="flex justify-center min-h-screen items-center">
      <Card className="mx-auto w-full max-w-[24rem]">
        <CardHeader
          variant="gradient"
          color="blue"
          className="mb-4 grid h-28 place-items-center"
        >
          <Typography variant="h3" color="white">
            Sign Up
          </Typography>
        </CardHeader>
        <CardBody>
          <Typography color="gray" className="mt-1 font-normal">
            Enter your details to register.
          </Typography>
          <div className="mb-4 flex flex-col gap-6">
            <Input size="lg" label="Name" />
            <Input size="lg" label="Email" />
            <Input type="password" size="lg" label="Password" />
          </div>
          <Checkbox
            label={
              <Typography
                variant="small"
                color="gray"
                className="flex items-center font-normal"
              >
                I agree the
                <Link
                  href="#"
                  className="font-medium transition-colors hover:text-blue-500"
                >
                  <a>&nbsp;Terms and Conditions</a>
                </Link>
              </Typography>
            }
            containerProps={{ className: "-ml-2.5" }}
          />
          <Button className="mt-6" fullWidth>
            Register
          </Button>
          <Typography color="gray" className="mt-4 text-center font-normal">
            Already have an account?{" "}
            <Link
              href="/"
              className="font-medium text-blue-500 transition-colors hover:text-blue-700"
            >
              <a>Sign In</a>
            </Link>
          </Typography>
        </CardBody>
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"></form>
      </Card>
    </div>
  );
}
