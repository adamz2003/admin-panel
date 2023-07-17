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
  import { FareListData, userList } from "@/utils/fakeDatas";
  import CustomizedTable from "@/components/includes/dataTable/DataTable";
  import ConfirmModal from "@/components/includes/ConfirmModal";
  import { FareColumns, UserColumns } from "@/utils/columns";
  import ApiService from "@/services/ApiService";
  import { SkillComponent } from "@/components/includes/SkillComponents";
  import Image from "next/image";
  import personImg from "../../../public/image/persons/p-1.png";
  
  export const FareListComponent = () => {
    const router = useRouter();
    const handleSelected = ({ row }: any) => {};
    const ProgressComponent = <Spinner />;
    const [UserData, setUserData] = useState<any>([]);
    const [Pending, setPending] = useState(false);
  
    const ExpandedComponent = ({ data }: any) => (
      <div>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
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
  
    const getUserData = async () => {
      setPending(true);
      const res = await ApiService.getData({ url: "user-profile/fetch" });
      setUserData(res.data);
      setPending(false);
    };
  
    useEffect(() => {
      getUserData();
    }, []);
  
    return (
      <div className="grid gap-8">
        <div className="flex justify-end gap-2">
          {/* <Button onClick={handlerEdit}>Edit</Button> */}
          <Button color="red" onClick={handlerDelete}>
            Delete
          </Button>
        </div>
        <CustomizedTable
          data={FareListData}
          columns={FareColumns}
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
  }