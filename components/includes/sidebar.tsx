import React, { useEffect, useState } from "react";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { ChevronRightIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import { sidebarMenuList } from "../../utils/sidebarMenu";
import { useRouter } from "next/router";
import { signOut } from "next-auth/react";

export default function LeftSidebar({ show, onShow }: any) {
  const router = useRouter();
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value: any) => {
    setOpen(open === value ? 0 : value);
  };

  const [openNav, setOpenNav] = useState(true);

  useEffect(() => {
    window.addEventListener("resize", () => {
      window.innerWidth < 960 && setOpenNav(false);
      window.innerWidth >= 960 && setOpenNav(true);
    });
  }, []);

  const gotoPage = async (url: string) => {
    if(url === '/'){
      await signOut({ callbackUrl: "/" })
    } else {
      router.push(url);
    }
  };

  return (
    <Card
      className={
        // "text-gray-100 w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform -translate-x-full lg:relative lg:translate-x-0 transition duration-200 ease-in-out"
        "w-full max-w-[16rem] py-4 shadow-xl shadow-blue-gray-900/5 rounded-none " +
        (show
          ? "ease-in-left transition ease-out duration-100"
          : "hidden translate") +
        " " +
        (openNav ? "" : "fixed top-0 left-0 h-full z-20")
      }
    >
      <List>
        {!openNav ? (
          <ListItem onClick={() => onShow(false)}>
            <ListItemPrefix>
              <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
            </ListItemPrefix>
          </ListItem>
        ) : null}
        {sidebarMenuList.map((ele: any, idx: number) => {
          return (
            <Accordion
              key={idx}
              open={open === idx}
              icon={
                <ChevronDownIcon
                  strokeWidth={2.5}
                  className={`mx-auto h-4 w-4 transition-transform ${
                    open === idx ? "rotate-180" : ""
                  }`}
                />
              }
            >
              <ListItem className="p-0" selected={open === idx}>
                {ele.subMenu ? (
                  <AccordionHeader
                    onClick={() => handleOpen(idx)}
                    className="border-b-0 p-3"
                  >
                    <ListItemPrefix>{ele.img}</ListItemPrefix>
                    <Typography
                      color="blue-gray"
                      className="mr-auto font-normal"
                    >
                      {ele.title}
                    </Typography>
                  </AccordionHeader>
                ) : (
                  <ListItem key={idx} onClick={() => gotoPage(ele.url)}>
                    <ListItemPrefix>{ele.img}</ListItemPrefix>
                    {ele.title}
                  </ListItem>
                )}
              </ListItem>
              <AccordionBody className="py-1">
                <List className="p-0">
                  {ele.subMenu &&
                    ele.subMenu.map((cell: any, jdx: number) => (
                      <ListItem key={jdx} onClick={() => gotoPage(cell.url)}>
                        <ListItemPrefix>
                          <ChevronRightIcon
                            strokeWidth={3}
                            className="h-3 w-5"
                          />
                        </ListItemPrefix>
                        {cell.title}
                      </ListItem>
                    ))}
                </List>
              </AccordionBody>
            </Accordion>
          );
        })}
      </List>
    </Card>
  );
}
