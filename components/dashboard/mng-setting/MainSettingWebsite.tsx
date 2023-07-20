import notify from "@/utils/toast";
import {
    Button,
  Card,
  CardBody,
  CardHeader,
  Input,
  List,
  Typography,
} from "@material-tailwind/react";

export const MainSettingWebsite = () => {
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
            Main Property
          </Typography>
        </CardHeader>
        <CardBody className="grid gap-8">
          <Input variant="static" label="Website Title Name" />
          <div className="grid lg:grid-cols-2 gap-8">
            <div className=" grid gap-8">
              <Input variant="static" label="Website Logo" />
              <div className="w-full h-48 outline-dashed flex justify-center items-center">
                <Typography>This is Logo Image</Typography>
              </div>
            </div>
            <div className=" grid gap-8">
              <Input variant="static" label="Website FavIcon" />
              <div className="w-full h-48 outline-dashed flex justify-center items-center">
                <Typography>This is FavIcon</Typography>
              </div>
            </div>
          </div>
          <Input variant="static" label="Address Information" />
          <div className="grid lg:grid-cols-2 gap-8">
            <Input variant="static" label="Admin Receive Email" />
            <Input variant="static" label="Email" />
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            <Input variant="static" label="Contact No" />
            <Input variant="static" label="Copy Right Content" />
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
            Social Links
          </Typography>
        </CardHeader>
        <CardBody className="grid gap-8">
          <div className="grid lg:grid-cols-2 gap-8">
            <Input variant="static" label="Facebook Link" />
            <Input variant="static" label="Instagram Link" />
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            <Input variant="static" label="Linkedin Link" />
            {/* <Input variant="static" label="Copy Right Content" /> */}
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
            App-Store and Play-Store Link
          </Typography>
        </CardHeader>
        <CardBody className="grid gap-8">
          <div className="grid lg:grid-cols-2 gap-8">
            <Input variant="static" label="User PlayStore Link" />
            <Input variant="static" label="Driver/Delivery PlayStore Link" />
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            <Input variant="static" label="User AppStore Link" />
            <Input variant="static" label="Driver/Delivery AppStore Link" />
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            <Input variant="static" label="Provider PlayStore Link" />
            <Input variant="static" label="Store PlayStore Link" />
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            <Input variant="static" label="Provider AppStore Link" />
            <Input variant="static" label="Store AppStore Link" />
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
            User Refer Discount
          </Typography>
        </CardHeader>
        <CardBody className="grid gap-8">
          <div className="grid lg:grid-cols-2 gap-8">
            <Input variant="static" label="Used User Discount" />
            <Input variant="static" label="Used User Discount Type" />
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            <Input variant="static" label="Refer User Discount" />
            <Input variant="static" label="Refer User Discount Type" />
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
            Delivery Admin Commission
          </Typography>
        </CardHeader>
        <CardBody className="grid gap-8">
          <Input variant="static" label="Delivery Commission (in %)" />
        </CardBody>
      </Card>
      <Card className="bg-blue-50">
        <CardHeader
          variant="gradient"
          color="blue"
          className="mb-4 grid h-28 place-items-center"
        >
          <Typography variant="h3" color="white">
            On-Demand Start Service Time
          </Typography>
        </CardHeader>
        <CardBody className="grid gird-8">
          <Typography>
            Provider can start the service before (*) minutes of requested time.
          </Typography>
          <Input variant="static" className="w-12" />
        </CardBody>
      </Card>
      <Card className="bg-blue-50">
        <CardHeader
          variant="gradient"
          color="blue"
          className="mb-4 grid h-28 place-items-center"
        >
          <Typography variant="h3" color="white">
            Driver Algorithm
          </Typography>
        </CardHeader>
        <CardBody className="grid gap-8">
          <div className="grid lg:grid-cols-2 gap-8">
            <Input variant="static" label="Driver Algorithm" />
            <Input variant="static" label="User Request Timeout(Seconds)" />
          </div>
        </CardBody>
      </Card>
      <Card className="bg-blue-50">
        <CardBody className="grid gap-8">
            <Button variant="gradient" className="" onClick={handleSubmit}>
                Save
            </Button>
        </CardBody>
      </Card>
    </div>
  );
};
