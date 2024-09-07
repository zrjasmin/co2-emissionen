export const columnDef = [
  {
    id: "0",
    header: "Id",
    accessorKey: "id",
  },

  {
    id: "1",
    header: "Name",
    accessorKey: "name",
    filterVariant: "text",
  },
  {
    id: "2",
    header: "Type",
    accessorKey: "typ",
    filterVariant: "select-typ",
  },
  {
    id: "3",
    header: "Continent",
    accessorKey: "kontinent",
    filterVariant: "select-kontinent",
  },

  // unternehmen spezifische Attribute
  {
    id: "4",
    header: "Industry",
    accessorKey: "branche",
    filterVariant: "select",
  },

  {
    id: "5",
    header: "Country",
    accessorKey: "land",
  },
  {
    header: "Emissions",
    accessorKey: "emissionen",
    enableColumnFilter: false,
  },
];
