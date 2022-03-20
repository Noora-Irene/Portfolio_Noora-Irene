import React from 'react';
import { useTable, useSortBy } from 'react-table';
import Table from 'react-bootstrap/Table';

const TableComponent = ({ columns, data }) => {
   const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      rows,
      prepareRow,
   } = useTable(
      {
         columns,
         data,
      },
      useSortBy
   );

   // Render table and add sorting
   return (
      <Table striped
         {...getTableProps()}
      >
         <thead>
            {headerGroups.map((headerGroup) => (
               <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => (
                     // Props for sorting
                     <th
                        {...column.getHeaderProps(
                           column.getSortByToggleProps()
                        )}
                     >
                        {column.render('Header')}
                        {/* Sorting direction indicator */}
                        <span>
                           {column.isSorted
                              ? column.isSortedDesc
                                 ? ' 🔽'
                                 : ' 🔼'
                              : ''}
                        </span>
                     </th>
                  ))}
               </tr>
            ))}
         </thead>
         <tbody {...getTableBodyProps()}>
            {rows.map((row, i) => {
               prepareRow(row);
               return (
                  <tr {...row.getRowProps()}>
                     {row.cells.map((cell) => {
                        return (
                           <td {...cell.getCellProps()}>
                              {cell.render('Cell')}
                           </td>
                        );
                     })}
                  </tr>
               );
            })}
         </tbody>
      </Table>
   );
};

export default TableComponent;