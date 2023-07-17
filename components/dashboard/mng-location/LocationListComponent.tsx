import ConfirmModal from "@/components/includes/ConfirmModal";
import CustomizedTable from "@/components/includes/dataTable/DataTable";
import { SkillComponent } from "@/components/includes/SkillComponents";
import ApiService from "@/services/ApiService";
import { LocationColumns } from "@/utils/columns";
import { LocationListData, personImgs } from "@/utils/fakeDatas";
import { Button, Card, CardBody, CardFooter, Spinner } from "@material-tailwind/react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export const LocationListComponent = () => {
    const router = useRouter();
  const handleSelected = ({ row }: any) => {};
  const ProgressComponent = <Spinner />;
  const [UserData, setUserData] = useState<any>([]);
  const [Pending, setPending] = useState(false);

  const ExpandedComponent = ({ data }: any) => (
    <div>
      {/* <Card>
        <CardBody className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-center">
          <div className="flex flex-row gap-8 items-center">
            <div className="w-12 h-12">
              <Image src={personImgs.personImg1} className="rounded-full"></Image>
            </div>
            <div>{data.user.firstName + " " + data.user.lastName}</div>
          </div>
          <div>Contact Info : {data.user.email}</div>
          <div>Location: {data.city + "," + data.country}</div>
          <div>BirthDay: {data.birth}</div>
          <div>Created At: {data.user.createdAt}</div>
          <div className="flex">
            Skills: <SkillComponent data={data.skill} />
          </div>
        </CardBody>
        <CardFooter>
          <div className="flex justify-end">
            <Button>More Detail</Button>
          </div>
        </CardFooter>
      </Card> */}
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
        data={LocationListData}
        columns={LocationColumns}
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