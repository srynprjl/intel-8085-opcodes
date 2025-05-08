export default function TableRow(props) {
    return (<tr>
        <td>{props.opcode}</td>
        <td>{props.mnemonics}</td>
        <td>{props.description}</td>
    </tr>)
}