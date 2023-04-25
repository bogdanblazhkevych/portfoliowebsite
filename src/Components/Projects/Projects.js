import React, {useEffect, useState, useRef} from "react"
import projectscss from "./projectscss.module.css"
import { FaReact, FaHtml5, FaCss3Alt, FaGithub, FaNpm, FaCodepen } from 'react-icons/fa'
import { IoLogoJavascript } from 'react-icons/io'
import freeimg from "./freeinquotes.com_.png"
import fccimg from "./codepen.io_lilbogdaddy_full_ZERyORG.png"
import Spin360 from 'react-360-spin';
import glasses1 from './FINALGLASSES/glasses-1.jpg'
import glasses2 from './FINALGLASSES/glasses-2.jpg'
import glasses3 from './FINALGLASSES/glasses-3.jpg'
import glasses4 from './FINALGLASSES/glasses-4.jpg'
import glasses5 from './FINALGLASSES/glasses-5.jpg'
import glasses6 from './FINALGLASSES/glasses-6.jpg'
import glasses7 from './FINALGLASSES/glasses-7.jpg'
import glasses8 from './FINALGLASSES/glasses-8.jpg'
import glasses9 from './FINALGLASSES/glasses-9.jpg'
import glasses10 from './FINALGLASSES/glasses-10.jpg'
import glasses11 from './FINALGLASSES/glasses-11.jpg'
import glasses12 from './FINALGLASSES/glasses-12.jpg'
import glasses13 from './FINALGLASSES/glasses-13.jpg'
import glasses14 from './FINALGLASSES/glasses-14.jpg'
import glasses15 from './FINALGLASSES/glasses-15.jpg'
import glasses16 from './FINALGLASSES/glasses-16.jpg'

