import TableRow from "./components/TableRow";
import NavBar from "./components/NavBar";
import opcodes from "./data/opcodes"
import { useState } from "react"
import Card from "./components/Card"

function App() {


  const [listType, setListType] = useState(0);
  const [searchParameter, setSearchParameter] = useState("")
  const search = (data) => {
    setSearchParameter(prev => data.target.value);
    console.log(searchParameter)
  }
  const opcode = opcodes.map(data => {
    // if (searchParameter == "") {
    //   return <TableRow opcode={data.opcode} mnemonics={data.mnemonic} description={data.description} />
    // } else {
    //   if (data.opcode.includes(searchParameter.toUpperCase()) || data.mnemonic.includes(searchParameter.toUpperCase())) {
    //     return <><TableRow opcode={data.opcode} mnemonics={data.mnemonic} description={data.description} /></>
    //   }
    // }

    if (searchParameter == "") {
      return <Card mnemonics={data.mnemonic} opcode={data.opcode} description={data.description} byte={data.bytes + "bytes"} flags={data.flags}/>
    } else {
      if (data.opcode.includes(searchParameter.toUpperCase()) || data.mnemonic.includes(searchParameter.toUpperCase())) {
        return  <Card mnemonics={data.mnemonic} opcode={data.opcode} description={data.description} byte={data.bytes + "bytes"} flags={data.flags}/>
      }
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
    <button className="p-0.5 w-16 border-2 border-black border-r-0 rounded-tl-3xl rounded-bl-3xl " onClick={() => setListType(0)}>Table </button>
    <button className="p-0.5 w-16 border-2 border-black border-r-0" onClick={() => setListType(1)}>Grid </button>
    <button className="p-0.5 w-16 border-2 border-black rounded-tr-3xl rounded-br-3xl" onClick={() => setListType(2)}>List </button>
  </div>

</div>
<div className="flex justify-center items-center p-5">


{/* {
  listType == 0 ? 
  <table className="border-2 border-black p-2 rounded-md">
    <tr className="border-2 border-black">
      <th className="border-2 border-black p-2 w-14">Opcode</th>
      <th className="border-2 border-black p-2 w-14">Mnenomics</th>
      <th className="border-2 border-black p-2 w-xl">Descriptions</th>
    </tr>
    {opcode}
  </table> : null
} */}


<div className="grid grid-cols-3 gap-5">
  {opcode}

</div>

</div>
    </div>
    </>
  )
}

export default App
