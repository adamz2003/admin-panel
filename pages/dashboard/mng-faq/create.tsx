import { LayoutComponent } from "@/components/includes/layout";
import { NextPageWithLayout } from "@/pages/_app";
import { Button, Input, Option, Select, Textarea } from "@material-tailwind/react";
import { ReactElement } from "react";

const FaqCreate: NextPageWithLayout = () => {
  return (
    <div>
        <div className="flex justify-end">
            <Button>Create</Button>
        </div>
      <div className="grid gap-8">
        <div className="grid lg:grid-cols-3 gap-8">
          <Input variant="static" label="Title" className="lg:col-span-2" />
          <Select variant="static" label="Title">
            <Option>General</Option>
            <Option>Freelancer</Option>
            <Option>Customer</Option>
            <Option>Dispute</Option>
          </Select>
        </div>
        <Textarea variant="static" />
      </div>
    </div>
  );
};

FaqCreate.getLayout = (page: ReactElement) => {
  return <LayoutComponent>{page}</LayoutComponent>;
};

export default FaqCreate;
