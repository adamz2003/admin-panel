import { ProviderListComponent } from "@/components/dashboard/mng-provider/ProviderListComponent";
import { LayoutComponent } from "@/components/includes/layout";
import { NextPageWithLayout } from "@/pages/_app";
import { ReactElement } from "react";

const MngProvider: NextPageWithLayout = () => {
  return (
    <div>
      <ProviderListComponent />
    </div>
  );
};

MngProvider.getLayout = (page: ReactElement) => {
  return <LayoutComponent>{page}</LayoutComponent>;
};

export default MngProvider;
