import {
  Drawer,
  IconButton,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
  Typography,
} from "@material-tailwind/react";
import { useRouter } from "next/router";
import { useState } from "react";
import { FaMailBulk } from "react-icons/fa";

export const InboxComponent = () => {
  const router = useRouter()
  const [openRight, setOpenRight] = useState(false);
  const gotoLiveChat = () => {
    router.push("/dashboard/live-chat")
  }
  return (
    <Menu
      animate={{
        mount: { y: 0 },
        unmount: { y: 25 },
      }}
      placement="bottom-end"
    >
      <MenuHandler>
        <IconButton onClick={() => setOpenRight(true)}>
          <FaMailBulk className="w-6 h-6" />
        </IconButton>
      </MenuHandler>
      <MenuList>
        <MenuItem onClick={gotoLiveChat}>Menu Item 1</MenuItem>
        <MenuItem onClick={gotoLiveChat}>Menu Item 2</MenuItem>
        <MenuItem onClick={gotoLiveChat}>Menu Item 3</MenuItem>
      </MenuList>
    </Menu>
  );
};
