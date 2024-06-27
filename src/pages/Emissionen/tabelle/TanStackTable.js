import React, {useMemo, useState} from "react";
import { 
    flexRender, 
    useReactTable, 
    getCoreRowModel,
    getFacetedRowModel,
    getSortedRowModel,
    getFilteredRowModel,
    
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
    const [columnVisibility, setColumnVisibility] = React.useState({})

    
    const tableInstance = useReactTable({ 
        columns: columns,
        data: data,
        renderSubComponent,
        getRowCanExpand,
        getCoreRowModel: getCoreRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        getSortedRowModel: getSortedRowModel(),
        state: {
            globalFilter: filtering,
            columnFilters: columnFilters,
            sorting: sorting,
            columnVisibility
            

        },
        onGlobalFiltersChange: setFiltering,
        onColumnFiltersChange: setColumnFilters,
        onSortingChange: setSorting,
        getFacetedRowModel: getFacetedRowModel(),
        onColumnVisibilityChange: setColumnVisibility

    
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
                    <>
                    <tr key={index}>
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
                    </tr>   

                    


                    
                    {rowItem.getValue(2) === "Unternehmen" ? (
                        <tr className="subrow">
                            <p>{rowItem.getValue(4)}</p>
                            <p>{rowItem.getValue(5)}</p>
                        </tr>
                    ): null}   

                  
                    </>


                )
            })}
        </tbody>
    </table>
    </>
    )
}



export default StackTable;

