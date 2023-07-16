import { LayoutComponent } from "@/components/includes/layout";
import { NextPageWithLayout } from "@/pages/_app";
import { ReactElement, useState } from "react";
import { MngListComponent } from "@/components/dashboard/mng-msg/MsgListComponent";

const MngMsgList: NextPageWithLayout = () => {
  return (
    <div>
      <MngListComponent />
    </div>
  );
};

MngMsgList.getLayout = (page: ReactElement) => {
  return <LayoutComponent>{page}</LayoutComponent>;
};

export default MngMsgList;
