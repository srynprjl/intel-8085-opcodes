export default function GridView(props){
    console.log(props.view);
    return(
        <div className={(props.view == 1 ? "grid grid-cols-3 gap-5" : "grid-cols-1 grid w-full gap-y-5")}>
            {props.opcode}
        </div>
    )
}