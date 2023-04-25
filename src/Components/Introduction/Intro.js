import React, {useEffect, useState, useRef} from "react";
import introcss from "./Introcss.module.css"

export default function Intro({navLoadingFinished}) {

    const infowrapper = useRef(null)
    const nameref = useRef(null)
    const descriptionref = useRef(null)
    const shortdescref = useRef(null)

    useEffect(() => {

        if (navLoadingFinished === false) {
            infowrapper.current.style.visibility = "hidden"
            infowrapper.current.style.position = "absolute"
        } else {
            infowrapper.current.style.visibility = "visible"
            infowrapper.current.style.position = "relative"
            // infowrapper.current.style.opacity = "100"
            let arr = [nameref, descriptionref, shortdescref]
            arr.forEach((element) => {
                element.current.style.transform = "translateY(0px)"
            })
        }

    }, [navLoadingFinished])


    return(
        <div className={introcss.introwrapper} ref={infowrapper}>

            <div className={introcss.intro}>

                <div className={introcss.blurb}>

                    <div className={introcss.name} ref={nameref}>
                        Bogdan Blazhkevych()
                        {/* <div className={introcss.selectorbox}></div> */}
                    </div>
                    <div className={introcss.description} ref={descriptionref}>
                        Developing Web Developer
                    </div>
                    <div className={introcss.shortdesc} ref={shortdescref}>
                        Welcome! I am an aspiring full stack developer commited to taking my knowledge and skills to the next level. 
                        From the time I first logged "Hello World" into the console to now, I am excited to take you through my coding journey.
                    </div>

                </div>

            </div>
            
        </div>
    )
}