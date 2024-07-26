import React, { useEffect } from "react";
import DebouncedInput from "./DebouncedInput";
import { columnDef } from "./colums";
import { use } from "i18next";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { FormControl, FormLabel, InputLabel, Select } from "@mui/material";

function FilterFunction({ column, reset }) {
  console.log(column);
  const filterVariant = column.columnDef.filterVariant;

  const columnFilterValue = column.getFilterValue();

  const sortedUniqueValues = React.useMemo(
    () =>
      filterVariant === "number"
        ? []
        : Array.from(column.getFacetedUniqueValues().keys()).sort(),
    [column.getFacetedUniqueValues()]
  );

  return (
    <>
      {filterVariant === "select-typ" ? (
        <div className="filter__container_typ">
          <label id="typ-select">Typ</label>
          <select
            defaultValue={"Alle"}
            id="typ-select"
            label="Typ"
            onChange={(e) => {
              e.target.value === "Alle"
                ? column.setFilterValue("")
                : column.setFilterValue(e.target.value);
            }}
            value={columnFilterValue}
          >
            <option value="Alle">Alle</option>
            <option value="land">Land</option>
            <option value="unternehmen">Unternehmen</option>
          </select>
        </div>
      ) : filterVariant === "select-kontinent" ? (
        <div className="filter__container_kontinent">
          <label id="kontinent-select">Kontinent</label>

          <select
            label="Kontinent"
            id="kontinent-select"
            defaultValue={"Alle"}
            onChange={(e) => {
              e.target.value === "Alle"
                ? column.setFilterValue("")
                : column.setFilterValue(e.target.value);
            }}
            value={columnFilterValue}
          >
            <option value="Alle">Alle</option>
            <option value="Europa">Europa</option>
            <option value="Afrika">Afrika</option>
            <option value="Amerika">Amerika</option>
            <option value="Asien">Asien</option>
            <option value="Australien">Australien</option>
            <option value="Antarktika">Antarktika</option>
          </select>
        </div>
      ) : (
        <>
          <datalist id={column.id + "list"}>
            {sortedUniqueValues.slice(0, 5000).map((value) => (
              <option value={value} key={value} />
            ))}
          </datalist>
          <div className="filter__container_text">
            <label id="textInput">Suche nach Unternehmen/Land</label>
            <DebouncedInput
              id="textInput"
              type="text"
              value={columnFilterValue ?? ""}
              onChange={(value) => column.setFilterValue(value)}
              placeholder={`Suche... `}
              list={column.id + "list"}
            />
          </div>
        </>
      )}
    </>
  );
}

export default FilterFunction;
