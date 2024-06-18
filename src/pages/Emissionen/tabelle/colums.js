export const columnDef = [
    {
        header: "Name",
        accessorKey:   "name",
         filterVariant: "number"
       
    },
    {
     
        header: "Typ",
        accessorKey:   "typ",
        filterVariant: "select"
    },
    {
      
        header: "Branche",
        accessorKey:   "branche",
         filterVariant: "text"
    }, 
    {
        
        header: "Land",
        accessorKey:   "land",
        enableColumnFilter: false
    }, 
    {
        
        header: "Emissionswerte",
        accessorKey:   "emissionen",
         filterVariant: "text"
    }

]