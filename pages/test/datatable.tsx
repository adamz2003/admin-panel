import { LayoutComponent } from "@/components/includes/layout";
import { TestColumns } from "../../utils/columns";
import { userList } from "@/utils/fakeDatas";
import { Button, Spinner } from "@material-tailwind/react";
import { ReactElement, useCallback, useEffect, useMemo, useState } from "react";
import DataTable from "react-data-table-component";
import { NextPageWithLayout } from "../_app";

const MyComponent: NextPageWithLayout = () => {
  const [selectedRows, setSelectedRows] = useState([]);

  const handleRowSelected = useCallback((state: any) => {
    setSelectedRows(state.selectedRows);
  }, []);

  const handleDelete = () => {
    console.log(selectedRows);
  };
  
  return (
    <>
      <Button
        onClick={handleDelete}
      >
        Delete
      </Button>
      <DataTable
        columns={TestColumns}
        data={userList}
        selectableRows
        // onSelectedRowsChange={handleRowSelected}
        pagination
      />
    </>
  );
};

MyComponent.getLayout = (page:ReactElement) => {
  return <LayoutComponent>{page}</LayoutComponent>
}

export default MyComponent;
