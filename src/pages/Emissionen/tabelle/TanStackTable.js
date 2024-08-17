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
      {tableInstance.getHeaderGroups().map((headerEl) => {
        return (
          <div className="filter">
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
            <button onClick={handleReset} className="filter__delete">
              Löschen
            </button>
          </div>
        );
      })}

      <div className="mobile-scroll">
        <table>
          <thead className="tHead">
            {tableInstance.getHeaderGroups().map((headerEl) => {
              return (
                <>
                  <tr key={headerEl.id} className="tHead__row">
                    {headerEl.headers.map((columnEl) => {
                      return (
                        <>
                          <td
                            className="tHead__column"
                            key={columnEl.id}
                            colSpan={columnEl.colSpan}
                          >
                            {columnEl.isPlaceholder ? null : (
                              <>
                                <p
                                  className="tHead__text"
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
                          </td>
                        </>
                      );
                    })}
                  </tr>
                </>
              );
            })}
          </thead>
          <tbody className="tBody">
            {tableInstance.getRowModel().rows.map((rowItem, index) => {
              return (
                <>
                  {rowItem.getValue(2) === "Unternehmen" ? (
                    <tr
                      key={index}
                      className="collapsible tBody__row"
                      onClick={() => handelToggle(rowItem, index)}
                    >
                      {rowItem.getVisibleCells().map((cellItem) => {
                        return (
                          <>
                            <td className="tBody__data">
                              {flexRender(
                                cellItem.column.columnDef.cell,
                                cellItem.getContext()
                              )}
                            </td>
                          </>
                        );
                      })}
                    </tr>
                  ) : (
                    <tr key={index} className="tBody__row">
                      {rowItem.getVisibleCells().map((cellItem) => {
                        return (
                          <td className="tBody__data">
                            {flexRender(
                              cellItem.column.columnDef.cell,
                              cellItem.getContext()
                            )}
                          </td>
                        );
                      })}
                    </tr>
                  )}

                  {/* company details */}
                  {rowItem.getValue(2) === "Unternehmen" ? (
                    <>
                      {openRows.includes(rowItem.getValue(0) - 1) ? (
                        <tr
                          key={rowItem.getValue(0)}
                          className="subRow tBody__subrow"
                        >
                          <p>{rowItem.getValue(4)}</p>
                          <p>{rowItem.getValue(5)}</p>
                        </tr>
                      ) : null}
                    </>
                  ) : null}
                </>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="pagination">
        <span className="pagination__pageInfo">
          <p>
            Page {tableInstance.getState().pagination.pageIndex + 1} of{" "}
            {tableInstance.getPageCount().toLocaleString()}
          </p>
        </span>
        <div className="pagination__btnContainer">
          <button
            onClick={() => tableInstance.firstPage()}
            disabled={!tableInstance.getCanPreviousPage()}
            className="pagination__btn"
          >
            {"<<"}
          </button>
          <button
            onClick={() => tableInstance.previousPage()}
            disabled={!tableInstance.getCanPreviousPage()}
            className="pagination__btn"
          >
            {"<"}
          </button>
          <button
            onClick={() => tableInstance.nextPage()}
            disabled={!tableInstance.getCanNextPage()}
            className="pagination__btn"
          >
            {">"}
          </button>

          <button
            onClick={() => tableInstance.lastPage()}
            disabled={!tableInstance.getCanNextPage()}
            className="pagination__btn"
          >
            {">>"}
          </button>
        </div>
      </div>
    </>
  );
};

export default StackTable;
