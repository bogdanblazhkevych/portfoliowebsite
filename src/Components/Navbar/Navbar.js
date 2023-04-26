import React from "react";
import navbarcss from "./Navbarcss.module.css"
import logo from "./logo.png"
import resume from "./../Static/resume.pdf"
import { useEffect, useRef, useState } from "react";

export default function Navbar({initialLoadingFinished, setNavLoadingFinished, scrollToTarget, about, projects, contact}){
    const [scrollDirection, setScrollDirection] = useState("none")
    const navbarwrapper = useRef(null)
    const logoref = useRef(null)
    const listitem1 = useRef(null)
    const listitem2 = useRef(null)
    const listitem3 = useRef(null)
    const listitem4 = useRef(null)

    useEffect(()=> {
        let prevScroll = window.pageYOffset;

        function handleScroll(){
            const currentScroll = window.pageYOffset;

            if (currentScroll > prevScroll) {
                setScrollDirection("down")
            } else if (currentScroll < prevScroll) {
                setScrollDirection("up")
            }

            prevScroll = currentScroll
        }

        async function loadNav(){
            let arr = [logoref, listitem1, listitem2, listitem3, listitem4]
            arr.forEach((element)=> {
                element.current.style.transform = "translateX(0px)"
            })
            await delay(500)
            setNavLoadingFinished(true)
            window.addEventListener("scroll", handleScroll);
    
        }

        if (initialLoadingFinished === false) {
            navbarwrapper.current.style.position = "absolute"
        } else {
            navbarwrapper.current.style.position = "sticky"
            loadNav()
        }

    }, [initialLoadingFinished, setNavLoadingFinished])

    useEffect(() => {
        if (scrollDirection === "up") {
            navbarwrapper.current.style.transform = "translateY(0%)"
        } else if (scrollDirection === "down") {
            navbarwrapper.current.style.transform = "translateY(-100%)"
        } else {
            return
        }
    }, [scrollDirection])

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

    return(
        <div className={navbarcss.navbarwrapper} ref={navbarwrapper}>

            <div className={navbarcss.navbar}>

                <div className={navbarcss.logowrapper} ref={logoref}>

                    <img alt="logo" src={logo} className={navbarcss.logoimage}></img>

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