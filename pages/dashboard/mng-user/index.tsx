import {UserTable} from "@/components/dashboard/mng-users/UserTable";
import { LayoutComponent } from "@/components/includes/layout";
import { NextPageWithLayout } from "@/pages/_app";
import { ReactElement } from "react";

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