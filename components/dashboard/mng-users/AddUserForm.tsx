import notify from "@/utils/toast";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Input,
  Typography,
} from "@material-tailwind/react";
import { useRef } from "react";

export const AddUserForm = () => {
  const firstName = useRef<any>(null);
  const lastName = useRef<any>(null);
  const profession = useRef<any>(null);
  const email = useRef<any>(null);
  const password = useRef<any>(null);
  const confirmPassword = useRef<any>(null);

  const saveNewUser = () => {
    notify.success("Successful")
  }
  return (
    <Card>
      <CardHeader
        variant="gradient"
        color="blue"
        className="mb-4 grid h-28 place-items-center"
      >
        <Typography variant="h3" color="white">
          Add User Page
        </Typography>
      </CardHeader>
      <form onSubmit={saveNewUser}>
        <CardBody className="grid gap-8">
          <div className="flex justify-end">
            <Button type="submit">save</Button>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <Input variant="static" label="First Name"></Input>
            <Input variant="static" label="Last Name"></Input>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <Input type="text" variant="static" label="Profession"></Input>
            <Input type="email" variant="static" label="Email"></Input>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <Input variant="static" type="password" label="Password"></Input>
            <Input
              variant="static"
              type="password"
              label="Confirm Password"
            ></Input>
          </div>
        </CardBody>
      </form>
    </Card>
  );
};
