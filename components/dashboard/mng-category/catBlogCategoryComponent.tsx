import {
    Button,
    Card,
    CardBody,
    CardHeader,
    Input,
    Typography,
  } from "@material-tailwind/react";
  
  export const CatBlogCategoryComponent = () => {
    return (
      <Card variant="gradient" className=" bg-blue-50">
        <CardHeader
          variant="gradient"
          color="blue"
          className="mb-4 grid h-28 place-items-center "
        >
          <Typography variant="h3" color="white">
            Blog Category
          </Typography>
        </CardHeader>
        <CardBody className="grid gap-8">
          <div className="flex flex-row">
            <Input variant="static" label="Add Skills" />
            <Button>ADD</Button>
          </div>
          <Input variant="static" label="Search" />
        </CardBody>
      </Card>
    );
  };
  