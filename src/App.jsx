//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import { Routes, Route } from 'react-router'
import './index.css'
import Home from './components/Home'
import AboutMe from './components/AboutMe'
import Projects from './components/Projects.jsx'
import WorkHistory from './components/WorkHistory.jsx'
import GameScreen from './components/pokeguess/GameScreen'
import Default from "./components/Default"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} >
        <Route index element={<Default/>}/>
        <Route path="about" element={<AboutMe/>}/>
        <Route path="work" element={<WorkHistory/>}/>
        <Route path="projects" element={<Projects/>}/>
      </Route>
      <Route path="pokeguess" element={<GameScreen/>}></Route>
    </Routes>
  )
}

export default App
