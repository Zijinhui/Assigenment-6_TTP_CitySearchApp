import "./style.css";
import { useEffect, useState } from 'react'
import React from 'react'
import "./style.css"


export default function App() {

  const [items, setItems] = useState([])
  const [city, setCity] = useState("")
  let cityUppercase = city.toUpperCase()

useEffect(() => {
  console.log(`http://ctp-zip-api.herokuapp.com/city/${cityUppercase}`)
  fetch(`http://ctp-zip-api.herokuapp.com/city/${cityUppercase}`)
    .then(res =>{
              if (!res.ok) {
                throw Error("error text")
              }
              return res.json()
    }) 
    .then(rows => {
      setItems(rows)
    }).catch((error) => {
      console.log("Invalid City Name")
    })

}, [city]) // Only render the values in [city] this list

/*const displayCity = items.map(item => {
  //console.log(item)
  <p>Zip Code: {item} </p>
})*/
  
const handleSubmit = (event) => {
  event.preventDefault()
  setCity(event.target.city.value)
  //alert(`The city you enter: ${city}`)
}

  return (
  <div>
<<<<<<< HEAD
      <nav>
        <div className ="logo"> <h3>Zip Code Search</h3></div>
        <ul className="bar">
        <li>Showing Locations</li>
        </ul>
        </nav>
    <form onSubmit={handleSubmit}>
      <label>Enter the city:
=======
    <nav>
      <div className="logo">
          <h3>City Search App</h3>
      </div>
      <ul className="bar">
        <li>Showing Zip Codes</li>
      </ul>
    </nav>
      
    <div className="searchBar">City:
      
      <form onSubmit={handleSubmit}>
      
>>>>>>> 3a3b098244b6a894b07f8382b3b5412666dd0544
          <input type="text"
                  name="city"
                  palceholder="city"
                  onChange={(e) => setCity(e.target.value)} 
          />
    
          <button>Submit</button>
  
      </form>
      </div>
      <div>
  <ul>
        {items.map(item => (
          <li>
            Zipcode: {item}
          </li>
        ))}
        
    </ul>
  

    </div>
  </div>
  )}





