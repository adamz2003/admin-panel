import { ReactElement } from "react";
import { NavbarComponent } from "@/components/includes/navbar";
import { NextPageWithLayout } from "../_app";
import { LayoutComponent } from "@/components/includes/layout";
import LeftSidebar from "@/components/includes/sidebar";
import { Card, CardBody, Typography } from "@material-tailwind/react";
import { DashboardServiceList } from "@/utils/fakeDatas";

const Dashboard: NextPageWithLayout = () => {
  return (
    <div className="space-y-4">
      <Card variant="gradient" className="border-2 rounded-none p-4">
        Today Summary
      </Card>

      <Card className="bg-blue-50">
        <CardBody className="space-y-4">
          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4">
            <Card variant="gradient" color="cyan">
              <CardBody className="flex items-center justify-center h-24">
                <Typography color="white" variant="h3">
                  Income
                </Typography>
              </CardBody>
            </Card>
            <Card variant="gradient" color="green">
              <CardBody className="flex items-center justify-center h-24">
                <Typography color="white" variant="h3">
                  Income
                </Typography>
              </CardBody>
            </Card>
            <Card variant="gradient" color="light-blue">
              <CardBody className="flex items-center justify-center h-24">
                <Typography color="white" variant="h3">
                  Income
                </Typography>
              </CardBody>
            </Card>
            <Card variant="gradient" color="red">
              <CardBody className="flex items-center justify-center h-24">
                <Typography color="white" variant="h3">
                  Income
                </Typography>
              </CardBody>
            </Card>
          </div>
          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4">
            {DashboardServiceList.map((ele: any, idx: number) => (
              <Card variant="gradient" className="bg-blue-100" key={idx}>
                <CardBody className="flex items-center justify-center">
                  <Typography color="gray" variant="h6">
                    {ele.service_name}
                  </Typography>
                </CardBody>
              </Card>
            ))}
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

Dashboard.getLayout = (page: ReactElement) => {
  return <LayoutComponent>{page}</LayoutComponent>;
};

export default Dashboard;
