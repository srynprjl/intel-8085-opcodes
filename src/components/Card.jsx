export default function Card(props) {
    return (
        <>
            <div className="w-80 h-40 bg-gray-300 rounded-3xl p-1.5 flex flex-col justify-center items-center">
                <h1 className="text-center font-bold text-3xl">{props.mnemonics}</h1>
                <div className="flex justify-center items-center">
                    <div className="max-w-72 min-w-72">
                        <p className="text-md">Opcode: {props.opcode}</p>
                        <p className="text-md">Description: {props.description}</p>
                        <p>Byte : {props.byte} </p>
                        <p>Flags: {props.flag} </p>
                    </div>
                </div>
            </div>
        </>
    )
}