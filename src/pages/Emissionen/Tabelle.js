import React, {useEffect, useState} from "react";
import {useGlobalFilter, useFilters} from "react-table";
import dataLaender from "../../data/emissionen/Länder.json"
import GlobalFilter from "./GlobalFilter";


const Tabelle = () => {  
    const data = dataLaender.table
    const categories = ["Alle", "Unternehmen", "Land"]
    let input = document.getElementsByClassName("searchInput")

    const [filteredData, setFilteredData] = useState(data)
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("Alle")
  
    const [filters, setFilters] = useState({
        name: "",
        land: "",
        branche: ""
    })


    const handleFilterChange = (e)=> {
        const {name, value} = e.target;
        setFilters((prevFilters) => ({
            ...prevFilters,
            [name]: value,
        }))}


    const filterTextIput = (e) => {
        let input = e.target.value;
        if(input != "Untenehmen" || input != "Alle" || input != "Land") {
            setSearch(input);
        }

        
        let updatedList = [...data];
        updatedList = updatedList.filter((itemList) =>  {
                return itemList.branche.toLowerCase().includes(input.toLowerCase()) ||
                itemList.name.toLowerCase().includes(input.toLowerCase()) ||
                itemList.land.toLowerCase().includes(input.toLowerCase()) 

        });

        // if(categoryData) {
        //     updatedList = updatedList.filter((itemList) => {
        //         return itemList.toLowerCase().includes(categoryData.toLowerCase())
        //     })
            
        // }
        setFilteredData(updatedList);
    }

    

    const filteringCategories = (e) => {
        let query = e.target.value;
        let updatedList = [...data];

        updatedList = updatedList.filter((itemList) =>  {
            return itemList.branche.toLowerCase().includes(query.toLowerCase());
        })
        if(query === "Alle") {
            updatedList = [...data];
        }
        
        //Data filterd with categories
        setFilteredData(updatedList);
    
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
                    <th {column.render("Filter")}>Name</th>
                    <th>Typ</th>
                    <th>2020</th>
                    <th>2021</th>
                    <th>2022</th>
                </tr>

                 
                {filteredData.map((item) => (
                <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>{item.branche}</td>
                     <td>{item.land}</td>
                    <td>{item.emissionen}</td>
                 </tr>
                    ))}
            

            </table>
        </div>
    )
}

export default Tabelle;