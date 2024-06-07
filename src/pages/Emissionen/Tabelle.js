import React, {useEffect, useState} from "react";
import {useGlobalFilter, useFilters} from "react-table";
import dataLaender from "../../data/emissionen/Länder.json"


const Tabelle = () => {  
    const data = dataLaender.table
    const categories = ["Alle", "Unternehmen", "Land"]
    let input = document.getElementsByClassName("searchInput")

    const [filteredData, setFilteredData] = useState(data)
    const [search, setSearch] = useState("");
    const [searchValue, setSearchValue] = useState("")

    const [category, setCategory] = useState("Alle")
    const [categoryValue, setCategoryValue] = useState("")
   

    const handleFilterChange = (e)=> {
        filterTextIput(e);
        filteringCategories(e);

        let updateList = [...data];
        updateList = updateList.filter((itemList) => {
            return itemList.typ.toLowerCase().includes(categoryValue) &&
            itemList.name.toLowerCase().includes(search.toLowerCase())});
        setFilteredData(updateList);
    }


    const filterTextIput = (e) => {
        let input = e.target.value;


        
        let updatedList = [...data];
        updatedList = updatedList.filter((itemList) =>  {
                return itemList.branche.toLowerCase().includes(input.toLowerCase()) ||
                itemList.name.toLowerCase().includes(input.toLowerCase()) ||
                itemList.land.toLowerCase().includes(input.toLowerCase()) 

        });
        setSearchValue(updatedList);
        console.log("menge an search results" + searchValue)
    }

    

    const filteringCategories = (e) => {
        let query = e.target.value;
        let updatedList = [...data];

        updatedList = updatedList.filter((itemList) =>  {
            return itemList.typ.toLowerCase().includes(query.toLowerCase());
        })
        if(query === "Alle") {
            updatedList = [...data];
        }
        
        //Data filterd with categories
        setCategoryValue(updatedList);
    
    }

    
   
    const searchInput = (e) => {
        setSearch(e.target.value)
    }

    const deleteFilters = () => {
        console.log("delete");
        let currentItems = [...data];
        setFilteredData(currentItems);
        setSearch("");

    }

    return(
        <div className="table-container">
            <div className="settings">
                <input className="serachInput" type="text" placeholder="Suche..."  onChange={handleFilterChange}/>

                <select name="categories" placeholder="Kategorie"  onChange={handleFilterChange}>
                    {categories.map((c) => (
                        <option  value={c}>{c}</option>
                    ))}
                </select>

                <span onClick={deleteFilters}>Delete</span>
            </div>

            <table >
                <tr key="">
                    <th>Name</th>
                    <th>Branche</th>
                    <th>Land</th>
                    <th>Typ</th>
                    <th>Emissionswerte</th>
                </tr>

                 
                {filteredData.map((item) => (
                <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>{item.branche}</td>
                     <td>{item.land}</td>
                     <td>{item.typ}</td>
                    <td>{item.emissionen}</td>
                 </tr>
                    ))}
            

            </table>
        </div>
    )
}

export default Tabelle;