import React from "react";
import {
  flexRender,
  useReactTable,
  getCoreRowModel,
  getFacetedRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  _getVisibleLeafColumns,
  getPaginationRowModel,
} from "@tanstack/react-table";
import { columnDef } from "./colums";
import DATA from "../../../data/emissionen/Länder2.json";
import FilterFunction from "./FilterFunction";
import {
  TableHead,
  TableRow,
  Table,
  TableCell,
  TableBody,
  Button,
} from "@mui/material";

const StackTable = () => {
  // Definition of columns and data
  const columns = React.useMemo(() => columnDef);
  const data = React.useMemo(() => DATA, []);

  // filtering und sorting
  const [columnFilter, setColumFilter] = React.useState();
  const [sorting, setSorting] = React.useState([]);

  // toggle for hididng/showing details
  const [openRows, setOpenRows] = React.useState([]);

  function handelToggle({ row, index }) {
    console.log(openRows);
    // adding active row to array
    if (openRows != index) {
      setOpenRows([...openRows, index]);
    }

    // deleting active row from array
    if (openRows.includes(index)) {
      setOpenRows(openRows.filter((element) => element !== index));
    }
  }

  const [currentColumn, setCurrentColumn] = React.useState([]);

  function handleColumn(column) {
    setCurrentColumn(column);
    console.log("active column");
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
        0: false,
        4: false,
        5: false,
      },
    },
    defaultColumn: {
      columnFilters: [""],
    },
    onColumnFiltersChange: setColumFilter,
    onSortingChange: setSorting,
    getFacetedRowModel: getFacetedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  function handleReset() {
    tableInstance.resetColumnFilters();
    tableInstance.resetSorting();
    tableInstance.getPreFilteredRowModel();
  }

  return (
    <>
      <div>
        {tableInstance.getHeaderGroups().map((headerEl) => {
          return (
            <div>
              {headerEl.headers.map((columnEl) => {
                return (
                  <>
                    {columnEl.column.getCanFilter() ? (
                      <>
                        <FilterFunction
                          column={columnEl.column}
                          reset={handleReset}
                        />
                      </>
                    ) : null}
                  </>
                );
              })}
              <button onClick={handleReset}>Löschen</button>
            </div>
          );
        })}
      </div>

      <Table>
        <TableHead stickyHeader>
          {tableInstance.getHeaderGroups().map((headerEl) => {
            return (
              <>
                <TableRow key={headerEl.id}>
                  {headerEl.headers.map((columnEl) => {
                    return (
                      <>
                        <TableCell key={columnEl.id} colSpan={columnEl.colSpan}>
                          {columnEl.isPlaceholder ? null : (
                            <>
                              <p
                                className="header-text"
                                onClick={columnEl.column.getToggleSortingHandler()}
                              >
                                {flexRender(
                                  columnEl.column.columnDef.header,
                                  columnEl.getContext()
                                )}
                                {
                                  { asc: " 🔼", desc: " 🔽" }[
                                    columnEl.column.getIsSorted() ?? null
                                  ]
                                }
                              </p>
                            </>
                          )}
                        </TableCell>
                      </>
                    );
                  })}
                </TableRow>
              </>
            );
          })}
        </TableHead>
        <TableBody>
          {tableInstance.getRowModel().rows.map((rowItem, index) => {
            return (
              <>
                {rowItem.getValue(2) === "Unternehmen" ? (
                  <TableRow
                    key={index}
                    className="collapsible"
                    onClick={() => handelToggle(rowItem, index)}
                  >
                    {rowItem.getVisibleCells().map((cellItem) => {
                      return (
                        <>
                          <TableCell>
                            {flexRender(
                              cellItem.column.columnDef.cell,
                              cellItem.getContext()
                            )}
                          </TableCell>
                        </>
                      );
                    })}
                  </TableRow>
                ) : (
                  <TableRow key={index}>
                    {rowItem.getVisibleCells().map((cellItem) => {
                      return (
                        <TableCell>
                          {flexRender(
                            cellItem.column.columnDef.cell,
                            cellItem.getContext()
                          )}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                )}

                {/* company details */}
                {rowItem.getValue(2) === "Unternehmen" ? (
                  <div className="subRow">
                    {openRows.includes(rowItem.getValue(0) - 1) ? (
                      <td key={rowItem.getValue(0)}>
                        <p>{rowItem.getValue(4)}</p>
                        <p>{rowItem.getValue(5)}</p>
                      </td>
                    ) : null}
                  </div>
                ) : null}
              </>
            );
          })}
        </TableBody>
      </Table>
      <div>
        <button
          onClick={() => tableInstance.firstPage()}
          disabled={!tableInstance.getCanPreviousPage()}
        >
          First Page
        </button>
        <button
          onClick={() => tableInstance.previousPage()}
          disabled={!tableInstance.getCanPreviousPage()}
        >
          Previous Page
        </button>
        <button
          onClick={() => tableInstance.nextPage()}
          disabled={!tableInstance.getCanNextPage()}
        >
          Next Page
        </button>

        <button
          onClick={() => tableInstance.lastPage()}
          disabled={!tableInstance.getCanNextPage()}
        >
          Last Page
        </button>
      </div>
      <span>
        <p>Page</p>
        <p>
          {tableInstance.getState().pagination.pageIndex + 1} of{" "}
          {tableInstance.getPageCount().toLocaleString()}
          {/* {(tableInstance.getState().pagination.pageIndex + 1) = (tableInstance.getPageCount().toLocaleString()) ? "last page": "not last page"} */}
          {}
        </p>
      </span>
    </>
  );
};

export default StackTable;
