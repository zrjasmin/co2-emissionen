import { defaultColumn } from "react-table";

export const columnDef = [
    {
        id: "0",
        header: "Id",
        accessorKey: "id",
        
    },

    {
        id: "1",
        header: "Name",
        accessorKey:   "name",
         filterVariant: "text",
    },
    {
        id: "2",
        header: "Typ",
        accessorKey:   "typ",
        filterVariant: "select-typ",
   
   
    },
    {
        id: "3",
        header: "Kontinent",
        accessorKey: "kontinent",
        filterVariant: "select-kontinent",

    },
    

    // unternehmen spezifische Attribute
    {
        id: "4",
        header: "Branche",
        accessorKey:   "branche",
        filterVariant: "select",
      
         
    }, 
    
    {
        id: "5",
        header: "Land",
        accessorKey:   "land",
     

    }, 
    {
        
        header: "Emissionswerte",
        accessorKey:   "emissionen",
        enableColumnFilter: false    
    }

]

