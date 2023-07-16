import { ReactElement } from "react";
import { NavbarComponent } from "@/components/includes/navbar";
import { NextPageWithLayout } from "../_app";
import { LayoutComponent } from "@/components/includes/layout";
import LeftSidebar from "@/components/includes/sidebar";
import { Card } from "@material-tailwind/react";

const Dashboard: NextPageWithLayout = () => {

  return (
    <div className="">
      <Card variant="gradient" className="border-2 rounded-none p-4">
        Today Summary
      </Card>
    </div>
  );
};

Dashboard.getLayout = (page: ReactElement) => {
  return <LayoutComponent>{page}</LayoutComponent>;
};

export default Dashboard;
