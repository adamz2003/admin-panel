import ConfirmModal from "@/components/includes/ConfirmModal";
import CustomizedTable from "@/components/includes/dataTable/DataTable";
import ApiService from "@/services/ApiService";
import { MsgColumns } from "@/utils/columns";
import { fakeMessageList } from "@/utils/fakeDatas";
import { Button, Spinner } from "@material-tailwind/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export const MngListComponent = () => {
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

  const [Pending, setPending] = useState(true);
  const [MsgData, setMsgData] = useState<any>([]);

  const getMsgData = async () => {
    setPending(true)
    const res = await ApiService.getData({url:"/messages/findAll"})
    setMsgData(res)
    setPending(false)
  }

  useEffect(() => {
    getMsgData()
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
        data={MsgData}
        columns={MsgColumns}
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