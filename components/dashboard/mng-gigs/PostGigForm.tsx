import CustomizedTable from "@/components/includes/dataTable/DataTable";
import notify from "@/utils/toast";
import {
    Button,
  Card,
  CardBody,
  Input,
  Textarea,
  Typography,
} from "@material-tailwind/react";

export const PostGigForm = () => {

  const handlerSubmit = () => {
    notify.success("Successful!")
  }
  return (
    <div>
      <div className="flex justify-end">
        <Button onClick={handlerSubmit}>Post a Gig</Button>
      </div>
      <div className="grid gap-8">
        <Input variant="static" label="Title" />
        <Textarea variant="static" label="Description" />
        <div className="grid lg:grid-cols-2 gap-8">
          <Input variant="static" label="Price" />
          <Input variant="static" label="Payment Method" />
        </div>
        <div className="grid lg:grid-cols-2 gap-8">
          <Input variant="static" label="Price" />
          <Input variant="static" label="Payment Method" />
        </div>
        <Input variant="static" label="Skills" />
        <Card className="border-2 p-4 border-blue-500">
          <CardBody className="flex items-center justify-center">
            <Typography> Drag And Upload Your Files Here </Typography>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};
