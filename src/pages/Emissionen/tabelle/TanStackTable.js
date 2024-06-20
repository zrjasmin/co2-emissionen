import React, {useMemo, useState} from "react";
import { flexRender, useReactTable, getCoreRowModel,
    getFacetedRowModel,
    getSortedRowModel,
    getFilteredRowModel, } from '@tanstack/react-table'
import {columnDef} from "./colums"
import DATA from "../../../data/emissionen/Länder2.json"
import FilterFunction from "./FilterFunction";


const StackTable = () => {
    const columns = React.useMemo(() => columnDef);
    const data = React.useMemo(()=> DATA, [])
    const defaultColumn = React.useMemo(() => {
        return {
          youTubeProp: "hello world",
        };
      }, []);

    // global filter
    const [filtering, setFiltering] = React.useState("") 

    const [columnFilters, setColumnFilters] = React.useState([]);


    const [sorting, setSorting] = React.useState([])

    
    const tableInstance = useReactTable({ 
        columns: columns,
        data: data,
        defaultColumn: defaultColumn,

        getCoreRowModel: getCoreRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        getSortedRowModel: getSortedRowModel(),
        state: {
            globalFilter: filtering,
            columnFilters: columnFilters,
            sorting: sorting,
        },
        onGlobalFiltersChange: setFiltering,
        onColumnFiltersChange: setColumnFilters,
        onSortingChange: setSorting,
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
                                <th key={columnEl.id} colSpan={columnEl.colSpan} onClick={columnEl.column.getToggleSortingHandler()}>
                                    {columnEl.isPlaceholder ? null : (
                                        <>
                                        {flexRender(
                                            columnEl.column.columnDef.header,
                                            columnEl.getContext(),
                                            
                                        )}
                                        {{asc: " 🔼", desc: " 🔽"} [
                                            columnEl.column.getIsSorted() ?? null
                                        ]}
                                        {columnEl.column.getCanFilter() ? (
                                             <div>
                                                <FilterFunction
                                                column={columnEl.column}
                                                table={tableInstance}
                                                />
                                            </div>
                                        ) : null}
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
                {tableInstance.getRowModel().rows.map((rowItem) => {
                    return (
                        <tr key={rowItem.id}>
                            {rowItem.getVisibleCells().map((cellItem) => {
                                return (
                                <td key={cellItem.id}>
                                    {flexRender(
                                        cellItem.column.columnDef.cell,
                                        cellItem.getContext()
                                        
                                    )}
                                </td>
                                )
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

