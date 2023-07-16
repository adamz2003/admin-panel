import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";

const CustomizedTable = (props: any /* DataTableProps */) => {
  const [pending, setPending] = useState(true);
  const [rows, setRows] = useState<any>([]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setRows(props.data);
      setPending(false);
    }, 2);
    return () => clearTimeout(timeout);
  }, [props.data]);

  return (
    <DataTable
      selectableRows
      pagination
      fixedHeader
      fixedHeaderScrollHeight="600px"
      progressPending={pending}
      persistTableHead
      {...props}
    />
  );
};

export default CustomizedTable;
