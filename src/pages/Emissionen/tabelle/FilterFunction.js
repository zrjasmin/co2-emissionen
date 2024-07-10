import React, { useEffect } from "react";
import DebouncedInput from "./DebouncedInput";
import { columnDef } from "./colums";
import { use } from "i18next";
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { FormControl, FormLabel, InputLabel, Select } from "@mui/material";





function FilterFunction({ column, reset}) {

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
      <>
    <FormControl fullWidth> 
        <InputLabel id="typ-select" >Typ</InputLabel>
        <Select 
            defaultValue={"Alle"}
            id="typ-select" 
            label="Typ"
            onChange={e => {e.target.value === "Alle" ? column.setFilterValue("") : column.setFilterValue(e.target.value)}}
            value={columnFilterValue} 
        >
            <MenuItem  value="Alle" >Alle</MenuItem >
            <MenuItem  value="land">Land</MenuItem >
            <MenuItem  value="unternehmen">Unternehmen</MenuItem >
        </Select> 
    </FormControl>
    </>
    

    ) : filterVariant === "select-kontinent"?(
      <>
      <FormControl fullWidth>
        <InputLabel id="kontinent-select">Kontinent</InputLabel>

        <Select
        label="Kontinent"
        id="kontinent-select"
        defaultValue={"Alle"}
        onChange={e => {e.target.value === "Alle" ? column.setFilterValue("") : column.setFilterValue(e.target.value)}}        
        value={columnFilterValue} 
      >

        <MenuItem value="Alle">Alle</MenuItem>
        <MenuItem value="Europa" >Europa</MenuItem>
        <MenuItem value="Afrika">Afrika</MenuItem>
        <MenuItem value="Amerika">Amerika</MenuItem>
        <MenuItem value="Asien">Asien</MenuItem>
        <MenuItem value="Australien">Australien</MenuItem>
        <MenuItem value="Antarktika">Antarktika</MenuItem>
    </Select>
    </FormControl>
    </>
      
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
  )}
  
  </>
  )
   
  
}

export default FilterFunction;