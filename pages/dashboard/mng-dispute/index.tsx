import { DisputeListComponent } from "@/components/dashboard/mng-dispute/DisputeListComponent";
import { LayoutComponent } from "@/components/includes/layout";
import { NextPageWithLayout } from "@/pages/_app";
import { ReactElement } from "react";

const MngGigsDispute: NextPageWithLayout = () => {
  return (
    <div>
      <DisputeListComponent />
    </div>
  );
};

MngGigsDispute.getLayout = (page: ReactElement) => {
  return <LayoutComponent>{page}</LayoutComponent>;
};

export default MngGigsDispute;
