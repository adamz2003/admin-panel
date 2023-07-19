import ConfirmModal from "@/components/includes/ConfirmModal";
import CustomizedTable from "@/components/includes/dataTable/DataTable";
import { LayoutComponent } from "@/components/includes/layout";
import { NextPageWithLayout } from "@/pages/_app";
import { JobsColumns } from "../../../utils/columns";
import { fakeJobs, personImgs } from "@/utils/fakeDatas";
import { Button, Card, CardBody, CardFooter, Spinner } from "@material-tailwind/react";
import { useRouter } from "next/router";
import { ReactElement, useState } from "react";
import Image from "next/image";
import { SkillComponent } from "@/components/includes/SkillComponents";
import { JobReqTable } from "@/components/dashboard/mng-jobs/jobReqTable";

const JobsList: NextPageWithLayout = () => {
  return (
    <div>
      <JobReqTable />
    </div>
  );
};

JobsList.getLayout = (page: ReactElement) => {
  return <LayoutComponent>{page}</LayoutComponent>;
};

export default JobsList;
