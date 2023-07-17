import { LayoutComponent } from "@/components/includes/layout";
import { NextPageWithLayout } from "@/pages/_app";
import { ReactElement } from "react";

const MngProvider: NextPageWithLayout = () => {
  return (
    <div>
      Relationship management: You may need to manage the relationship with each
      service provider, ensuring that communication is clear and effective and
      that both parties are working towards common goals.
    </div>
  );
};

MngProvider.getLayout = (page: ReactElement) => {
  return <LayoutComponent>{page}</LayoutComponent>;
};

export default MngProvider;
