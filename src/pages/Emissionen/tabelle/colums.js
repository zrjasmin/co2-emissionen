import { isSubRowSelected } from "@tanstack/react-table"

export const columnDef = [
    {   
        id: "expander",
        accessorKey: "unternehmen-infos",
        cell: ({row}) => {
          // console.log(row)
            return row.getCanExpand ? (
                <button
                  onClick={row.getToggleExpandedHandler()}
                  style={{ cursor: 'pointer' }}
                >
                  {row.isExpanded ? '👇' : '👉'}
                </button>
              ) : (
                '🔵'
              )
        }
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
        filterVariant: "select-typ"
    },
    {
        id: "3",
        header: "Kontinent",
        accessorKey: "kontinent",
        filterVariant: "select-kontinent"
    },
    

    // unternehmen spezifische Attribute
    {
        id: "4",
        header: "Branche",
        accessorKey:   "subRows",
         filterVariant: "select",
         
    }, 
    
    {
        id: "5",
        header: "Land",
        accessorKey:   "land",
        enableColumnFilter: false    

    }, 
    {
        
        header: "Emissionswerte",
        accessorKey:   "emissionen",
        enableColumnFilter: false    
    }

]

