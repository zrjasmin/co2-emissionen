import React, {useMemo, useState} from "react";
import { flexRender, useReactTable, getCoreRowModel, getFacetedMinMaxValues,
    getFacetedRowModel,
    getFacetedUniqueValues,
    getSortedRowModel,
    SortingFn,
    getFilteredRowModel, } from '@tanstack/react-table'
import {columnDef} from "./colums"
import DATA from "../../../data/emissionen/Länder2.json"
import DebouncedInput from "./DebounceFunction";
import FilterFunction from "./FilterFunction";


const StackTable = () => {
    const columns = React.useMemo(() => columnDef);
    const data = React.useMemo(()=> DATA, [])

    // global filter
    const [filtering, setFiltering] = React.useState("") 

    const [columnFilter, setColumnFilter] = React.useState([])

    const [sorting, setSorting] = React.useState([])

    
    const tableInstance = useReactTable({ 
        columns: columns,
        data: data,
        getCoreRowModel: getCoreRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        getSortedRowModel: getSortedRowModel(),
        state: {
            globalFilter: filtering,
            columnFilter: columnFilter,
            sorting: sorting,
        },
        onGlobalFiltersChange: setFiltering,
        onColumnFiltersChange: setColumnFilter,
        onSortingChange: setSorting,
        getFacetedRowModel: getFacetedRowModel(),
    
    });
    
    function inputType() {
    }
   
    console.log(columnDef.filter((column) => column.filterVariant === "select"))

    
    return (

        <>
        <input type="text"  value={filtering} onChange={(e)=> setFiltering(e.target.value)}/>
        <table>
            <thead>
               {tableInstance.getHeaderGroups().map((header) => {
                return (
                    <tr key={header.id}>
                        {header.headers.map((column) => {
                            return (
                                <th key={column.id} colSpan={column.colSpan} onClick={column.column.getToggleSortingHandler()}>
                                    {flexRender(
                                        column.column.columnDef.header,
                                        column.getContext(),
                                        
                                    )}
                                    {{asc: " 🔼", desc: " 🔽"} [
                                        column.column.getIsSorted() ?? null
                                    ]}
                                    {column.column.getCanFilter() ? (
                                        <div>
                                        <FilterFunction column={column.column} table={tableInstance}/>
                                    </div>):null}

                                </th>
                            )
                        })}
                    </tr>
                )
               })}
            </thead>

            <tbody>
                {tableInstance.getRowModel().rows.map((rowItem) => {
                    return (
                        <tr key={rowItem.id}>
                            {rowItem.getVisibleCells().map((cellItem) => {
                                return <td key={cellItem.id}>
                                    {flexRender(
                                        cellItem.column.columnDef.cell,
                                        cellItem.getContext()
                                        
                                    )}
                                </td>
                            })}
                        </tr>
                    )
                })}
            </tbody>
        </table>
        </>
    )
}



export default StackTable;