import styles from "./Search.module.css";
import { FaSearch } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "../hooks/useQuery";


export function Search() {
    const query = useQuery();
    const search = query.get("search");

    const [searchText, setSearchText] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        setSearchText(search || "");
    },[search]);

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/?search=" + searchText);
    };

    return (
        <form className={styles.searchContainer} onSubmit={handleSubmit}>
            <div className={styles.searchBox}>
                <input className={styles.searchInput} 
                    type="text" 
                    value={search} 
                    placeholder="Title"
                    aria-label="Search Movies"
                    onChange={(e) => {
                        const value = e.target.value;
                         setSearchText(value)
                         navigate("/?search=" + value);
                    }}
                />                
                <FaSearch className={styles.searchButon} color="#000" size={20} />                
            </div>
        </form>
    )
}