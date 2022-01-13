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

