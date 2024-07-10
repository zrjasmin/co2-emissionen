import React, {useMemo, useRef, useState, Component, useEffect} from "react";
import { 
    flexRender, 
    useReactTable, 
    getCoreRowModel,
    getFacetedRowModel,
    getSortedRowModel,
    getFilteredRowModel,
    _getVisibleLeafColumns,
    getPaginationRowModel 
    
    } from '@tanstack/react-table'
import {columnDef} from "./colums"
import DATA from "../../../data/emissionen/Länder2.json"
import FilterFunction from "./FilterFunction"
import { TableHead, TableRow, Table, TableCell, TableBody, Button } from "@mui/material";
import "./table.css"






const StackTable = () => {
    const columns = React.useMemo(() => columnDef);
    const data = React.useMemo(()=> DATA, []);
    
    const [columnFilter, setColumFilter] = React.useState()
   
    const [dataFromChild, setDataFromChild] = React.useState()
    const [openRows, setOpenRows] = React.useState([])    

    function handelToggle({row, index}) {        
        console.log(openRows)
        // adding to array
        if(openRows != index) {
            setOpenRows([...openRows, index])         
        } 
       
        // deleting from array
        if(openRows.includes(index)) {
            setOpenRows(openRows.filter(element => element !== index))
         
        }
    }


    const [sorting, setSorting] = React.useState([])

    const [collapse, setCollapse] = React.useState({})

   

    function toggleCollaps(rowId) {
       console.log(rowId)
       
       
        if(collapse === "open") {
            
            setCollapse("close")
        } else {
            setCollapse("open")
        }
    }
    

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
                5: false,
                
            },
            
        },   
        defaultColumn: {
            columnFilters: [""]
        }, 
        onColumnFiltersChange: setColumFilter,
        onSortingChange: setSorting,
        getFacetedRowModel: getFacetedRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        
    
    });
    
    function handleReset ()  {
        tableInstance.resetColumnFilters();
        tableInstance.resetSorting()
        tableInstance.getPreFilteredRowModel();
        setDataFromChild("")
        
    }
    
    return (
    <>   
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
                             <td key={columnEl.id} colSpan={columnEl.colSpan} >
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
                                    {{asc: " 🔼", desc: " 🔽"} [
                                        columnEl.column.getIsSorted() ?? null
                                    ]}
                                   </td>
                            
                                    
                                    
                                    </>
                                )}
                            </td>
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
                    {rowItem.getValue(2) === "Unternehmen" ? (
                        <tr key={index} className="collapsible" onClick={() => handelToggle(rowItem, index)}>
                            {rowItem.getVisibleCells().map(cellItem => {
                                return (
                                    <>
                                    
                                    <td>
                                        {flexRender(
                                        cellItem.column.columnDef.cell,
                                        cellItem.getContext()
                                        )}
                                    </td>
                                    </>
                                )
                            })}
                            
                        </tr>
                    ): (
                        <tr key={index}>
                            {rowItem.getVisibleCells().map(cellItem => {
                                return (
                                    <td>
                                        {flexRender(
                                        cellItem.column.columnDef.cell,
                                        cellItem.getContext()
                                        )}
                                    </td>
                                )
                            })}
                        </tr>
                    )
                    }


                        {rowItem.getValue(4) === "Unternehmen" ? (
                        <div className="subRow">
                            {openRows.includes(index) ? (
                                   <td key={index} >
                                   <p>{rowItem.getValue(4)}</p>
                                   <p>{rowItem.getValue(5)}</p>
                               </td>
                            ): null}



                     
                        </div>
                        ): null}
                    </>
                )
            })}
        </tbody>
    </table>
    {/* <div>
        <button onClick={() => tableInstance.firstPage()} disabled={!tableInstance.getCanPreviousPage()}>First Page</button>
        <button onClick={() => tableInstance.previousPage()} disabled={!tableInstance.getCanPreviousPage()}>Previous Page</button>
        <button onClick={() => tableInstance.nextPage()} disabled={!tableInstance.getCanNextPage()}>Next Page</button>

        <button onClick={() => tableInstance.lastPage()} disabled={!tableInstance.getCanNextPage()}>Last Page</button>

    </div>
    <span>
        <p>Page</p>
        <p>
            {tableInstance.getState().pagination.pageIndex + 1} of{" "}
            {tableInstance.getPageCount().toLocaleString()}

            {(tableInstance.getState().pagination.pageIndex + 1) = (tableInstance.getPageCount().toLocaleString()) ? "last page": "not last page"}

            {}

        </p>
    </span> */}
    
    </>
    )
}



export default StackTable;

