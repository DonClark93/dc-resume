import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './index.css'
import Container from './layouts/Container.jsx'
import AboutMe from './components/AboutMe.jsx'
import Projects from './components/Projects.jsx'
import WorkHistory from './components/WorkHistory.jsx'
import Default from './components/Default.jsx'
import ResumeButton from "./components/ResumeButton.jsx"


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
    <div className="min-h-screen bg-gunmetal">
      <div className="flex justify-center text-6xl text-slate-200">
        Donald Clark&#39;s Resume
      </div>
      <br></br>
      <br></br>
      <div className="flex text-4xl justify-around">
        <ResumeButton updateView={updateView} text={"Projects"} activity={"projects"}/>
        <ResumeButton updateView={updateView} text={"Work History"} activity={"work"}/>
        <ResumeButton updateView={updateView} text={"About Me"} activity={"about"}/>
      </div>
      <br></br>
      <br></br>
      <Container activity={activity}/>
      
    </div>
  )
}

export default App
