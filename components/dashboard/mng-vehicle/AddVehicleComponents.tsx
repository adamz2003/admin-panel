import notify from "@/utils/toast";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Checkbox,
  Input,
  Option,
  Radio,
  Select,
  Typography,
} from "@material-tailwind/react";

export const AddVehicleComponent = () => {
  const handleSubmit = () => {
    notify.success("Successful!")
  }
  return (
    <div className="space-y-12">
      <Card className="bg-blue-50">
        <CardHeader
          variant="gradient"
          color="blue"
          className="mb-4 grid h-28 place-items-center"
        >
          <Typography variant="h3" color="white">
            Driver Services
          </Typography>
        </CardHeader>
        <CardBody className="grid gap-8">
          <Select variant="static" label="Service Category">
            <Option>test</Option>
          </Select>
          <div>
            <Typography>Driver Services</Typography>
            <div className="flex flex-row">
              <Checkbox label="Bike Ride" />
              <Checkbox label="Store Delivery" />
              <Checkbox label="Courier Services" />
            </div>
          </div>
        </CardBody>
      </Card>
      <Card className="bg-blue-50">
        <CardHeader
          variant="gradient"
          color="blue"
          className="mb-4 grid h-28 place-items-center"
        >
          <Typography variant="h3" color="white">
            Add Driver
          </Typography>
        </CardHeader>
        <CardBody className="grid gap-8">
          <div className="grid lg:grid-cols-2 gap-8">
            <Input variant="static" label="Driver Full Name" />
            <Input variant="static" label="Email" />
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            <Input variant="static" label="Contact Number" />
            <Input variant="static" label="Profile Image" />
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="flex flex-row space-x-2 items-center">
              <Typography>Gender: </Typography>
              <Radio id="html" name="gender" label="Male" />
              <Radio id="react" name="gender" label="Female" />
            </div>
            {/* <Input variant="static" label="Contact Number" />
            <Input variant="static" label="Profile Image" /> */}
          </div>
        </CardBody>
      </Card>
      <Card className="bg-blue-50">
        <CardHeader
          variant="gradient"
          color="blue"
          className="mb-4 grid h-28 place-items-center"
        >
          <Typography variant="h3" color="white" className="text-center">
            Add Driver Vehicle Type Details
          </Typography>
        </CardHeader>
        <CardBody className="grid gap-8">
          <div className="grid lg:grid-cols-2 gap-8">
            <Input variant="static" label="Vehicle Type" />
            <Input variant="static" label="Model Year" />
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            <Input variant="static" label="Vehicle Company" />
            <Input variant="static" label="Plat No" />
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            <Input variant="static" label="Model Name" />
            <Input variant="static" label="Vehicle Color" />
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="flex flex-row space-x-4 items-center">
              <Typography>Rental Service:</Typography>
              <Checkbox label="Bike Rental" />
            </div>
            {/* <Input variant="static" label="Rental Service" /> */}
          </div>
        </CardBody>
      </Card>
      <Card className="bg-blue-50">
        <CardBody className="grid gap-8">
          <Button onClick={handleSubmit}>Save</Button>
        </CardBody>
      </Card>
    </div>
  );
};
