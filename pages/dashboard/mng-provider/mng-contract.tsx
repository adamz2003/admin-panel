import { LayoutComponent } from "@/components/includes/layout";
import { NextPageWithLayout } from "@/pages/_app";
import { ReactElement } from "react";

const MngContract: NextPageWithLayout = () => {
  return (
    <div>
      Contract management: You may need to manage the contracts and agreements
      that the organization has with its service providers, ensuring that the
      terms and conditions are being met and that the organization is receiving
      the services it needs.
    </div>
  );
};

MngContract.getLayout = (page: ReactElement) => {
  return <LayoutComponent>{page}</LayoutComponent>;
};

export default MngContract;
