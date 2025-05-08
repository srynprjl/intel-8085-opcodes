export default function TableView(props){
    return(
        <table className="border-2 border-black p-2 rounded-md">
    <tr className="border-2 border-black">
      <th className="border-2 border-black p-2 w-14">Opcode</th>
      <th className="border-2 border-black p-2 w-14">Mnenomics</th>
      <th className="border-2 border-black p-2 w-xl">Descriptions</th>
    </tr>
    {props.opcode}
  </table>
    )
}