import ConfirmModal from "@/components/includes/ConfirmModal";
import CustomizedTable from "@/components/includes/dataTable/DataTable";
import { LayoutComponent } from "@/components/includes/layout";
import { NextPageWithLayout } from "@/pages/_app";
import { GigColumns } from "@/utils/columns";
import { fakeGigs } from "@/utils/fakeDatas";
import { Button, Spinner } from "@material-tailwind/react";
import { useRouter } from "next/router";
import { ReactElement, useState } from "react";

const GigsList: NextPageWithLayout = () => {
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
    setOpen(false);
    // TODO DELETE ACTION
  };
  return (
    <div>
      <div>
        <Button onClick={handlerEdit}>Edit</Button>
        <Button color="red" onClick={handlerDelete}>
          Delete
        </Button>
      </div>
      <CustomizedTable
        data={fakeGigs}
        columns={GigColumns}
        handleSelected={handleSelected}
        expandableRows
        expandableRowsComponent={ExpandedComponent}
        ProgressComponent={ProgressComponent}
        onSelectedRowsChange={handleChange}
      />
      <ConfirmModal
        open={open}
        handleOpen={handleOpen}
        onConfirm={deleteRecordAction}
      />
    </div>
  );
};

GigsList.getLayout = (page: ReactElement) => {
  return <LayoutComponent>{page}</LayoutComponent>;
};

export default GigsList;
