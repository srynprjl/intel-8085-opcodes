import opcodes from "./data/opcodes"
import {useState} from "react"





function App() {

  const [searchParameter, setSearchParameter] = useState("")

const search = (data) => {
  setSearchParameter(prev => data.target.value);
  console.log(searchParameter)
}
const opcode = opcodes.map(data =>{
  if(searchParameter == ""){
    return <>{data.opcode} : {data.mnemonic} <br /></>
  } else {
    if(searchParameter == data.opcode || searchParameter == data.mnemonic){
      return <>{data.opcode} : {data.mnemonic} <br /></>
    }
  } 
  
})

  return (
    <>  
      <input type="text" onChange={search} /> <br />

      {opcode}
    </>
  )
}

export default App
