import { useState } from 'react'
import { Outlet, Link } from 'react-router'

import Container from '../layouts/Container'
import AboutMe from './AboutMe.jsx'
import Projects from './Projects.jsx'
import WorkHistory from './WorkHistory.jsx'
import Default from './Default.jsx'
import ResumeButton from "./ResumeButton.jsx"
import Header from "./Header.jsx"
import Footer from "./Footer.jsx"

export default function Home () {
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

    return(
        
        <div className="min-h-screen bg-gunmetal-400">
            <Header/>
            <br/>
            <br/>
            <div className="flex text-4xl justify-around">
            <ResumeButton updateView={updateView} text={"Projects"} activity={"projects"}/>
            <ResumeButton updateView={updateView} text={"Work History"} activity={"work"}/>
            <ResumeButton updateView={updateView} text={"About Me"} activity={"about"}/>
            </div>
            <br/>
            <br/>
            <Link to="pokeguess">click</Link>
            <Container >
            <Outlet />
            </Container>

            <br/>
            <br/>
            <Footer className="object-center absolute bottom-0 right-1/2 " />
        </div>
    )
}