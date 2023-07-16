import ConfirmModal from "@/components/includes/ConfirmModal";
import CustomizedTable from "@/components/includes/dataTable/DataTable";
import ApiService from "@/services/ApiService";
import { GigColumns } from "@/utils/columns";
import { Button, Spinner } from "@material-tailwind/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export const GigListTable = () => {
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

  const [GigListData, setGigListData] = useState<any>([]);
  const [Pending, setPending] = useState(true);

  const getGigData = async () => {
    const res = await ApiService.getData({url: "/gigs/fetch"});
    setGigListData(res.data)
    setPending(false)
  }

  useEffect(() => {
    getGigData()
  }, []);

  return (
    <div>
      <div>
        <Button onClick={handlerEdit}>Edit</Button>
        <Button color="red" onClick={handlerDelete}>
          Delete
        </Button>
      </div>
      <CustomizedTable
        data={GigListData}
        columns={GigColumns}
        handleSelected={handleSelected}
        expandableRows
        progressPending={Pending}
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