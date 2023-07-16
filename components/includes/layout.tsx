import {
  Breadcrumbs,
  Card,
  CardBody,
  CardHeader,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { NavbarComponent } from "./navbar";
import LeftSidebar from "./sidebar";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import notify from "@/utils/toast";
import Head from "next/head";
import { getSession, useSession } from "next-auth/react";
import { GetServerSidePropsContext } from "next";
import { useRouter } from "next/router";

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  } else {
    const { user } = session;
    if (user?.name === "" || user?.email === "") {
      return {
        redirect: {
          destination: "/",
          permanent: false,
        },
      };
    }
  }

  return {
    props: { session },
  };
}

export const LayoutComponent = ({ children }: any) => {
  const router = useRouter()
  const { data: session, status } = useSession();

  const [openNav, setOpenNav] = useState(true);

  useEffect(() => {
    window.addEventListener("resize", () => {
      window.innerWidth < 960 && setOpenNav(false);
      window.innerWidth >= 960 && setOpenNav(true);
    });
  }, []);
  
  // if(status === "loading"){
  //   return <p>Loading ...</p>
  // }

  // if(status === "unauthenticated"){
  //   router.push("/")
  // }

  return (
    <div>
      <Head>
        <title>BuBe Admin Panel</title>
      </Head>
      <ToastContainer />
      <NavbarComponent openSidebar={setOpenNav} openSidebarStatus={openNav} />
      <div className="flex flex-row">
        <LeftSidebar show={openNav} onShow={setOpenNav} />
        <Card className="min-h-screen my-10 px-1 lg:mx-5 w-full">
          <CardHeader variant="gradient" color="blue" className="w-fit rounded-full">
            <Breadcrumbs
              className="rounded-full p-1 bg-gradient-to-tr  border-white"
            >
              <a
                href="#"
                className="text-white font-medium bg-blue px-3 py-1 rounded-full"
              >
                Docs
              </a>
              <a
                href="#"
                className="text-white font-medium bg-blue px-3 py-1 rounded-full"
              >
                Components
              </a>
              <a
                href="#"
                className="text-white font-medium bg-blue px-3 py-1 rounded-full"
              >
                Breadcrumbs
              </a>
            </Breadcrumbs>
          </CardHeader>
          <CardBody className=" py-16">{children}</CardBody>
        </Card>
        {/* <div className="min-h-screen my-10 px-1 lg:mx-5 w-full">{children}</div> */}
      </div>
    </div>
  );
};
