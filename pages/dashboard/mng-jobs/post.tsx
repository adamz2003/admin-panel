import { PostRequestsForm } from "@/components/dashboard/mng-jobs/PostRequestsForm";
import { LayoutComponent } from "@/components/includes/layout";
import { NextPageWithLayout } from "@/pages/_app";
import {
    Button,
  Card,
  CardBody,
  Input,
  Option,
  Select,
  Textarea,
  Typography,
} from "@material-tailwind/react";
import { ReactElement } from "react";

const AddJobs: NextPageWithLayout = () => {
  return (
    <div>
        <PostRequestsForm />
    </div>
  );
};

AddJobs.getLayout = (page: ReactElement) => {
  return <LayoutComponent>{page}</LayoutComponent>;
};

export default AddJobs;
