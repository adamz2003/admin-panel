import UserTable from "@/components/dashboard/mng-users/UserTable";
import ConfirmModal from "@/components/includes/ConfirmModal";
import CustomizedTable from "@/components/includes/dataTable/DataTable";
import { LayoutComponent } from "@/components/includes/layout";
import { NextPageWithLayout } from "@/pages/_app";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Spinner,
  Typography,
} from "@material-tailwind/react";
import { useRouter } from "next/router";
import { ReactElement, useState } from "react";

const MngUsers: NextPageWithLayout = () => {
  

  return (
    <div>
      <UserTable />
    </div>
  );
};

MngUsers.getLayout = (page: ReactElement) => {
  return <LayoutComponent>{page}</LayoutComponent>;
};

export default MngUsers;
