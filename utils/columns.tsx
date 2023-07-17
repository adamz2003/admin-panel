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
];

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
      var result = "";
      JSON.parse(row.user.roles).map((ele: any) => {
        result += ele + ",";
      });
      return result.slice(0, -1);
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
    selector: (row: any) =>
      row.receiver.firstName + " " + row.receiver.lastName,
    sortable: true,
  },
  {
    name: "Created At",
    selector: (row: any) => row.createdAt,
    sortable: true,
  },
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
  },
];

export const BlogColumns = [
  {
    name: "Title",
    selector: (row: any) => row.title,
    sortable: true,
  },
  {
    name: "Tag",
    selector: (row: any) => JSON.stringify(row.blogtag),
    sortable: true,
  },
  {
    name: "Category",
    selector: (row: any) => row.blogcategory.name,
    sortable: true,
  },
  {
    name: "Created At",
    selector: (row: any) => row.createdAt,
    sortable: true,
  },
];

export const LocationColumns = [
  {
    name: "Area",
    selector: (row: any) => row.area,
    sortable: true,
  },
  {
    name: "Status",
    selector: (row: any) => row.status,
    sortable: true,
  },
  {
    name: "Action",
    selector: (row: any) => {
      if (row.isActive === "f") {
        return "Enable";
      }
      return "Disable";
    },
    sortable: true,
  },
];

export const StoreColumns = [
  {
    name: "Name",
    selector: (row: any) => row.name,
    sortable: true,
  },
  {
    name: "Phone Number",
    selector: (row: any) => row.phone,
    sortable: true,
  },
  {
    name: "Address",
    selector: (row: any) => row.address,
    sortable: true,
  },
  {
    name: "Email",
    selector: (row: any) => row.email,
    sortable: true,
  },
  {
    name: "Website",
    selector: (row: any) => row.website,
    sortable: true,
  },
];

export const CompanyColumns = [
  {
    name: "Company Name",
    selector: (row: any) => row.name,
    sortable: true,
  },
  {
    name: "Logo",
    selector: (row: any) => row.logo,
    sortable: true,
  },
  {
    name: "Phone Number",
    selector: (row: any) => row.phone,
    sortable: true,
  },
  {
    name: "Address",
    selector: (row: any) => row.address,
    sortable: true,
  },
  {
    name: "Email",
    selector: (row: any) => row.email,
    sortable: true,
  },
  {
    name: "Website",
    selector: (row: any) => row.website,
    sortable: true,
  },
];

export const FareColumns = [
  {
    name: "Company Name",
    selector: (row: any) => row.company_name,
    sortable: true,
  },
  {
    name: "Type",
    selector: (row: any) => row.fare_type,
    sortable: true,
  },
  {
    name: "Price($)",
    selector: (row: any) => row.fare_price,
    sortable: true,
  },
  {
    name: "Area",
    selector: (row: any) => row.area,
    sortable: true,
  },
];

export const PayoutsColumn = [
  {
    name: "Payouts ID",
    selector: (row: any) => row.id,
    sortable: true,
  },
  {
    name: "Recipient Name",
    selector: (row: any) => row.recipient_name,
    sortable: true,
  },
  {
    name: "Amount",
    selector: (row: any) => row.amount,
    sortable: true,
  },
  {
    name: "Currency",
    selector: (row: any) => row.currency,
    sortable: true,
  },
  {
    name: "Date",
    selector: (row: any) => row.date,
    sortable: true,
  },
];

export const WalletColumns = [
  {
    name: "Wallet ID",
    selector: (row: any) => row.id,
    sortable: true,
  },
  {
    name: "User Name",
    selector: (row: any) => row.user_name,
    sortable: true,
  },
  {
    name: "Balance",
    selector: (row: any) => row.balance,
    sortable: true,
  },
  {
    name: "Currency",
    selector: (row: any) => row.currency,
    sortable: true,
  },
  {
    name: "Created Date",
    selector: (row: any) => row.created_date,
    sortable: true,
  },
];

export const PromoColumns = [
  {
    name: "ID",
    selector: (row: any) => row.id,
    sortable: true,
  },
  {
    name: "Code",
    selector: (row: any) => row.code,
    sortable: true,
  },
  {
    name: "Discount Amount",
    selector: (row: any) => row.discount_amount,
    sortable: true,
  },
  {
    name: "Max Usage Count",
    selector: (row: any) => row.max_usage_count,
    sortable: true,
  },
  {
    name: "Start Date",
    selector: (row: any) => row.start_date,
    sortable: true,
  },
  {
    name: "End Date",
    selector: (row: any) => row.end_date,
    sortable: true,
  },
];

export const StatementColumns = [
  {
    name: "Statement ID",
    selector: (row: any) => row.id,
    sortable: true,
  },
  {
    name: "Account Number",
    selector: (row: any) => row.account_number,
    sortable: true,
  },
  {
    name: "Transaction Date",
    selector: (row: any) => row.transaction_date,
    sortable: true,
  },
  {
    name: "Description",
    selector: (row: any) => row.description,
    sortable: true,
  },
  {
    name: "Transaction Type",
    selector: (row: any) => row.transaction_type,
    sortable: true,
  },
  {
    name: "Transaction Amount",
    selector: (row: any) => row.transaction_amount,
    sortable: true,
  },
];

export const BusinessTypeColumns = [
  {
    name: "ID",
    selector: (row: any) => row.id,
    sortable: true,
  },
  {
    name: "Name",
    selector: (row: any) => row.name,
    sortable: true,
  },
  {
    name: "Description",
    selector: (row: any) => row.description,
    sortable: true,
  },
];

