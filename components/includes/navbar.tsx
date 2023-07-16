import { useState, useEffect } from "react";
import { Navbar, Typography, Switch } from "@material-tailwind/react";
import ProfileMenu from "./sub/profileMenu";
import LeftSidebar from "./sidebar";

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
            defaultChecked
            checked={openSidebarStatus}
            onClick={() => openSidebar(!openSidebarStatus)}
          />
        </div>
        <ProfileMenu />
      </div>
    </Navbar>
  );
};
