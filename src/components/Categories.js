import React, { useState, useEffect } from "react";
import axios from "axios";
import Jokes from "./Jokes";
import { Link } from "react-router-dom";

function Categories() {
    const [categories, setCategories] = useState([]);

    const ArrayList = () => {
        return axios.get("https://api.chucknorris.io/jokes/categories")
            .then((response) => setCategories(response.data));
    }

    useEffect(() => {
        ArrayList();
    }, []);

    return (
        <div>
            <ul className='Cat-list'>
                {categories ? categories.map((category, index) => (<li key={index}><Link to='/Jokes'>{category}</Link></li>)) : <li>No details returned</li>}
            </ul>
        </div>
    );
}

export default Categories;