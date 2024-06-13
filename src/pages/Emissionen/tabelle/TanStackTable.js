import React, {useMemo} from "react";
import { flexRender, useReactTable, getCoreRowModel } from '@tanstack/react-table'
import {columnDef} from "./colums"
import DATA from "../../../data/emissionen/Länder2.json"

const StackTable = () => {
    const columns = React.useMemo(() => columnDef);
    const data = React.useMemo(()=> DATA)

    const tableInstance = useReactTable({ 
        columns: columns,
        data: data,
        getCoreRowModel: getCoreRowModel()});

    console.log(tableInstance.getHeaderGroups())
    return (
        <table>
            <thead>
               {tableInstance.getHeaderGroups().map((header) => {
                return (
                    <tr key={header.id}>
                        {header.headers.map((column) => {
                            return (
                                <th key={column.id} colSpan={column.colSpan}>
                                    {flexRender(
                                        column.column.columnDef.header,
                                        column.getContext()
                                    )}
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
    )
}

export default StackTable;