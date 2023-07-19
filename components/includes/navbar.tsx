import { Navbar, Typography, Switch } from "@material-tailwind/react";
import ProfileMenu from "./sub/profileMenu";
import { InboxComponent } from "./sub/Inbox";
import { Notification } from "./sub/Notification";
import { useRouter } from "next/router";
import Image from "next/image";
import { LogoImg } from "@/utils/images";

export const NavbarComponent = ({ openSidebar, openSidebarStatus }: any) => {
  const router = useRouter();
  return (
    <Navbar className="max-w-full py-2 px-4 rounded-none">
      <div className="mx-auto flex items-center justify-between text-blue-gray-900">
        <div className="flex flex-row">
          <div className="w-[6rem] mx-4">
            <Image src={LogoImg} layout="responsive" alt="logo" />
          </div>
          {router.pathname !== "/dashboard/live-chat" ? (
            <Switch
              id="sidebarCollapse"
              checked={openSidebarStatus}
              onChange={() => openSidebar(!openSidebarStatus)}
            />
          ) : null}
        </div>
        <div className="flex space-x-2">
          <Notification />
          <InboxComponent />
          <ProfileMenu />
        </div>
      </div>
    </Navbar>
  );
};
