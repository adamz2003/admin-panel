import { GigListTable } from "@/components/dashboard/mng-gigs/GigListTable";
import { LayoutComponent } from "@/components/includes/layout";
import { NextPageWithLayout } from "@/pages/_app";
import { ReactElement } from "react";

const GigsList: NextPageWithLayout = () => {
  
  return (
    <div>
      <GigListTable />
    </div>
  );
};

GigsList.getLayout = (page: ReactElement) => {
  return <LayoutComponent>{page}</LayoutComponent>;
};

export default GigsList;
