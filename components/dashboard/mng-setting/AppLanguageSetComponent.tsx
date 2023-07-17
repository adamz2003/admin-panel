import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Checkbox,
  Input,
  List,
  Typography,
} from "@material-tailwind/react";
export const AppLanguageSetComponent = () => {
  return (
    <div className="space-y-12">
      <Card className="bg-blue-50">
        <CardHeader
          variant="gradient"
          color="blue"
          className="mb-4 grid h-28 place-items-center"
        >
          <Typography variant="h3" color="white">
            Provider App Version Setting
          </Typography>
        </CardHeader>
        <CardBody className="grid gap-8">
          <div className="grid lg:grid-cols-2 gap-8">
            <Input
              variant="static"
              label="Android Flutter Provider App Current Version"
            />
            <Checkbox label="Update Forcefully Android Flutter Provider App?" />
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            <Input
              variant="static"
              label="Ios Flutter Provider App Current Version"
            />
            <Checkbox label="Update Forcefully Ios Flutter Provider App?" />
          </div>
        </CardBody>
      </Card>
      <Card className="bg-blue-50">
        <CardBody className="grid gap-8">
          <Button>Save</Button>
        </CardBody>
      </Card>
    </div>
  );
};
