export default function TableRow(props) {
    return (<tr className="text-sm">
        <td className="border-2 border-black px-2 py-1">{props.opcode}</td>
        <td className="border-2 border-black  px-2 py-1">{props.mnemonics}</td>
        <td className="border-2 border-black  px-2 py-1">{props.description}</td>
    </tr>)
}