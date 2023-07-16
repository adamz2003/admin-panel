import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";

const CustomizedTable = (props: any /* DataTableProps */) => {
  return (
    <DataTable
      selectableRows
      pagination
      fixedHeader
      fixedHeaderScrollHeight="600px"
      persistTableHead
      {...props}
    />
  );
};

export default CustomizedTable;
