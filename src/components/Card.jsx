export default function Card(props) {
    return (
        <>
            <div className={"bg-gray-300 rounded-3xl p-2 flex items-center " + (props.view == 1 ? "w-80 h-40 flex-col" : "w-full h-30 justify-between" )}>
                <h1 className={"text-center font-bold text-3xl " + (props.view != 1 ? "p-5 text-3xl w-[25%]" : "")}>{props.mnemonics}</h1>
                <div className={"flex items-center justify-stretch" + (props.view != 1 ? " w-[75%]" : " ")}>
                    <div className={props.view == 1 ? "min-w-72 max-w-72" : ""}>
                        <div className={props.view != 1 ? "flex gap-5 text-xl w-[100%]" : ""} >
                            <p className={props.view == 1 ? "text-md" : ""}>Opcode: {props.opcode}</p>
                            <p>Byte : {props.byte} </p>
                            <p>Flags: {props.flags} </p>
                        </div>
                        <p className={props.view != 1 ? "flex gap-5 text-xl w-full" : "text-md"} >Description: {props.description}</p>
                    </div>
                </div>
                {props.view != 1 ? <div></div> : null}
            </div>
        </>
    )
}