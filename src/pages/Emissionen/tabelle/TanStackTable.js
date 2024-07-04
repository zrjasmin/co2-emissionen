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
import ResetFunction from "./ResetFunction";





const StackTable = () => {
    const columns = React.useMemo(() => columnDef);
    const data = React.useMemo(()=> DATA, []);
    
    const [columnFilter, setColumFilter] = React.useState()
   
    const [dataFromChild, setDataFromChild] = React.useState()
    

    function handleDataFromChild(data) {
        setDataFromChild(data)
    }
    
    const [sorting, setSorting] = React.useState([])

   
    
    const tableInstance = useReactTable({ 
        columns: columns,
        data: data,
        getCoreRowModel: getCoreRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        getSortedRowModel: getSortedRowModel(),
        state: {
            columnFilters: columnFilter,
            sorting: sorting,
            columnVisibility: {
                4: false,
                5: false
            }
        },   
        defaultColumn: {
            columnFilters: [""]
        }, 
        onColumnFiltersChange: setColumFilter,
        onSortingChange: setSorting,
        getFacetedRowModel: getFacetedRowModel(),
        
    
    });
    
    function handleReset ()  {
        tableInstance.resetColumnFilters();
        tableInstance.resetSorting()
        tableInstance.getPreFilteredRowModel();
        setDataFromChild("")
        
    }
    
    return (
    <>
    <h1>{dataFromChild}</h1>
    
    <table>
       
        <thead>
            {tableInstance.getHeaderGroups().map((headerEl) => {
            return (
                <>
                <button onClick={handleReset}>Löschen</button>
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
                                            reset={handleReset}
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

