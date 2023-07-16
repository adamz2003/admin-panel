import {
  MagnifyingGlassIcon,
  ChevronUpDownIcon,
} from "@heroicons/react/24/outline";
import { PencilIcon, UserPlusIcon } from "@heroicons/react/24/solid";
import DataTable from "react-data-table-component";
import {
  Card,
  CardHeader,
  Typography,
  Button,
  CardBody,
  CardFooter,
  Spinner,
} from "@material-tailwind/react";
import { useRouter } from "next/router";
import { useEffect, useMemo, useState } from "react";
import { userList } from "@/utils/fakeDatas";

const columns = [
  {
    name: "No",
    selector: (row: any) => row.id,
    sortable: true,
  },
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
      if(row.isActive === "f"){
        return "offline"
      } else {
        return "online"
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

const ExpandedComponent = ({ data }: any) => (
  <pre>{JSON.stringify(data, null, 2)}</pre>
);

export default function UserTable() {
  const router = useRouter();
  const gotoPage = (url: string) => {
    router.push(url);
  };

  const handleChange = ({ selectedRows }: any) => {
    console.log("Selected Rows: ", selectedRows);
  };

  const [pending, setPending] = useState(true);
	const [rows, setRows] = useState<any>([]);

	useEffect(() => {
		const timeout = setTimeout(() => {
			setRows(userList);
			setPending(false);
		}, 2000);
		return () => clearTimeout(timeout);
	}, []);

  return (
    <>
      <Card className="h-full w-full p-5">
        <CardHeader floated={false} shadow={false} className="rounded-none">
          <div className="mb-8 flex items-center justify-between gap-8">
            <div>
              <Typography variant="h5" color="blue-gray">
                Manage Users
              </Typography>
              <Typography color="gray" className="mt-1 font-normal">
                See information about all members
              </Typography>
            </div>
            <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
              <Button variant="outlined" color="blue-gray" size="sm">
                view all
              </Button>
              <Button
                className="flex items-center gap-3"
                color="blue"
                size="sm"
                onClick={() => gotoPage("/dashboard/mng-user/add")}
                variant="gradient"
              >
                <UserPlusIcon strokeWidth={2} className="h-4 w-4" /> Add member
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardBody className="">
          <DataTable
            title="Contact List"
            columns={columns}
            data={userList}
            selectableRows
            onSelectedRowsChange={handleChange}
            expandableRows
            expandableRowsComponent={ExpandedComponent}
            pagination
            progressPending={pending}
            progressComponent={<Spinner className="h-12 w-12" />}
          />
        </CardBody>
        <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
          <Typography variant="small" color="blue-gray" className="font-normal">
            Page 1 of 10
          </Typography>
          <div className="flex gap-2">
            <Button variant="outlined" color="blue-gray" size="sm">
              Previous
            </Button>
            <Button variant="outlined" color="blue-gray" size="sm">
              Next
            </Button>
          </div>
        </CardFooter>
      </Card>
    </>
  );
}
