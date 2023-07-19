import { Card, CardBody, Typography } from "@material-tailwind/react";

export const DragAndDropComponent = () => {
  return (
    <Card className="border-2 p-4 border-blue-500">
      <CardBody className="flex items-center justify-center">
        <Typography> Drag And Upload Your Files Here </Typography>
      </CardBody>
    </Card>
  );
};
