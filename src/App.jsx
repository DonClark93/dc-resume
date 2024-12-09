import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import Container from './layouts/Container'
import AboutMe from './components/AboutMe'
import Projects from './components/Projects'
import WorkHistory from './components/WorkHistory'


function App() {

  const [count, setCount] = useState(0)
  const [activity,setActivity] = useState('null')

  function updateView(val){
    setActivity(val)
  }


  return (
    <>
      <h1>
        Donald Clark's Resume
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
      <Container>
      <AboutMe></AboutMe>
      </Container>
    </>
  )
}

export default App
