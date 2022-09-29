import React, { useEffect, useState } from 'react'
import axios from 'axios';

function Jokes() {
    //https://api.chucknorris.io/jokes/random?category=%7Bcategory%7D
    const [details, setDetails] = useState([]);
    const string = () => {
        axios.get('https:api.chucknorris.io/jokes/random?category=food')
        .then((response) => setDetails(response.data));
    }

    useEffect(() =>{
        string();
    }, []);

    console.log(details);

  return (
    <div>
        {details ? details.map((detail, index) => (<h3 key={index}>detail</h3>)) : <h3>No joke found...</h3>}
    </div>
  )
}

export default Jokes