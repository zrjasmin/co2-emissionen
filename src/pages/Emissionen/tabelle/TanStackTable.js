import React, {useMemo, useRef, useState, Component} from "react";
import { 
    flexRender, 
    useReactTable, 
    getCoreRowModel,
    getFacetedRowModel,
    getSortedRowModel,
    getFilteredRowModel,
    ColumnVisibility,
    _getVisibleLeafColumns,
    
    } from '@tanstack/react-table'
import {columnDef} from "./colums"
import DATA from "../../../data/emissionen/Länder2.json"
import FilterFunction from "./FilterFunction"





const StackTable = () => {
    const columns = React.useMemo(() => columnDef);
    const data = React.useMemo(()=> DATA, []);
    
   
  


    const [columnFilters, setColumnFilters] = React.useState([]);


    const [sorting, setSorting] = React.useState([])

   
    
    const tableInstance = useReactTable({ 
        columns: columns,
        data: data,
        getCoreRowModel: getCoreRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        getSortedRowModel: getSortedRowModel(),
        state: {
            columnFilters: columnFilters,
            sorting: sorting,
            columnVisibility: {
                4: false,
                5: false
            }
            
        },    
        onColumnFiltersChange: setColumnFilters,
        onSortingChange: setSorting,
        getFacetedRowModel: getFacetedRowModel(),

    
    });
    
    
    return (
    <>
    
    <table>
       
        <thead>
            {tableInstance.getHeaderGroups().map((headerEl) => {
            return (
                <>

                <button onClick={tableInstance.resetColumnFilters}>Löschen</button>



                <tr key={headerEl.id}>
               
                    {headerEl.headers.map((columnEl) => {
                        return (
                            <>
                            
                            <th key={columnEl.id} colSpan={columnEl.colSpan} 
                            >
                                {columnEl.isPlaceholder ? null : (
                                    <>
                                    {columnEl.column.getCanFilter() ? (      
                                            <FilterFunction
                                            column={columnEl.column}
                                            table={tableInstance}
                                            />
                                    ) : null}

                                   <td className="header-text"onClick={columnEl.column.getToggleSortingHandler()}>
                                   {flexRender(
                                        columnEl.column.columnDef.header,
                                        columnEl.getContext(),  
                                    )}
                                   </td>
                                   
                                    {{asc: " 🔼", desc: " 🔽"} [
                                        columnEl.column.getIsSorted() ?? null
                                    ]}
                                    
                                    </>
                                )}
                            </th>
                            </>
                            
                        );
                    })}
                    
                    {/* <button onClick={tableInstance.resetColumnFilters}>Löschen</button> */}

                </tr>
                </>
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
                        <>
                        <tr className="subrow collapsible">
                            <p>{rowItem.getValue(4)}</p>
                            <p>{rowItem.getValue(5)}</p>
                        </tr>
                        </>
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