export const HomeBannerColumns = [
  {
    name: "ID",
    selector: (row: any) => row.id,
    sortable: true,
  },
  {
    name: "Image Url",
    selector: (row: any) => row.image_url,
    sortable: true,
  },
  {
    name: "Title",
    selector: (row: any) => row.title,
    sortable: true,
  },
  {
    name: "SubTitle",
    selector: (row: any) => row.subtitle,
    sortable: true,
  },
  {
    name: "Button Text",
    selector: (row: any) => row.button_text,
    sortable: true,
  },
  {
    name: "Button Url",
    selector: (row: any) => row.button_url,
    sortable: true,
  },
  {
    name: "Start Date",
    selector: (row: any) => row.start_date,
    sortable: true,
  },
  {
    name: "End Date",
    selector: (row: any) => row.end_date,
    sortable: true,
  },
];

export const ProviderColumns = [
  {
    name: "ID",
    selector: (row: any) => row.id,
    sortable: true,
  },
  {
    name: "Name",
    selector: (row: any) => row.name,
    sortable: true,
  },
  {
    name: "Category",
    selector: (row: any) => row.category,
    sortable: true,
  },
  {
    name: "Address",
    selector: (row: any) => row.address,
    sortable: true,
  },
  {
    name: "Phone Number",
    selector: (row: any) => row.phone_number,
    sortable: true,
  },
  {
    name: "Email",
    selector: (row: any) => row.email,
    sortable: true,
  },
  {
    name: "Website",
    selector: (row: any) => row.website_url,
    sortable: true,
  },
];

export const ServiceColumns = [
  {
    name: "ID",
    selector: (row: any) => row.id,
    sortable: true,
  },
  {
    name: "Name",
    selector: (row: any) => row.name,
    sortable: true,
  },
  {
    name: "Description",
    selector: (row: any) => row.description,
    sortable: true,
  },
  {
    name: "Category",
    selector: (row: any) => row.category,
    sortable: true,
  },
  {
    name: "Price",
    selector: (row: any) => row.price,
    sortable: true,
  },
  {
    name: "Duration",
    selector: (row: any) => row.duration,
    sortable: true,
  },
];

export const HelpColumns = [
  {
    name: "ID",
    selector: (row: any) => row.id,
    sortable: true,
  },
  {
    name: "Title",
    selector: (row: any) => row.title,
    sortable: true,
  },
  {
    name: "Description",
    selector: (row: any) => row.description,
    sortable: true,
  },
  {
    name: "Category",
    selector: (row: any) => row.category,
    sortable: true,
  },
];

export const MapColumns = [
  {
    name: "ID",
    selector: (row: any) => row.id,
    sortable: true,
  },
  {
    name: "Name",
    selector: (row: any) => row.name,
    sortable: true,
  },
  {
    name: "Description",
    selector: (row: any) => row.description,
    sortable: true,
  },
  {
    name: "Latitude",
    selector: (row: any) => row.latitude,
    sortable: true,
  },
  {
    name: "Longitude",
    selector: (row: any) => row.longitude,
    sortable: true,
  },
];

export const ParcelTypeColumns = [
  {
    name: "ID",
    selector: (row: any) => row.id,
    sortable: true,
  },
  {
    name: "Name",
    selector: (row: any) => row.name,
    sortable: true,
  },
  {
    name: "Description",
    selector: (row: any) => row.description,
    sortable: true,
  },
  {
    name: "Max Weight",
    selector: (row: any) => row.max_weight,
    sortable: true,
  },
];

export const VehicleColumns = [
  {
    name: "ID",
    selector: (row: any) => row.id,
    sortable: true,
  },
  {
    name: "Name",
    selector: (row: any) => row.name,
    sortable: true,
  },
  {
    name: "Description",
    selector: (row: any) => row.description,
    sortable: true,
  },
  {
    name: "Max Weight",
    selector: (row: any) => row.max_weight,
    sortable: true,
  },
];

export const RatingColumns = [
  {
    name: "ID",
    selector: (row: any) => row.id,
    sortable: true,
  },
  {
    name: "User Id",
    selector: (row: any) => row.user_id,
    sortable: true,
  },
  {
    name: "Item Id",
    selector: (row: any) => row.item_id,
    sortable: true,
  },
  {
    name: "Rating",
    selector: (row: any) => row.rating,
    sortable: true,
  },
  {
    name: "Timestamp",
    selector: (row: any) => row.timestamp,
    sortable: true,
  },
];

export const OrderListColumns = [
  { name: "User Id", selector: (row: any) => row.user_id, sortable: true },
  {
    name: "Customer UD",
    selector: (row: any) => row.customer_id,
    sortable: true,
  },
  {
    name: "Quantity",
    selector: (row: any) => row.quantity,
    sortable: true,
  },
  {
    name: "Item id",
    selector: (row: any) => row.item_id,
    sortable: true,
  },
  {
    name: "Rating",
    selector: (row: any) => row.price,
    sortable: true,
  },
  {
    name: "Timestamp",
    selector: (row: any) => row.order_date,
    sortable: true,
  },
];

export const ReasonColumns = [
  { name: "User Id", selector: (row: any) => row.user_id, sortable: true },
  {
    name: "Customer UD",
    selector: (row: any) => row.customer_id,
    sortable: true,
  },
  {
    name: "Quantity",
    selector: (row: any) => row.quantity,
    sortable: true,
  },
  {
    name: "Item id",
    selector: (row: any) => row.item_id,
    sortable: true,
  },
  {
    name: "Rating",
    selector: (row: any) => row.price,
    sortable: true,
  },
  {
    name: "Timestamp",
    selector: (row: any) => row.order_date,
    sortable: true,
  },
];