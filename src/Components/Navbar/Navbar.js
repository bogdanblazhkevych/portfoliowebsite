import React from "react";
import navbarcss from "./Navbarcss.module.css"
import logo from "./logo.png"
import resume from "./../Static/resume.pdf"
import { useState, useEffect, useRef } from "react";

export default function Navbar({initialLoadingFinished, setNavLoadingFinished, scrollToTarget, about, projects, contact}){
    const navbarwrapper = useRef(null)
    const logoref = useRef(null)
    const listitem1 = useRef(null)
    const listitem2 = useRef(null)
    const listitem3 = useRef(null)
    const listitem4 = useRef(null)

    useEffect(()=> {

        if (initialLoadingFinished === false) {
            // navbarwrapper.current.style.visibility = "hidden"
            navbarwrapper.current.style.position = "absolute"
        } else {
            navbarwrapper.current.style.position = "relative"
            // navbarwrapper.current.style.visibility = "visible"
            // navbarwrapper.current.style.opacity = "100"
            loadNav()
            // let arr = [logoref, listitem1, listitem2, listitem3, listitem4]
            // arr.forEach((element)=> {
            //     element.current.style.transform = "translateX(0px)"
            // })
        }

    }, [initialLoadingFinished])

    async function loadNav(){
        let arr = [logoref, listitem1, listitem2, listitem3, listitem4]
        arr.forEach((element)=> {
            element.current.style.transform = "translateX(0px)"
        })
        await delay(500)
        setNavLoadingFinished(true)

    }

    async function delay(duration) {
        return new Promise((resolve) => {
            setTimeout(resolve, duration);
        });
    }

    const handleClick = (e) => {

        let target

        if (e.target.id === "about") {
            target = about
        } else if (e.target.id === "projects") {
            target = projects
        } else if (e.target.id === "contact") {
            target = contact
        } else if (e.target.id === resume) {
            window.open(e.target.id, "_blank")
            return
        } else {
            return
        }

        scrollToTarget(target)

    }


    // useEffect(() => {
    //     if(navbarwrapper.current){
    //         fadeNavBar()
    //     }

    // }, [initialLoadingFinished])

    // function fadeNavBar(){
    //     navbarwrapper.current.style.opacity = "100%"
    // }


    // if(initialLoadingFinished === false){
    //     return 
    // }

    return(
        <div className={navbarcss.navbarwrapper} ref={navbarwrapper}>

            <div className={navbarcss.navbar}>

                <div className={navbarcss.logowrapper} ref={logoref}>
                    <img src={logo} className={navbarcss.logoimage}></img>
                </div>

                <div className={navbarcss.navlist}>
                    <div className={navbarcss.listitem1} ref={listitem1} onClick={handleClick} id="about">
                        About
                    </div >

                    <div className={navbarcss.listitem2} ref={listitem2} onClick={handleClick} id="projects">
                        Projects
                    </div>

                    <div className={navbarcss.listitem3} ref={listitem3} onClick={handleClick} id="contact">
                        Contact
                    </div>

                    <div className={navbarcss.listitem4} ref={listitem4} onClick={handleClick} id={resume}>
                        Resume
                    </div>

                </div>

            </div>


        </div>
    )
}