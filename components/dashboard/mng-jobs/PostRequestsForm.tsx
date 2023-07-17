import { Button, Card, CardBody, Input, Option, Select, Textarea, Typography } from "@material-tailwind/react";

export const PostRequestsForm = () => {
  return (
    <div>
      <div className="flex justify-end">
        <Button>Post a Request</Button>
      </div>
      <div className="grid gap-8">
        <Input variant="static" label="Job Title" />
        <Textarea variant="static" label="Description" resize={true} />
        <div className="grid lg:grid-cols-2 gap-8">
          <Select variant="static" label="Category">
            <Option>Category</Option>
          </Select>
          <Select variant="static" label="SubCategory">
            <Option>SubCategory</Option>
          </Select>
        </div>
        <div className="grid lg:grid-cols-3 gap-8">
          <Select variant="static" label="JobType">
            <Option>JobType</Option>
          </Select>
          <Select variant="static" label="JobLevel">
            <Option>JobLevel</Option>
          </Select>
          <Select variant="static" label="Time">
            <Option>Time</Option>
          </Select>
        </div>
        <div className="grid lg:grid-cols-2 gap-8">
          <Select variant="static" label="Price">
            <Option>Price</Option>
          </Select>
          <Select variant="static" label="Payment Method">
            <Option>Payment Method</Option>
          </Select>
        </div>
        <Select variant="static" label="Skills">
          <Option>Skills</Option>
        </Select>
        <Card className="border-2 p-4 border-blue-500">
          <CardBody className="flex items-center justify-center">
            <Typography> Drag And Upload Your Files Here </Typography>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};
