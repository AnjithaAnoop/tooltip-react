import "./tooltip.css";
function Tooltip(props){

return(
     // based on the position , we are giving dynamic styles
    <>
        <div className={`tooltip-${props.position} tooltip`} >
        Thanks for hovering!I'm a tooltip from <span className="position"> {props.position}</span></div>

    </>
)
}


export default Tooltip;
