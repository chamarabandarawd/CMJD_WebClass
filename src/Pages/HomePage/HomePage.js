import React, { useState } from 'react';



export default function HomePage() {
  const [email, setEmail] = useState("");
  const [data, setData] = useState([]);

  const getData = async () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((json) => setData(json));
  }

  return (
    <div>
      <input value={email} onChange={(e) => {
        setEmail(e.target.value);
        console.log(email);
      }} placeholder="Email" />

      <button onClick={getData}>Get data</button>

      {
        data.map(data=>{
          return(
            <div className='card'>
              <h2>{data.title}</h2>
              <p>{data.body}</p>
            </div>
          )
        })
      }
    </div>
  )
}
