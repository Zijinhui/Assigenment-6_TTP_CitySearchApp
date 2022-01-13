<<<<<<< HEAD
import Navbar from "./script";
import React, { useEffect, useState } from "react";
import "./style.css";

export default function App() {
	
	const [isLoaded, setIsLoaded] = useState(false);
  	const [items, setItems] = useState([]);

	useEffect(() => {
 
  }, []);

 let  getData = (val) =>{
   
	if (val.length==10){



	fetch(`http://ctp-zip-api.herokuapp.com/city/${val}`)
    .then(res => {
		if (!res.ok) {
			throw Error("error text")
		}
		return res.json()
	})
    .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
          
        },
      ).catch((error)=> {
		  console.log(error.message)
	  })

	}
}
return (

	<div>
        <Navbar getData={getData}/> 

        <ul>
				{items.map(item => (
       		<li key={item.RecordName} className="list"> 
        		State: {item.State} <br/>
        		City: {item.City} <br/>
        		Location:{item.Location} <br/>
        		Population (Estimated): {item.EstimatedPopulation} <br/>
        		Total Wages: {item.TotalWages}
        	</li>
        ))}
      </ul>
	</div>
		);
}

=======
import './App.css';
import { useEffect, useState } from 'react'
import React from 'react'

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
    <nav>Nav Bar</nav>
       
    <form onSubmit={handleSubmit}>
      <label>Enter the city:
          <input type="text"
                  name="city"
                  palceholder="city"
                  //onChange={(e) => setCity(e.target.value)} 
          />
      </label>
      <button>Submit</button>
  
    </form>

    <h2>Result:</h2>

    <ul>
        {items.map(item => (
          <li>
            Zipcode: {item}
          </li>
        ))}
        
    </ul>
  

  </div>
  )}



export default  App;
>>>>>>> 90f23696fa5fc1949c0d22fa5c4d5e661729cd9b
