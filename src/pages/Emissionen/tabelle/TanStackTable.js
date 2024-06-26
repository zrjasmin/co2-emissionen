import React, {useMemo, useState} from "react";
import { 
    flexRender, 
    useReactTable, 
    getCoreRowModel,
    getFacetedRowModel,
    getSortedRowModel,
    getFilteredRowModel,
    getExpandedRowModel
    } from '@tanstack/react-table'
import {columnDef} from "./colums"
import DATA from "../../../data/emissionen/Länder2.json"
import FilterFunction from "./FilterFunction";
import { type } from "@testing-library/user-event/dist/type";


const StackTable = () => {
    const columns = React.useMemo(() => columnDef);
    const data = React.useMemo(()=> DATA, []);
    
    const renderSubComponent = ({ row }) => {
        return <div>Sub Component for {row}</div>;
      };
    
    const getRowCanExpand = (row) => {

        console.log(row.getCanFilter)
        return row.getRowCanExpand;
      };

     
    // global filter
    const [filtering, setFiltering] = React.useState("") 

    const [columnFilters, setColumnFilters] = React.useState([]);


    const [sorting, setSorting] = React.useState([])
    const [expanded, setExpanded] = React.useState({})

    
    const tableInstance = useReactTable({ 
        columns: columns,
        data: data,
        renderSubComponent,
        getRowCanExpand,
        getCoreRowModel: getCoreRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getExpandedRowModel: getExpandedRowModel(),
        renderSubComponent,
        getRowCanExpand,
        state: {
            globalFilter: filtering,
            columnFilters: columnFilters,
            sorting: sorting,
            expanded: expanded
        },
        onGlobalFiltersChange: setFiltering,
        onColumnFiltersChange: setColumnFilters,
        onSortingChange: setSorting,
        onExpandedChange: setExpanded,
        getSubRows: row => row.subRows,
        getFacetedRowModel: getFacetedRowModel()
    
    });
    
    return (
    <>
    <input type="text"  value={filtering} onChange={(e)=> setFiltering(e.target.value)}/>
    <table>
        <thead>
            {tableInstance.getHeaderGroups().map((headerEl) => {
            return (
                <tr key={headerEl.id}>
                    {headerEl.headers.map((columnEl) => {
                        return (
                            <th key={columnEl.id} colSpan={columnEl.colSpan} 
                            onClick={columnEl.column.getToggleSortingHandler()}>
                                {columnEl.isPlaceholder ? null : (
                                    <>
                                    {columnEl.column.getCanFilter() ? (
                                            <div>
                                            <FilterFunction
                                            column={columnEl.column}
                                            table={tableInstance}
                                            />
                                        </div>
                                    ) : null}
                                    {flexRender(
                                        columnEl.column.columnDef.header,
                                        columnEl.getContext(),  
                                    )}
                                    {{asc: " 🔼", desc: " 🔽"} [
                                        columnEl.column.getIsSorted() ?? null
                                    ]}
                                    
                                    </>
                                )}
                            </th>
                        
                        );
                    })}
                </tr>
            )
            })}
        </thead>
        <tbody>
            {tableInstance.getRowModel().rows.map((rowItem, index) => {
                
                
                return (
                    <tr key={rowItem.id}>
                    { 
                        rowItem.getValue(2) === "Unternehmen" ? (
                            
                               
                                    // <td>{rowItem.getValue(1)}</td>
                                    // <td>{rowItem.getValue(2)}</td>
                                    // <td>{rowItem.getValue(3)}</td>
                            <>  
                            {rowItem.getVisibleCells().map((cellItem) => {
                                return ( 
                                    <td key={cellItem.id} >
                                        {flexRender(
                                        cellItem.column.columnDef.cell,
                                        cellItem.getContext()
                                        )}
                                    
                                    </td>
                                )
                            })}
                            </>



                            // <>
                           
                            // {rowItem.getVisibleCells().map((cellItem) => {
                            //     return ( 
                            //         <>
                            //         <td key={cellItem.id}>
                            //         {flexRender(
                            //         cellItem.column.columnDef.cell,
                            //          cellItem.getContext(),
                                     
                            //          )}
                            //         </td>

                            //         </>
                            //     )})
                            // }
                            // {
                            // }
                          

                            // </>
                        ) : (
                            <>
                            {rowItem.getVisibleCells().map((cellItem) => {
                        return ( 
                            <td key={cellItem.id} >
                                {flexRender(
                                    cellItem.column.columnDef.cell,
                                    cellItem.getContext()
                                    )}
                            
                        </td>
                        )
                    })}
                            </>
                        )
                    }
                        
                    </tr>
                )
            })}
        </tbody>
    </table>
    </>
    )
}



export default StackTable;

