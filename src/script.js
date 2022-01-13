<<<<<<< HEAD


import { useState } from "react";
import "./style.css";

export default function Navbar({getData}) {
 const [zip, setZip] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setZip(event.target.city.value)
    getData(zip)

  }
  
    return ( 
        <div>
    <nav>
        <div className ="logo"> <h3>Zip Code Search</h3></div>
        <ul className="bar">
        <li>Showing Locations</li>
        </ul>
    </nav>

     <div className="searchBar">City Search:
     <form onSubmit={handleSubmit}>
    
    <input  
          type="text" 
          name="City"
          placeholder="Enter City"
          className="input"
        //   onChange={handleSubmit}
        />
    <button >submit</button>
     </form>
     </div>
        </div> 
    )
}
=======
import { useState } from 'react'

export default function GetCity({}) {
    const [city, setCity] = useState("")
  
    return (
        <div>
          <nav>Nav Bar</nav>
             
          <form>
            <label>Enter the city:
                <input type="text"
                        value={city}
                        onChange={(e) => setCity(e.target.value)} />
  
            </label>
          </form>
  
        </div>
       
    )
  }
>>>>>>> 90f23696fa5fc1949c0d22fa5c4d5e661729cd9b
