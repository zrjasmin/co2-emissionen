import ColumnFilter from "./ColumnFilter";

export const COLUMNS = [
    {
        Header: "Name",
        accessor:   "name" ,
        Filter: ColumnFilter       
    },
    {
        Header: "Typ",
        accessor:   "typ",
        Filter: ColumnFilter  
    },
    {
        Header: "Branche",
        accessor:   "branche",
        Filter: ColumnFilter 
    }, 
    {
        Header: "Land",
        accessor:   "land",
        Filter: ColumnFilter   
    }, 
    {
        Header: "Emissionswerte",
        accessor:   "emissionen",
        Filter: ColumnFilter   
    }

]