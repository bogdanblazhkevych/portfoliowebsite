import React, {useRef, useState, useEffect} from "react";
import { ReactDOM } from "react";
import loadanimationcss from "./loadanimationcss.module.css"


export default function LoadAnimation({setInitialLoadingFinished}){

    const animationwrapper = useRef(null);
    const rectsvg = useRef(null);
    const textbox = useRef(null);
    const hiddentext = useRef(null);
    const bordersvg = useRef(null);
    const [lastNameArray, setLastNameArray] = useState(["B", "l", "a", "z", "h", "k", "e", "v", "y", "c", "h"])
    const [firstNameArray, setFirstNameArray] = useState(["B", "o", "g", "d", "a", "n", " "])
    const [textLoaded, setTextLoaded] = useState(false)

    useEffect(()=> {
        const twoletterwidth = hiddentext.current.offsetWidth;
        const initialtextboxwidth = textbox.current.offsetWidth;
        animationwrapper.current.style.setProperty("--strokedashvar", (window.innerWidth / 2) + "px")
        animationwrapper.current.style.setProperty("--textboxwidth", initialtextboxwidth + "px");
        animationwrapper.current.style.setProperty("--bordersvgwidth", hiddentext.current.offsetWidth + "px");
        animationwrapper.current.style.setProperty("--bordersvgheight", hiddentext.current.offsetHeight + "px");
        loadText(twoletterwidth)
        
    }, [])

    useEffect(() => {
        if(textLoaded === false){
            return
        }
        const interval = setInterval(() => {
          setLastNameArray(prevArray => {
            if (prevArray.length > 1) {
              return prevArray.slice(0, -1);
            } else {
              clearInterval(interval);
              return prevArray;
            }
          }, 50);

          setFirstNameArray(prevArray => {
              if (prevArray.length > 1) {
                  return prevArray.slice(0, -1);
              } else {
                  return prevArray
              }
          })
        }, 50);
        
        return () => {
          clearInterval(interval);
        };
      }, [textLoaded]);



    async function delay(duration) {
        return new Promise((resolve) => {
            setTimeout(resolve, duration);
        });
    }

    async function loadText(targetWidth) {
        await delay(500)
        textbox.current.style.opacity = "100%"
        await delay(2000)
        setTextLoaded(true)
        await delay(700)
        textbox.current.style.setProperty("--textboxwidth", targetWidth + "px");
        await delay(1000)
        // bordersvg.current.style.setProperty("--bordersvgwidth", hiddentext.current.offsetWidth + "px");
        // bordersvg.current.style.setProperty("--bordersvgheight", hiddentext.current.offsetHeight + "px");
        // bordersvg.current.classList.add(loadanimationcss.bordersvg)
        // rectsvg.current.classList.add(loadanimationcss.rectsvganimated)
        // rectsvg.current.classList.add(loadanimationcss.rectsvg)
        // rectsvg.current.style.animation = "draw 1s linear forwards"
        rectsvg.current.style.opacity = "100%";
        await delay(1000)
        animationwrapper.current.style.position = "absolute"
        animationwrapper.current.style.opacity = "0%"
        setInitialLoadingFinished(true)
        await delay(1000)
        animationwrapper.current.style.display = "none"
    }

    return(
        <div className={loadanimationcss.animationwrapper} ref={animationwrapper}>

            <div className={loadanimationcss.textbox} ref={textbox}>

                <svg ref={bordersvg}>
                    <rect ref={rectsvg} className={loadanimationcss.rectsvg}></rect>
                </svg>

                <div className={loadanimationcss.firstname}>
                    {firstNameArray.map((letter, index) => {
                        if (letter === " ") { return <span key={"firstempty"}>&nbsp;</span>}
                        return <span key={"first" + index}>{letter}</span>
                    })}
                </div>

                <div className={loadanimationcss.lastname}>
                    {lastNameArray.map((letter, index) => {
                        return <span key={"last" + index}>{letter}</span>
                    })}
                </div>
                
            </div>

            <div className={loadanimationcss.hiddentext} ref={hiddentext}>
                BB
            </div>

        </div>
    )
}