import React from "react";
import DebouncedInput from "./DebounceFunction";

function Filter({ column, table }) {
  const firstValue = table
    .getPreFilteredRowModel()
    .flatRows[0]?.getValue(column.id);

  const columnFilterValue = column.getFilterValue();

  const sortedUniqueValues = React.useMemo(
    () =>
      typeof firstValue === "number"
        ? []
        : Array.from(column.getFacetedUniqueValues().keys()).sort(),
    [column.getFacetedUniqueValues()]
  );

  return typeof firstValue === "number" ? (
    <div>
      <div>
        <DebouncedInput
          type="number"
          min={Number(column.getFacetedMinMaxValues()?.[0] ?? "")}
          max={Number(column.getFacetedMinMaxValues()?.[1] ?? "")}
          value={columnFilterValue?.[0] ?? ""}
          onChange={(value) =>
            column.setFilterValue((old) => [value, old?.[1]])
          }
          placeholder="min"
        />
        <DebouncedInput
          type="number"
          min={Number(column.getFacetedMinMaxValues()?.[0] ?? "")}
          max={Number(column.getFacetedMinMaxValues()?.[1] ?? "")}
          value={columnFilterValue?.[1] ?? ""}
          onChange={(value) =>
            column.setFilterValue((old) => [old?.[0], value])
          }
          placeholder="max"
        />
      </div>
    </div>
  ) : typeof firstValue === 'select' ? (
    <select
      onChange={e => column.setFilterValue(e.target.value)}
      value={columnFilterValue?.toString()}
    >
      <option value="">All</option>
      {sortedUniqueValues.map(value => (
        //dynamically generated select options from faceted values feature
        <option value={value} key={value}>
          {value}
        </option>
      ))}
    </select>
  ) 
   : (
    <>
      <datalist id={column.id + "list"}>
        {sortedUniqueValues.slice(0, 5000).map((value) => (
          <option value={value} key={value} />
        ))}
      </datalist>
      <DebouncedInput
        type="text"
        value={columnFilterValue ?? ""}
        onChange={(value) => column.setFilterValue(value)}
        placeholder={`Search... `}
        list={column.id + "list"}
      />
    </>
  );
}

export default Filter;