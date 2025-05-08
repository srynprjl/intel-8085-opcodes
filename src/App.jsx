import TableRow from "./components/TableRow";
import opcodes from "./data/opcodes"
import { useState } from "react"





function App() {

  const [searchParameter, setSearchParameter] = useState("")

  const search = (data) => {
    setSearchParameter(prev => data.target.value);
    console.log(searchParameter)
  }
  const opcode = opcodes.map(data => {
    if (searchParameter == "") {
      return <TableRow opcode={data.opcode} mnemonics={data.mnemonic} description={data.description} />
    } else {
      if (data.opcode.includes(searchParameter.toUpperCase()) || data.mnemonic.includes(searchParameter.toUpperCase())) {
        return <><TableRow opcode={data.opcode} mnemonics={data.mnemonic} description={data.description} /></>
      }
    }

  })

  return (
    <>
      <input type="text" onChange={search} /> <br />
      <table>
        <tr>
          <th>Opcode</th>
          <th>Mnenomics</th>
          <th>Descriptions</th>
        </tr>
        {opcode}
        </table>
    </>
  )
}

export default App
