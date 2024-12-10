import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './index.css'
import Container from './layouts/Container.jsx'
import AboutMe from './components/AboutMe.jsx'
import Projects from './components/Projects.jsx'
import WorkHistory from './components/WorkHistory.jsx'
import Default from './components/Default.jsx'


function App() {

  //const [count, setCount] = useState(0)
  const [activity,setActivity] = useState(Default)
  const about = <AboutMe/>
  const projects = <Projects/>
  const work = <WorkHistory/>
  
  function updateView(val){
    if(val == "about"){
      setActivity(about)
    }
    if(val == "work"){
      setActivity(work)
    }
    if(val == "projects"){
      setActivity(projects)
    }
  }


  return (
    <>
      <h1>
        Donald Clark&#39;s Resume
      </h1>
      <br></br>
      <br></br>
      <h3>
        Sections
      </h3>
      <ul>
        <li onClick={() => updateView("about")}>
          About Me
        </li>
        <li onClick={() => updateView("work")}>
          Work History
        </li>
        <li onClick={() => updateView("projects")}>
          Projects
        </li>
      </ul>
      <br></br>
      <br></br>
      <Container activity={activity}/>
      
    </>
  )
}

export default App
