import React from "react";
import dropdowncss from "./Dropdown.module.css"

export default function Dropdown(){
    return(
        <div className={dropdowncss.dropdownwrapper}>
                <div className={dropdowncss.box}>
                    <div className={dropdowncss.line}></div>
                    <div className={dropdowncss.line}></div>
                    <div className={dropdowncss.line}></div>
                </div>
        </div>
    )
}