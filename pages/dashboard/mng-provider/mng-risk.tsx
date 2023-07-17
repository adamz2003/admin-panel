import { LayoutComponent } from "@/components/includes/layout";
import { NextPageWithLayout } from "@/pages/_app";
import { ReactElement } from "react";

const MngRisk: NextPageWithLayout = () => {
  return (
    <div>
      Risk management: You may need to assess and manage the risks associated
      with each service provider, ensuring that they comply with relevant
      regulations and laws, and that their services do not pose a risk to the
      organization.
    </div>
  );
};

MngRisk.getLayout = (page: ReactElement) => {
  return <LayoutComponent>{page}</LayoutComponent>;
};

export default MngRisk;
