import { React } from "react";
import './FilteredMenu.css'

export default function FilteredMenu(props){
    const {name, bool, handleClick, changeStatus} = props;

    return (  
        <>
            <button onClick={()=>{
                handleClick(name);
                changeStatus(name)} } 
                className={bool ? "btn-menu btn-menu-active" : "btn-menu"}>
                {name}
            </button>
            <p></p>
        </>
    );
}