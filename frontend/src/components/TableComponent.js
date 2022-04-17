import React from 'react';
import Table from 'rc-table';

const TableComponent = ({ columns, data }) => {

   return (
      <Table columns={columns} data={data} />
   );
};

export default TableComponent;