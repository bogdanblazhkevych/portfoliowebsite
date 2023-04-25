import React from 'react';
import './App.css';
import LoadAnimation from './Components/LoadAnimation/LoadAnimation';
import Navbar from './Components/Navbar/Navbar';
import {useState, useRef} from 'react'
import About from './Components/About/About';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';
import Intro from './Components/Introduction/Intro';

function App() {
  const about = useRef(null)

  const [initialLoadingFinished, setInitialLoadingFinished] = useState(false)
  const [navLoadingFinished, setNavLoadingFinished] = useState(false)
  const [introLoadingFinished, setIntroLoadingFinished] = useState(false)
  const [aboutRef, setAboutRef] = useState()
  const [projectsRef, setProjectsRef] = useState()
  const [contactRef, setContactRef] = useState()

  function scrollToTarget(target) {
    console.log(target.current)
    if (target.current) {
      window.scrollTo({
        top: target.current.offsetTop,
        behavior: 'smooth'
      })
    }
  }

  return (
    <div className="App">
      <Navbar initialLoadingFinished={initialLoadingFinished} setNavLoadingFinished={setNavLoadingFinished} scrollToTarget={scrollToTarget} about={aboutRef} projects={projectsRef} contact={contactRef}/> {/* set to initialLoadingFinished*/}
      <LoadAnimation setInitialLoadingFinished={setInitialLoadingFinished}/>
      <Intro navLoadingFinished={navLoadingFinished}/>
      <About navLoadingFinished={navLoadingFinished} setAboutRef={setAboutRef}/>
      <Projects navLoadingFinished={navLoadingFinished} setProjectsRef={setProjectsRef}/>
      <Contact navLoadingFinished={navLoadingFinished} setContactRef={setContactRef}/>
    </div>
  );
}

export default App;
