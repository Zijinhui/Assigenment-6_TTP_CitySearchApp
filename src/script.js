import { useState } from 'react'
import "./style.css";

export default function GetCity({}) {
    const [city, setCity] = useState("")


  
    return (
        <div>
         
             
          <form onSubmit={handleSubmit}>
            <label>Enter the city:
                <input type="text"
                        value={city}
                        onChange={(e) => setCity(e.target.value)} />
  
            </label>
             <button>Submit</button>
          </form>

  
        </div>
       
    )
  }
