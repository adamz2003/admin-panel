import { LayoutComponent } from "@/components/includes/layout";
import { NextPageWithLayout } from "@/pages/_app";
import { personImgs, userList } from "@/utils/fakeDatas";
import { Card, CardBody, CardHeader } from "@material-tailwind/react";
import Image from "next/image";
import { ReactElement, useState } from "react";

const DetailUser: NextPageWithLayout = () => {
  const [UserInfo, setUserInfo] = useState<any>(userList[0]);
  return (
    <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
      <div className="col-span-2 space-y-12">
        <Card>
          <CardHeader
            variant="gradient"
            color="blue"
            className="mb-4 grid h-12 place-items-center"
          >
            Portfolio
          </CardHeader>
          <CardBody>Portfolio Information</CardBody>
        </Card>
        <Card>
          <CardHeader
            variant="gradient"
            color="blue"
            className="mb-4 grid h-12 place-items-center"
          >
            Gigs
          </CardHeader>
          <CardBody>Gigs Information</CardBody>
        </Card>
        <Card>
          <CardHeader
            variant="gradient"
            color="blue"
            className="mb-4 grid h-12 place-items-center"
          >
            Social Media
          </CardHeader>
          <CardBody>Social Media Information</CardBody>
        </Card>
        <Card>
          <CardHeader
            variant="gradient"
            color="blue"
            className="mb-4 grid h-12 place-items-center"
          >
            Contract History
          </CardHeader>
          <CardBody>Contract History Information</CardBody>
        </Card>
      </div>
      <div>
        <Card className="bg-blue-50">
          <CardHeader className="w-12 h-12 rounded-full">
            <div className="w-12 h-12">
              <Image src={personImgs.personImg1} className="rounded-full" />
            </div>
          </CardHeader>
          <CardBody className="gap-2">
            <div className="grid md:grid-cols-2 gap-2">
              <div>UserName: </div>
              <div>{UserInfo.firstName + " " + UserInfo.lastName}</div>
            </div>
            <div className="grid md:grid-cols-2 gap-2">
                <div>User Email: </div>
                <div>{UserInfo.email}</div>
            </div>
            <div className="grid md:grid-cols-2 gap-2">
                <div className="">App Version: </div>
                <div>{UserInfo.appVersion}</div>
            </div>
            <div className="grid md:grid-cols-2 gap-2">
                <div className="">Created At: </div>
                <div>{UserInfo.createAt}</div>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

DetailUser.getLayout = (page: ReactElement) => {
  return <LayoutComponent>{page}</LayoutComponent>;
};

export default DetailUser;
