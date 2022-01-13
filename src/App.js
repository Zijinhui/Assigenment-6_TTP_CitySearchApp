import './App.css';
import { useEffect, useState } from 'react'
import React from 'react'
import "./style.css"

function App() {

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
      
          <input type="text"
                  name="city"
                  palceholder="city"
                  //onChange={(e) => setCity(e.target.value)} 
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



export default  App;
