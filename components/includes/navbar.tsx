import { Navbar, Typography, Switch } from "@material-tailwind/react";
import ProfileMenu from "./sub/profileMenu";
import { InboxComponent } from "./sub/Inbox";
import { Notification } from "./sub/Notification";

export const NavbarComponent = ({ openSidebar, openSidebarStatus }: any) => {
  return (
    <Navbar className="max-w-full py-2 px-4 rounded-none">
      <div className="mx-auto flex items-center justify-between text-blue-gray-900">
        <div className="flex flex-row">
          <Typography
            as="a"
            href="#"
            className="mr-4 cursor-pointer py-1.5 font-medium"
          >
            Material Tailwind
          </Typography>
          <Switch
            checked={openSidebarStatus}
            onChange={() => openSidebar(!openSidebarStatus)}
          />
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
