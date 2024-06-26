import React from "react";
import DebouncedInput from "./DebouncedInput";
import { columnDef } from "./colums";


function FilterFunction({ column, table }) {
  const filterVariant = column.columnDef.filterVariant;
  const columnFilterValue = column.getFilterValue();

  const inputLable = 
  
  console.log(columnFilterValue)


  const sortedUniqueValues = React.useMemo(
    () =>
       filterVariant === "number"
        ? []
        : Array.from(column.getFacetedUniqueValues().keys()).sort(),
    [column.getFacetedUniqueValues()]

  );
    return filterVariant === "number" ? (
      
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
    ) :  filterVariant === "select-typ" ? (
    <select
      onChange={e => column.setFilterValue(e.target.value)}
      value={columnFilterValue?.toString()}
    >
      <option value="">Alle</option>
      <option value="land">Land</option>
      <option value="unternehmen">Unternehmen</option>
    </select>
      

    ) : filterVariant === "select-kontinent"?(
      
      <select
      onChange={e => column.setFilterValue(e.target.value)}
      value={columnFilterValue?.toString()}
    >
      <option value="">Alle</option>
      <option value="Europa">Europa</option>
      <option value="Afrika">Afrika</option>
      <option value="Amerika">Amerika</option>
      <option value="Asien">Asien</option>
      <option value="Australien">Australien</option>
      <option value="Antarktika">Antarktika</option>
    </select>
      
    ) : (
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
        placeholder={`Suche... `}
        list={column.id + "list"}
      />
    </>
  );
   
  
}

export default FilterFunction;