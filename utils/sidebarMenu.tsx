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
  FaThumbsUp,
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
      {
        title: "Skill Input",
        url: "/test/skill-input",
      },
      {
        title: "Skill Create",
        url: "/test/create-skill",
      },
    ],
  },
  {
    img: <FaUsers className="h-5 w-5" />,
    title: "Manage Users",
    url: "/dashboard/mng-user",
    // subMenu: [
    //   {
    //     title: "Users List",
    //     url: "/dashboard/mng-user",
    //   },
    //   {
    //     title: "Add Users",
    //     url: "/dashboard/mng-user/add",
    //   },
    // ],
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
        url: "/dashboard/mng-jobs/post",
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
    img: <FaThumbsUp className="h-5 w-5" />,
    title: "Manage Dispute",
    url: "",
    subMenu: [
      {
        title: "Request List",
        url: "/dashboard/mng-dispute",
      },
    ],
  },
  {
    img: <FaRocketchat className="h-5 w-5" />,
    title: "Manage Messages",
    url: "/dashboard/mng-msgs",
    // subMenu: [
    //   {
    //     title: "Request List",
    //     url: "/dashboard/mng-msgs",
    //   },
    //   {
    //     title: "Live Chat",
    //     url: "/dashboard/mng-msgs/live-chat",
    //   },
    // ],
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
    url: "",
    subMenu: [
      {
        title: "Requests",
        url: "/dashboard/mng-faq",
      },
      {
        title: "Create",
        url: "/dashboard/mng-faq/create",
      },
    ],
  },
  // {
  //   img: <FaCog className="h-5 w-5" />,
  //   title: "Manage Locations",
  //   url: "/dashboard/mng-locations",
  //   subMenu: [
  //     {
  //       title: "Location List",
  //       url: "/dashboard/mng-locations",
  //     },
  //     {
  //       title: "Add",
  //       url: "/dashboard/mng-locations/add",
  //     },
  //   ],
  // },
  // {
  //   img: <FaCog className="h-5 w-5" />,
  //   title: "Manage Setting",
  //   url: "",
  //   subMenu: [
  //     {
  //       title: "Main",
  //       url: "/dashboard/mng-setting",
  //     },
  //     {
  //       title: "App Version",
  //       url: "/dashboard/mng-setting/app-version",
  //     },
  //     {
  //       title: "Mobile Language",
  //       url: "/dashboard/mng-setting/mobile-language",
  //     },
  //   ],
  // },
  // {
  //   img: <FaCog className="h-5 w-5" />,
  //   title: "Manage Payouts",
  //   url: "/dashboard/mng-payouts",
  // },
  // {
  //   img: <FaCog className="h-5 w-5" />,
  //   title: "Manage Wallet & Promo",
  //   url: "/dashboard/mng-wallet-promo",
  //   subMenu: [
  //     {
  //       title: "Wallet Information",
  //       url: "/dashboard/mng-wallet-promo/wallet-info",
  //     },
  //     {
  //       title: "Promo List",
  //       url: "/dashboard/mng-wallet-promo/promo-info",
  //     },
  //   ],
  // },
  // {
  //   img: <FaCog className="h-5 w-5" />,
  //   title: "Manage Statements",
  //   url: "/dashboard/mng-statements",
  //   subMenu: [
  //     {
  //       title: "Create Statement",
  //       url: "/dashboard/mng-statements/create",
  //     },
  //     {
  //       title: "Statement List",
  //       url: "/dashboard/mng-statements",
  //     },
  //   ],
  // },
  // {
  //   img: <FaCog className="h-5 w-5" />,
  //   title: "Manage Manual Booking",
  //   subMenu: [
  //     {
  //       title: "Customers List",
  //       url: "/dashboard/mng-manual-booking",
  //     },
      // {
      //   title: "Create Booking",
      //   url: "/dashboard/mng-manual-booking/create",
      // },
      // {
      //   title: "Edit Booking",
      //   url: "/dashboard/mng-manual-booking/edit",
      // },
  //   ],
  // },
  // {
  //   img: <FaCog className="h-5 w-5" />,
  //   title: "Manage Admin",
  //   url: "/dashboard/mng-admin",
  // },
  // {
  //   img: <FaCog className="h-5 w-5" />,
  //   title: "Manage Business Types",
  //   url: "/dashboard/mng-business-type",
  // },
  // {
  //   img: <FaCog className="h-5 w-5" />,
  //   title: "Manage Home Banner",
  //   url: "/dashboard/mng-home-banner",
  //   subMenu: [
  //     {
  //       title: "Banner List",
  //       url: "/dashboard/mng-home-banner",
  //     },
  //     {
  //       title: "Edit Properties",
  //       url: "/dashboard/mng-home-banner/edit",
  //     },
  //   ],
  // },
  // {
  //   img: <FaCog className="h-5 w-5" />,
  //   title: "Manage Providers",
  //   url: "/dashboard/mng-provider",
  //   subMenu: [
  //     {
  //       title: "Provider List",
  //       url: "/dashboard/mng-provider",
  //     },
  //     {
  //       title: "Add a Provider",
  //       url: "/dashboard/mng-provider/create",
  //     },
      // {
      //   title: "Contract Management",
      //   url: "/dashboard/mng-provider/mng-contract"
      // },
      // {
      //   title: "Performance Management",
      //   url: "/dashboard/mng-provider/mng-performance"
      // },
      // {
      //   title: "Risk Management",
      //   url: "/dashboard/mng-provider/mng-risk"
      // },
      // {
      //   title: "Relationship",
      //   url: "/dashboard/mng-provider/mng-relation"
      // }
  //   ],
  // },
  // {
  //   img: <FaCog className="h-5 w-5" />,
  //   title: "Manage Company",
  //   url: "/dashboard/mng-company",
  //   subMenu: [
  //     {
  //       title: "Company List",
  //       url: "/dashboard/mng-company",
  //     },
  //     {
  //       title: "New +",
  //       url: "/dashboard/mng-company/create",
  //     },
  //   ],
  // },
  // {
  //   img: <FaCog className="h-5 w-5" />,
  //   title: "Manage Stores",
  //   url: "/dashboard/mng-store",
  //   subMenu: [
  //     {
  //       title: "Stores List",
  //       url: "/dashboard/mng-store",
  //     },
  //     {
  //       title: "Create",
  //       url: "/dashboard/mng-store/create",
  //     },
  //   ],
  // },
  // {
  //   img: <FaCog className="h-5 w-5" />,
  //   title: "Manage Documents",
  //   url: "/dashboard/mng-documents",
  // },
  // {
  //   img: <FaCog className="h-5 w-5" />,
  //   title: "Recipient Management",
  //   url: "/dashboard/mng-recipient",
  // },
  // {
  //   img: <FaCog className="h-5 w-5" />,
  //   title: "Manage Review Issue Types",
  //   url: "/dashboard/mng-review-issue-type",
  // },
  // {
  //   img: <FaCog className="h-5 w-5" />,
  //   title: "Manage Services",
  //   url: "/dashboard/mng-services",
  // },
  // {
  //   img: <FaCog className="h-5 w-5" />,
  //   title: "Manage Help",
  //   url: "/dashboard/mng-help",
  // },
  // {
  //   img: <FaCog className="h-5 w-5" />,
  //   title: "Manage Map",
  //   url: "/dashboard/mng-map",
  // },
  // {
  //   img: <FaCog className="h-5 w-5" />,
  //   title: "Manage Parcel Type",
  //   url: "/dashboard/mng-parcel-type",
  //   subMenu: [
  //     {
  //       title: "Parcel Type List",
  //       url: "/dashboard/mng-parcel-type",
  //     },
  //     {
  //       title: "Add Parcel Type",
  //       url: "/dashboard/mng-parcel-type/add",
  //     },
  //   ],
  // },
  // {
  //   img: <FaCog className="h-5 w-5" />,
  //   title: "Manage Vehicles",
  //   url: "/dashboard/mng-vehicle",
  // },
  // {
  //   img: <FaCog className="h-5 w-5" />,
  //   title: "Manage Fare",
  //   url: "/dashboard/mng-fare",
  //   subMenu: [
  //     {
  //       title: "Fare List",
  //       url: "/dashboard/mng-fare"
  //     },
  //     {
  //       title: "Add Fare",
  //       url: "/dashboard/mng-fare/add"
  //     }
  //   ]
  // },
  // {
  //   img: <FaCog className="h-5 w-5" />,
  //   title: "Manage Ratings",
  //   url: "/dashboard/mng-rating",
  // },
  // {
  //   img: <FaCog className="h-5 w-5" />,
  //   title: "Manage Orders",
  //   url: "/dashboard/mng-order",
    // subMenu: [
    //   {
    //     title: "Order List",
    //     url: "/dashboard/mng-order"
    //   },
    //   {
    //     title: "Add Order",
    //     url: "/dashboard/mng-order/add"
    //   }
    // ]
  // },
  // {
  //   img: <FaCog className="h-5 w-5" />,
  //   title: "Manage Reasons",
  //   url: "/dashboard/mng-reasons",
  // },
  // {
  //   img: <FaCog className="h-5 w-5" />,
  //   title: "Manage Owe Amount",
  //   url: "/dashboard/mng-owe-amount",
  // },
  // {
  //   img: <FaCog className="h-5 w-5" />,
  //   title: "Manage Store Owe Amount",
  //   url: "/dashboard/mng-store-owe-amount",
  // },
  // {
  //   img: <FaCog className="h-5 w-5" />,
  //   title: "Manage Store Payout",
  //   url: "/dashboard/mng-store-payout",
  // },
  // {
  //   img: <FaCog className="h-5 w-5" />,
  //   title: "Manage Penalty",
  //   url: "/dashboard/mng-penalty",
  // },
];
