import React, { useEffect, useState, useRef } from "react";
import contactcss from "./Contactcss.module.css"
import resume from "./../Static/resume.pdf"

export default function Contact({navLoadingFinished, setContactRef}) {

    const contactwrapper = useRef(null)
    const lineleft = useRef(null)
    const lineright = useRef(null)
    const text = useRef(null)
    const desc = useRef(null)
    const links = useRef(null)

    function handleLink(e) {
        window.open(e.target.id, "_blank")
    }

    useEffect(()=>{
        if (navLoadingFinished === false) {
            contactwrapper.current.style.visibility = "hidden"
            contactwrapper.current.style.position = "absolute"
        } else {
            contactwrapper.current.style.visibility = "visible"
            contactwrapper.current.style.position = "relative"
            setContactRef(contactwrapper)
        }
    }, [navLoadingFinished])

    useEffect(() => {
        if(navLoadingFinished === false){
            return
        }
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                animateDivs()
              }
            });
          },
          { threshold: 0.5 }
        );
    
        if (contactwrapper.current) {
          observer.observe(contactwrapper.current);
        }
    
        return () => {
          if (contactwrapper.current) {
            observer.unobserve(contactwrapper.current);
          }
        };

    }, [navLoadingFinished]);

    function animateDivs() {
        const arr = [text, desc, links];
        lineleft.current.style.transform = "scaleX(1)"
        lineright.current.style.transform = "scaleX(1)"
        // arr.forEach((element => {
        //     element.current.style.opacity = "100%"
        //     element.current.style.transform = "translateY(0)"
        // }))
        text.current.style.opacity = "100%"
        text.current.style.transform = "translateY(0)"
        desc.current.style.opacity = "100%"
        desc.current.style.transform = "translateY(0)"
        links.current.style.opacity = "100%"
        links.current.style.transform = "translateY(0)"
    }

    return(
        <div className={contactcss.contactwrapper} ref={contactwrapper}>

            <div className={contactcss.contact}>

                <div className={contactcss.textbox}>

                    <div className={`${contactcss.line} ${contactcss.lineleft}`} ref={lineleft}></div>

                    <div className={contactcss.text} ref={text}>
                        Contact
                    </div>

                    <div className={`${contactcss.line} ${contactcss.lineright}`} ref={lineright}></div>

                </div>

                <div className={contactcss.descbox} ref={desc}>
                    Lets connect! 
                    <br />
                    I am avalible to discuss full time opportunities and freelance projects.
                    <br />
                    Please don't hesitate to reach out with any and all questions or inquiries.
                </div>

                <div className={contactcss.linkswrapper} ref={links}>

                    <div className={contactcss.email} onClick={handleLink} id="mailto:bblazhkevychh@gmail.com">
                        getEmail()
                    </div>
                    
                    <div className={contactcss.resume} onClick={handleLink} id={resume}>
                        getResume()
                    </div>

                </div>

            </div>

        </div>
    )
}