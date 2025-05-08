import TableRow from "./components/TableRow";
import NavBar from "./components/NavBar";
import opcodes from "./data/opcodes"
import { useState } from "react"
import Card from "./components/Card"
import TableView from "./TableView";
import GridView from "./GridView";
import Footer from "./components/Footer";

function App() {

  const [listType, setListType] = useState(0);
  const [searchParameter, setSearchParameter] = useState("")
  const search = (data) => {
    setSearchParameter(prev => data.target.value);
    console.log(searchParameter)
  }

  const type = (data) =>{
    setListType(data)
  }

  const opcode = opcodes.map(data => {
    switch(listType){
      case 0:
        if (searchParameter == "") {
          return <TableRow opcode={data.opcode} mnemonics={data.mnemonic} description={data.description} />
        } else {
          if (data.opcode.includes(searchParameter.toUpperCase()) || data.mnemonic.includes(searchParameter.toUpperCase())) {
            return <><TableRow opcode={data.opcode} mnemonics={data.mnemonic} description={data.description} /></>
          }
        }
        break;
      default:
        if (searchParameter == "") {
          return <Card mnemonics={data.mnemonic} opcode={data.opcode} description={data.description} byte={data.bytes + "bytes"} flags={data.flags} view={listType}/>
        } else {
          if (data.opcode.includes(searchParameter.toUpperCase()) || data.mnemonic.includes(searchParameter.toUpperCase())) {
            return  <Card mnemonics={data.mnemonic} opcode={data.opcode} description={data.description} byte={data.bytes + "bytes"} flags={data.flags} view={listType}/>
          }
        }
        break;
    }
  })

  return (
    <>
    <div className="text-sm">
    <NavBar />

<div className="flex justify-center mt-7">
<input type="text" onChange={search} className="border-2 border-black text-center p-1.5 w-3xl rounded-md" placeholder="Enter opcode or mnemonics"/> <br />
</div>

<div className="flex justify-between mx-22 my-3">
  { listType == 0? <div></div> : <div>
    <select name="" id="">
      <option>10 items</option>
      <option>20 items</option>
      <option>30 items</option>
    </select>
  </div>}

  <div>
    <button className="p-0.5 w-16 border-2 border-black border-r-0 rounded-tl-3xl rounded-bl-3xl " onClick={() => type(0)}>Table </button>
    <button className="p-0.5 w-16 border-2 border-black border-r-0" onClick={() => type(1)}>Grid </button>
    <button className="p-0.5 w-16 border-2 border-black rounded-tr-3xl rounded-br-3xl" onClick={() => type(2)}>List </button>
  </div>

</div>
<div className="flex justify-center items-center p-5">
{
  listType == 0 ? <TableView opcode={opcode} /> : <GridView opcode={opcode} view={listType} />
}

</div>
    </div>
    <Footer />
    </>
  )
}

export default App
