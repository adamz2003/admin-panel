import {
  Breadcrumbs,
  Card,
  CardBody,
  CardHeader,
} from "@material-tailwind/react";
import { useEffect, useRef, useState } from "react";
import { NavbarComponent } from "./navbar";
import LeftSidebar from "./sidebar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Head from "next/head";
import { getSession, useSession } from "next-auth/react";
import { GetServerSidePropsContext } from "next";
import { useRouter } from "next/router";

export async function getGenerateInitProps(context: GetServerSidePropsContext) {
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
  const content = useRef<any>(null)
  const sidebar = useRef<any>(null)
  const router = useRouter();
  const [ContentHeight, setContentHeight] = useState<any>();
  const { data: session, status } = useSession();

  const [openNav, setOpenNav] = useState(true);

  useEffect(() => {
    // console.log(content.current.clientHeight)
    console.log(content.current)
    window.addEventListener("resize", () => {
      window.innerWidth < 960 && setOpenNav(false);
      window.innerWidth >= 960 && setOpenNav(true);
    });
  }, []);

  if (status === "unauthenticated") {
    router.push("/");
  }

  if (status === "authenticated") {
    return (
      <div>
        <Head>
          <title>Admin Panel</title>
        </Head>
        <ToastContainer />
        <NavbarComponent
          openSidebar={setOpenNav}
          openSidebarStatus={openNav}
        />
        {router.asPath.startsWith("/dashboard/live-chat") ? (
          <div>{children}</div>
        ) : (
          <div>
            <div className="flex flex-row h-full">
              <LeftSidebar show={openNav} onShow={setOpenNav} ref={sidebar} />
              <Card className="min-h-screen my-10 px-1 lg:mx-5 w-full h-fit flex flex-initial" ref={content}>
                <CardHeader
                  variant="gradient"
                  color="blue"
                  className="w-fit rounded-full"
                >
                  <Breadcrumbs className="rounded-full p-1 bg-gradient-to-tr  border-white">
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
                <CardBody className="py-16">{children}</CardBody>
              </Card>
              {/* <div className="min-h-screen my-10 px-1 lg:mx-5 w-full">{children}</div> */}
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center min-h-screen">
      <p>Loading ...</p>
    </div>
  );
};
