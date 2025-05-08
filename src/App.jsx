import OpCodes from "./data/opcodes"
import {useState} from "react"


const [searchParameter, setSearchParameter] = useState("")

const search = (data) => {
  setSearchParameter(prev => data.target.value);
}


function App() {
  return (
    <>  
      <input type="text" onChange={search} /> <br />
      {a}
    </>
  )
}

export default App
