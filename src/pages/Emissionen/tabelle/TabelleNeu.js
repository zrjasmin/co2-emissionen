// import React, {useMemo} from "react";
// import DATA from "../../../data/emissionen/Länder2.json"
// import { COLUMNS } from "./colums";
// import {useTable, useSortBy, useFilters} from "react-table";
// import ColumnFilter from "./ColumnFilter";

// const Table = () => {
//     const columns = useMemo(()=> COLUMNS, []);
//     const data = useMemo(()=> DATA, [])

//     const tableInstance = useTable({
//         columns,
//         data
//     },
//     useFilters,
//     useSortBy);

//     const {getTableProps, getTableBodyProps, headerGroups, rows, prepareRow} = tableInstance;

//     return(
//         <>
//             <table {...getTableProps()}>

//                 <thead>
//                     {headerGroups.map((headerGroup) => (
//                             <tr {...headerGroup.getHeaderGroupProps()}>
//                                 {headerGroup.headers.map((column) =>(
//                                      <th {...column.getHeaderProps(column.getSortByToggleProps())}>
//                                         {column.render('Header')}
                                        
//                                         <span>
//                                             {
//                                                 column.isSorted ? (column.isSortedDesc ? ">": "<") : ""
//                                             }
//                                         </span>
//                                         <div>{column.canFilter ? column.render('Filter') : null}</div>
//                                      </th>
                                     
//                                 ))}
//                         	</tr>
//                             ))}
//                 </thead>
//                 <tbody {...getTableBodyProps()}>
//                     {
//                         rows.map((row) => {prepareRow(row)
//                             return ( 
//                                 <tr {...row.getRowProps}>
//                                     {
//                                         row.cells.map((cell) => {
//                                             return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
//                                         })
//                                     }
//                                 </tr>
//                             )
//                         })
//                     }
//                 </tbody>
//             </table>
//         </>
//     )
// }

// export default Table;