

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
