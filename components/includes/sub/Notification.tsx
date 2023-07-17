import {
  IconButton,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
} from "@material-tailwind/react";
import { FaRegBell } from "react-icons/fa";

export const Notification = () => {
  return (
    <Menu
      animate={{
        mount: { y: 0 },
        unmount: { y: 25 },
      }}
      placement="bottom-end"
    >
      <MenuHandler>
        <IconButton>
          <FaRegBell className="w-6 h-6" />
        </IconButton>
      </MenuHandler>
      <MenuList>
        <MenuItem>Menu Item 1</MenuItem>
        <MenuItem>Menu Item 2</MenuItem>
        <MenuItem>Menu Item 3</MenuItem>
      </MenuList>
    </Menu>
  );
};
