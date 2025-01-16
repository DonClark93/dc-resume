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
    
   

    return(
        
        <div className="min-h-screen bg-gunmetal-400">
            <Header/>
            <br/>
            <br/>
            <div className="flex text-4xl justify-around">
            <ResumeButton text={"Projects"} activity={"projects"}/>
            <ResumeButton text={"Work History"} activity={"work"}/>
            <ResumeButton text={"About Me"} activity={"about"}/>
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