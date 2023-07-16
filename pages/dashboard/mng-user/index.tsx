import ConfirmModal from "@/components/includes/ConfirmModal";
import CustomizedTable from "@/components/includes/dataTable/DataTable";
import { LayoutComponent } from "@/components/includes/layout";
import { NextPageWithLayout } from "@/pages/_app";
import { UserColumns } from "@/utils/columns";
import { userList } from "@/utils/fakeDatas";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Spinner,
  Typography,
} from "@material-tailwind/react";
import { useRouter } from "next/router";
import { ReactElement, useState } from "react";

const MngUsers: NextPageWithLayout = () => {
  const router = useRouter();
  const handleSelected = ({ row }: any) => {};
  const ProgressComponent = <Spinner />;
  const ExpandedComponent = ({ data }: any) => (
    <pre>{JSON.stringify(data, null, 2)}</pre>
  );

  const [selectedRows, setSelectedRows] = useState<any>([]);

  const handleChange = ({ selectedRows }: any) => {
    setSelectedRows(selectedRows);
  };

  const handlerDelete = () => {
    selectedRows.length === 0 && alert("Select records");
    selectedRows.length > 0 && setOpen(true);
  };

  const handlerEdit = () => {
    selectedRows.length === 1 &&
      router.push({
        pathname: "/dashboard/mng-user/edit",
        query: {
          id: selectedRows[0].id,
        },
      });
    selectedRows.length !== 1 && alert("Select one record!");
  };

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);

  const deleteRecordAction = () => {
    setOpen(false)
    // TODO DELETE ACTION
  }

  return (
    // <Card className="">
    //   <CardHeader
    //     variant="gradient"
    //     color="blue"
    //     className="mb-4 grid h-28 place-items-center"
    //   >
    //     <Typography variant="h3" color="white">
    //       Users List
    //     </Typography>
    //   </CardHeader>
    //   <CardBody className="min-h-[600px]">
    //     <CustomizedTable
    //       data={userList}
    //       columns={UserColumns}
    //       handleSelected={handleSelected}
    //       expandableRows
    //       expandableRowsComponent={ExpandedComponent}
    //       ProgressComponent={ProgressComponent}
    //     />
    //   </CardBody>
    // </Card>
    <div>
      <div>
        <Button onClick={handlerEdit}>Edit</Button>
        <Button color="red" onClick={handlerDelete}>
          Delete
        </Button>
      </div>
      <CustomizedTable
        data={userList}
        columns={UserColumns}
        handleSelected={handleSelected}
        expandableRows
        expandableRowsComponent={ExpandedComponent}
        ProgressComponent={ProgressComponent}
        onSelectedRowsChange={handleChange}
      />
      <ConfirmModal open={open} handleOpen={handleOpen} onConfirm={deleteRecordAction} />
    </div>
  );
};

MngUsers.getLayout = (page: ReactElement) => {
  return <LayoutComponent>{page}</LayoutComponent>;
};

export default MngUsers;
