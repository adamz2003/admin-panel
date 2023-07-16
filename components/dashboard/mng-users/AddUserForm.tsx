import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Input,
  Typography,
} from "@material-tailwind/react";

export const AddUserForm = () => {
  return (
    <Card>
      <CardHeader
        variant="gradient"
        color="blue"
        className="mb-4 grid h-28 place-items-center"
      >
        <Typography  variant="h3" color="white">Add User Page</Typography>
      </CardHeader>
      <CardBody className="grid gap-8">
        <div className="flex justify-end">
          <Button>save</Button>
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
          <Input variant="static" type="password" label="Confirm Password"></Input>
        </div>
      </CardBody>
    </Card>
  );
};
