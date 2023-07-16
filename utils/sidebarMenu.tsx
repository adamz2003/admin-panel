import { BiCategory } from "react-icons/bi";
import {
  FaBlog,
  FaQuestion,
  FaUsers,
  FaCog,
  FaFlask,
  FaHome,
  FaGift,
  FaTasks,
  FaRocketchat,
} from "react-icons/fa";

export const sidebarMenuList = [
  {
    img: <FaHome className="h-5 w-5" />,
    title: "Dashboard",
    url: "/dashboard",
  },
  {
    img: <FaFlask className="h-5 w-5" />,
    title: "Test Component",
    url: "",
    subMenu: [
      {
        title: "DataTable",
        url: "/test/datatable",
      },
      {
        title: "TintMCE",
        url: "/test/tinymce",
      },
    ],
  },
  {
    img: <FaUsers className="h-5 w-5" />,
    title: "Manage Users",
    url: "",
    subMenu: [
      {
        title: "Users List",
        url: "/dashboard/mng-user",
      },
      {
        title: "Add Users",
        url: "/dashboard/mng-user/add",
      },
    ],
  },
  {
    img: <FaTasks className="h-5 w-5" />,
    title: "Manage Jobs",
    url: "",
    subMenu: [
      {
        title: "Jobs List",
        url: "/dashboard/mng-jobs",
      },
      {
        title: "Post Jobs",
        url: "/dashboard/mng-jobs/add",
      },
    ],
  },
  {
    img: <FaGift className="h-5 w-5" />,
    title: "Manage Gigs",
    url: "",
    subMenu: [
      {
        title: "Gigs List",
        url: "/dashboard/mng-gigs",
      },
      {
        title: "Post Gig",
        url: "/dashboard/mng-gigs/post",
      },
    ],
  },
  {
    img: <FaRocketchat className="h-5 w-5" />,
    title: "Manage Messages",
    url: "/dashboard/mng-msgs",
  },
  {
    img: <FaBlog className="h-5 w-5" />,
    title: "Manage Blogs",
    url: "",
    subMenu: [
      {
        title: "Blog List",
        url: "/dashboard/mng-blogs",
      },
      {
        title: "Post a Blogs",
        url: "/dashboard/mng-blogs/post",
      },
    ],
  },
  {
    img: <BiCategory className="h-5 w-5" />,
    title: "Manage Category",
    url: "/dashboard/mng-category",
  },
  {
    img: <FaQuestion className="h-5 w-5" />,
    title: "Manage FAQ",
    url: "/dashboard/mng-faq",
  },
  {
    img: <FaCog className="h-5 w-5" />,
    title: "Manage Locations",
    url: "/dashboard/mng-locations",
  },
  {
    img: <FaCog className="h-5 w-5" />,
    title: "Manage Setting",
    url: "",
    subMenu: [
      {
        title: "Main",
        url: "/dashboard/mng-setting",
      },
      {
        title: "App Version",
        url: "/dashboard/mng-setting/post",
      },
      {
        title: "Mobile Language",
        url: "/dashboard/mng-setting/post",
      },
    ],
  },
  {
    img: <FaCog className="h-5 w-5" />,
    title: "Manage Payouts",
    url: "/dashboard/mng-faq",
  },
  {
    img: <FaCog className="h-5 w-5" />,
    title: "Manage Wallet & Promo",
    url: "/dashboard/mng-faq",
  },
  {
    img: <FaCog className="h-5 w-5" />,
    title: "Manage Statements",
    url: "/dashboard/mng-faq",
  },
  {
    img: <FaCog className="h-5 w-5" />,
    title: "Manage Manual Booking",
    url: "/dashboard/mng-faq",
  },
  {
    img: <FaCog className="h-5 w-5" />,
    title: "Manage Admin",
    url: "/dashboard/mng-faq",
  },
  {
    img: <FaCog className="h-5 w-5" />,
    title: "Manage Business Types",
    url: "/dashboard/mng-faq",
  },
  {
    img: <FaCog className="h-5 w-5" />,
    title: "Manage Home Banner",
    url: "/dashboard/mng-faq",
  },
  {
    img: <FaCog className="h-5 w-5" />,
    title: "Manage Providers",
    url: "/dashboard/mng-faq",
  },
  {
    img: <FaCog className="h-5 w-5" />,
    title: "Manage Company",
    url: "/dashboard/mng-faq",
  },
  {
    img: <FaCog className="h-5 w-5" />,
    title: "Manage Stores",
    url: "/dashboard/mng-faq",
  },
  {
    img: <FaCog className="h-5 w-5" />,
    title: "Manage Documents",
    url: "/dashboard/mng-faq",
  },
  {
    img: <FaCog className="h-5 w-5" />,
    title: "Recipient Management",
    url: "/dashboard/mng-faq",
  },
  {
    img: <FaCog className="h-5 w-5" />,
    title: "Manage Review Issue Types",
    url: "/dashboard/mng-faq",
  },
  {
    img: <FaCog className="h-5 w-5" />,
    title: "Manage Services",
    url: "/dashboard/mng-faq",
  },
  {
    img: <FaCog className="h-5 w-5" />,
    title: "Manage Help",
    url: "/dashboard/mng-faq",
  },
  {
    img: <FaCog className="h-5 w-5" />,
    title: "Manage Map",
    url: "/dashboard/mng-faq",
  },
  {
    img: <FaCog className="h-5 w-5" />,
    title: "Manage Parcel Type",
    url: "/dashboard/mng-faq",
  },
  {
    img: <FaCog className="h-5 w-5" />,
    title: "Manage Vehicles",
    url: "/dashboard/mng-faq",
  },
  {
    img: <FaCog className="h-5 w-5" />,
    title: "Manage Fare",
    url: "/dashboard/mng-faq",
  },
  {
    img: <FaCog className="h-5 w-5" />,
    title: "Manage Ratings",
    url: "/dashboard/mng-faq",
  },
  {
    img: <FaCog className="h-5 w-5" />,
    title: "Manage Orders",
    url: "/dashboard/mng-faq",
  },
  {
    img: <FaCog className="h-5 w-5" />,
    title: "Manage Reasons",
    url: "/dashboard/mng-faq",
  },
  {
    img: <FaCog className="h-5 w-5" />,
    title: "Manage Owe Amount",
    url: "/dashboard/mng-faq",
  },
  {
    img: <FaCog className="h-5 w-5" />,
    title: "Manage Store Owe Amount",
    url: "/dashboard/mng-faq",
  },
  {
    img: <FaCog className="h-5 w-5" />,
    title: "Manage Store Payout",
    url: "/dashboard/mng-faq",
  },
  {
    img: <FaCog className="h-5 w-5" />,
    title: "Manage Penalty",
    url: "/dashboard/mng-faq",
  },
];
