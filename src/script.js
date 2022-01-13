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