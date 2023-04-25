import React, { useRef, useEffect } from "react";
import { Suspense } from "react";
import { Trident } from "../../Trident";
import aboutcss from "./Aboutcss.module.css"
import { Canvas } from "@react-three/fiber";
import { AmbientLight } from "three";

export default function About({navLoadingFinished, setAboutRef}) {

    const aboutWrapper = useRef(null)
    const textboxwrapper = useRef(null);
    const headingtext = useRef(null);
    const line = useRef(null)
    const p1 = useRef(null)
    const p2 = useRef(null)
    const p3 = useRef(null)
    const trident = useRef(null)

    useEffect(() => {

        if (navLoadingFinished === false) {
            aboutWrapper.current.style.visibility = "hidden"
            aboutWrapper.current.style.position = "absolute"
        } else {
            aboutWrapper.current.style.visibility = "visible"
            aboutWrapper.current.style.position = "relative"
            aboutWrapper.current.style.opacity = "100"
            setAboutRef(aboutWrapper)
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
    
        if (aboutWrapper.current) {
          observer.observe(aboutWrapper.current);
        }
    
        return () => {
          if (aboutWrapper.current) {
            observer.unobserve(aboutWrapper.current);
          }
        };
    }, [navLoadingFinished]);

    function animateDivs() {
        // headingtext.current.style.opacity = "100";
        // headingtext.current.style.transform = "translate(0, 0)"
        line.current.style.transform = "scaleX(1)"
        let arr = [headingtext, p1, p2, p3, trident]
        arr.forEach((element) => {
            element.current.style.opacity = "100%";
            element.current.style.transform = "translate(0, 0) scale(1)";

        })
    }



    return(
        <div className={aboutcss.aboutwrapper} ref={aboutWrapper}>

            <div className={aboutcss.about}>

                <div className={aboutcss.textboxwrapper} ref={textboxwrapper}>

                    <div className={aboutcss.heading}>

                        <div className={aboutcss.headingtext} ref={headingtext}>
                            About
                        </div>

                        <div className={aboutcss.line} ref={line}></div>

                    </div>

                    <div className={aboutcss.paragraph}>

                        <div className={aboutcss.p1} ref={p1}>
                            My name is Bogdan Blazhkevych, originally from Ukraine but raised in Brooklyn. I discovered programing late June 
                            of 2022, after I made a decision to drop out of college after my father joined the war effort.
                        </div>
                        
                        <br />

                        <div className={aboutcss.p2} ref={p2}>
                            I began learning basic HTML through freeCodeCamp courses, and ever since then I 
                            spent my time working on personal projects and occasional contract web development work.
                        </div>

                        <br />

                        <div className={aboutcss.p3} ref={p3}>
                            Currently, I'm focused on building my portfolio and showcasing my skills to potential employers. I'm excited about 
                            the endless possibilities that coding offers and eager to contribute my expertise. Let's connect and explore how I 
                            can add value to your team!
                        </div>

                    </div>

                </div>


                <div className={aboutcss.tridentwrapper} ref={trident}>
                    <Canvas>

                        <Suspense fallback={null}>
                            <Trident />
                        </Suspense>
                    {/* <hemisphereLight /> */}
                    {/* <ambientLight /> */}
                    <pointLight position={[0, 20, 10]} intensity={1.5}/>
                    </Canvas>
                </div>
                
            </div>

        </div>
    )
}