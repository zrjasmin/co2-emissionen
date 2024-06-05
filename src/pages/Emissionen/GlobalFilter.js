import React from "react";

const GlobalFilter = ({column})=> {
    const {filterValue, setFilter} = column;
    return (
        <input type="text" value={filterValue||""} onChange={e => setFilter(e.target.value)} />
    )
};

export default GlobalFilter