export default function Projects({navLoadingFinished, setProjectsRef}) {
    const projectswrapper = useRef(null)
    const title = useRef(null)
    const titletext = useRef(null)
    const titleline = useRef(null)
    const project1 = useRef(null)
    const project2 = useRef(null)
    const project3 = useRef(null)

    useEffect(() => {

        if (navLoadingFinished === false) {
            // projectswrapper.current.style.visibility = "hidden"
            // projectswrapper.current.style.height = "5px"
            // projectswrapper.current.style.overflowY = "hidden"
            projectswrapper.current.style.display = "none"
            projectswrapper.current.style.position = "absolute"
        } else {
            // projectswrapper.current.style.visibility = "visible"
            // projectswrapper.current.style.height = ""
            // projectswrapper.current.style.overflowY = "visible"
            projectswrapper.current.style.display = "flex"
            projectswrapper.current.style.position = "relative"
            setProjectsRef(projectswrapper)
        }

    }, [navLoadingFinished]);


    useEffect(() => {
        let refsArr = [titletext, titleline, project1, project2, project3];

        if(navLoadingFinished === false){
            return
        }
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                // console.log(entry.target.style)
                if (entry.target.id !== "line") {
                    entry.target.style.transform = "translate(0, 0)"
                    entry.target.style.opacity = "100%"
                }else{
                    entry.target.style.transform = "scaleX(1)"
                }
                
                // console.log(entry.target.id)
              }
            });
          },
          { threshold: 0.5 } // Define the threshold for intersection
        );
    
        if (projectswrapper.current) {
        //   observer.observe(projectswrapper.current);
          refsArr.forEach((element) => observer.observe(element.current)) 
        }
    
        // Cleanup the observer on component unmount
        return () => {
          if (projectswrapper.current) {
            // observer.unobserve(projectswrapper.current);
            refsArr.forEach((element) => observer.unobserve(element.current))
          }
        };
    }, [navLoadingFinished]);

    function getDimensions() {
        const viewport = window.innerWidth

        if (viewport < 950) {
            return 140
        } else if (viewport < 1100) {
            return 200
        } else {
            return 220
        }


        // if (viewport < 1100) {
        //     return 200
        // } else if (viewport < 950) {
        //     return 50
        // } 
        
        // else {
        //     return 220
        // }
    }

    function handleLinks(e) {
        window.open(e.target.id, "_blank")
    }

    const glassesArr = [glasses1, glasses2, glasses3, glasses4, glasses5, 
    glasses6, glasses7, glasses8, glasses9, glasses10, glasses11, glasses12, 
    glasses13, glasses14, glasses15, glasses16]

    return(
        <div className={projectscss.projectswrapper} ref={projectswrapper}>

            <div className={projectscss.projects} ref={title}>

                <div className={projectscss.projectsheading}>

                    <div className={projectscss.headingtext} ref={titletext}>
                        Projects
                    </div>

                    <div className={projectscss.headingline} ref={titleline} id="line"></div>

                </div>


                <div className={projectscss.project} ref={project1}>

                    <div className={projectscss.project1imgwrapper}>
                        <img src={freeimg} className={projectscss.freeimg}></img>
                    </div>

                    <div className={projectscss.project1descwrapper}>

                        <div className={projectscss.project1textwrapper}>

                            <div className={projectscss.project1heading} onClick={handleLinks} id="https://freeinquotes.com/">
                                freeinquotes.com
                            </div>

                            <div className={projectscss.project1desc}>
                                Landing page I developed for "FREE", a Brooklyn based clothing brand.
                                Featuring a responsive layout, animated menu, and a custom product viewer, 
                                users can brows the collection and checkout through the shopify payment portal.
                            </div>

                        </div>

                        <div className={projectscss.project1stackwrapper}>

                            <div className={projectscss.project1stack}>

                                <div className={projectscss.icon}>
                                    <FaReact />
                                </div>

                                <div className={projectscss.icon}>
                                    <IoLogoJavascript />
                                </div>

                                <div className={projectscss.icon}>
                                    <FaHtml5 />
                                </div>

                                <div className={projectscss.icon}>
                                    <FaCss3Alt />
                                </div>

                                <div className={projectscss.icon}>
                                    <FaGithub />
                                </div>

                            </div>

                        </div>


                    </div>

                </div>







                <div className={projectscss.project} ref={project2}>

                    <div className={`${projectscss.project1imgwrapper} ${projectscss.project2imgwrapper}`}>

                        <div className={projectscss.spinwrapper}>

                            <Spin360 imageArray={glassesArr}
                                    width={getDimensions()}
                                    height={getDimensions()}
                                    speed={3}
                                    border="1px solid black"/>

                        </div>

                    </div>

                    <div className={projectscss.project1descwrapper}>

                        <div className={projectscss.project1textwrapper}>

                            <div className={`${projectscss.project1heading} ${projectscss.project2heading}`} onClick={handleLinks} id="https://www.npmjs.com/package/react-360-spin">
                                react-360-spin
                            </div>

                            <div className={`${projectscss.project1desc} ${projectscss.project2desc}`}>
                                While working on freeinquotes.com I published this component to npm. React 360 Spin 
                                takes dynamically imported images or cloud links, and stiches them together to create 
                                a 3D like enviornment for product display with mobile and desktop support. See it in 
                                action here by holding down and dragging across the image!
                            </div>

                        </div>

                        <div className={`${projectscss.project1stackwrapper} ${projectscss.project2stackwrapper}`}>

                            <div className={projectscss.project1stack}>

                                <div className={projectscss.icon}>
                                    <FaReact />
                                </div>

                                <div className={projectscss.icon}>
                                    <IoLogoJavascript />
                                </div>

                                <div className={projectscss.icon}>
                                    <FaHtml5 />
                                </div>

                                <div className={projectscss.icon}>
                                    <FaCss3Alt />
                                </div>

                                <div className={projectscss.icon}>
                                    <FaNpm />
                                </div>

                            </div>

                        </div>


                    </div>

                </div>







                <div className={projectscss.project} ref={project3}>

                    <div className={projectscss.project1imgwrapper}>
                        <img src={fccimg} className={projectscss.fccimg}/>
                    </div>

                    <div className={projectscss.project1descwrapper}>

                        <div className={projectscss.project1textwrapper}>

                            <div className={projectscss.project1heading} onClick={handleLinks} id="https://codepen.io/blazhkevych/full/ZERyORG">
                                FCC Projects
                            </div>

                            <div className={projectscss.project1desc}>
                                freeCodeCamp was where I started my software engineering journey. I packeged all 
                                5 frontent projects: quote generator, markdown, calculator, drum machine, and 
                                clock into one pen. The most notable part being the knob component for the drum 
                                machine I created from scratch.
                            </div>

                        </div>

                        <div className={projectscss.project1stackwrapper}>

                            <div className={projectscss.project1stack}>

                                <div className={projectscss.icon}>
                                    <IoLogoJavascript />
                                </div>

                                <div className={projectscss.icon}>
                                    <FaHtml5 />
                                </div>

                                <div className={projectscss.icon}>
                                    <FaCss3Alt />
                                </div>

                                <div className={projectscss.icon}>
                                    <FaCodepen />
                                </div>

                            </div>

                        </div>


                    </div>

                </div>




            </div>

        </div>
    )
}