import ConfirmModal from "@/components/includes/ConfirmModal";
import CustomizedTable from "@/components/includes/dataTable/DataTable";
import { JobsColumns } from "../../../utils/columns";
import { Button, Spinner } from "@material-tailwind/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ApiService from "@/services/ApiService";

export const JobReqTable = () => {
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

  const [JobReqData, setJobReqData] = useState<any>([]);
  const [Pending, setPending] = useState();

  const getJobReqData = async () => {
    const res = await ApiService.getData({url: "/requests/fetch"})
    setJobReqData(res.data)
  }

  useEffect(() => {
    getJobReqData()
  }, []);

  const gotoNewJob = () => {
    router.push('/dashboard/mng-jobs/post')
  }

  return (
    <div className="">
      <div className="flex justify-end gap-2">
        <Button onClick={gotoNewJob}>Post</Button>
        <Button color="red" onClick={handlerDelete}>
          Delete
        </Button>
      </div>
      <CustomizedTable
        data={JobReqData}
        columns={JobsColumns}
        handleSelected={handleSelected}
        expandableRows
        progressPending={Pending}
        expandableRowsComponent={ExpandedComponent}
        ProgressComponent={ProgressComponent}
        onSelectedRowsChange={handleChange}
      />
      <ConfirmModal open={open} handleOpen={handleOpen} onConfirm={deleteRecordAction} />
    </div>
  );
};