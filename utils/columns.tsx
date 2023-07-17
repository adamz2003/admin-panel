import { Button, IconButton } from "@material-tailwind/react";
import { BsTrash3, BsPencilSquare } from "react-icons/bs";

export const TestColumns = [
  {
    name: "Name",
    selector: (row: any) => row.firstName + row.lastName,
    sortable: true,
  },
  {
    name: "Email",
    selector: (row: any) => row.email,
    sortable: true,
  },
  {
    name: "App Version",
    selector: (row: any) => row.appVersion,
    sortable: true,
  },
  {
    name: "isActive",
    selector: (row: any) => {
      if (row.isActive === "f") {
        return "offline";
      } else {
        return "online";
      }
    },
    sortable: true,
  },
  {
    name: "Created At",
    selector: (row: any) => row.createdAt,
    sortable: true,
  },
]

export const UserColumns = [
  {
    name: "Name",
    selector: (row: any) => row.user.firstName + row.user.lastName,
    sortable: true,
  },
  {
    name: "Email",
    selector: (row: any) => row.user.email,
    sortable: true,
  },
  {
    name: "Location",
    selector: (row: any) => row.city + "," + row.country,
    sortable: true,
  },
  {
    name: "Role",
    selector: (row: any) => {
      var result = ""
      JSON.parse(row.user.roles).map((ele:any) =>{
        result += ele + ","
      })
      return result.slice(0,-1)
    },
    sortable: true,
  },
  // {
  //   name: "App Version",
  //   selector: (row: any) => row.appVersion,
  //   sortable: true,
  // },
  // {
  //   name: "isActive",
  //   selector: (row: any) => {
  //     if (row.isActive === "f") {
  //       return "offline";
  //     } else {
  //       return "online";
  //     }
  //   },
  //   sortable: true,
  // },
  {
    name: "Created At",
    selector: (row: any) => row.createdAt,
    sortable: true,
  },
];

const sortById = (rowA: any, rowB: any) => {
  const a = rowA.id;
  const b = rowB.id;

  if (a > b) {
    return 1;
  }

  if (b > a) {
    return -1;
  }

  return 0;
};

export const JobsColumns = [
  // {
  //   name: "No",
  //   selector: (row: any, idx: number) => idx + 1,
  //   sortFunction: sortById,
  //   sortable: true,
  // },
  {
    name: "Requester",
    selector: (row: any) => row.user.firstName + " " + row.user.lastName,
    sortable: true,
  },
  {
    name: "Status",
    selector: (row: any) => {
      if (row.status === "1") {
        return "Active";
      } else if (row.status === "2") {
        return "In Progressing";
      } else if (row.status === "3") {
        return "Hired";
      }
    },
    sortable: true,
  },
  {
    name: "Category",
    selector: (row: any) => row.category.name,
    sortable: true,
  },
  {
    name: "Created At",
    selector: (row: any) => row.createdAt,
    sortable: true,
  },
];

export const GigColumns = [
  // {
  //   name: "No",
  //   selector: (row: any, idx: number) => idx + 1,
  //   sortFunction: sortById,
  //   sortable: true,
  // },
  {
    name: "Provider",
    selector: (row: any) => row.user.firstName + " " + row.user.lastName,
    sortable: true,
  },
  {
    name: "Status",
    selector: (row: any) => {
      if (row.status === "0") {
        return "Active";
      } else if (row.status === "1") {
        return "In Progressing";
      } else if (row.status === "2") {
        return "Hired";
      }
    },
    sortable: true,
  },
  {
    name: "Category",
    selector: (row: any) => row.category.name,
    sortable: true,
  },
  {
    name: "Created At",
    selector: (row: any) => row.createdAt,
    sortable: true,
  },
];

export const MsgColumns = [
  {
    name: "Sender",
    selector: (row: any) => row.sender.firstName + " " + row.sender.lastName,
    sortable: true,
  },
  {
    name: "Receiver",
    selector: (row: any) => row.receiver.firstName + " " + row.receiver.lastName,
    sortable: true,
  },
  {
    name: "Created At",
    selector: (row: any) => row.createdAt,
    sortable: true,
  }
];

export const FaqColumns = [
  {
    name: "Question",
    selector: (row: any) => row.question,
    sortable: true,
  },
  {
    name: "Answers",
    selector: (row: any) => row.answer,
    sortable: true,
  },
  {
    name: "Category",
    selector: (row: any) => row.category,
    sortable: true,
  },
  {
    name: "Category",
    selector: (row: any) => row.createdAt,
    sortable: true,
  }
]
