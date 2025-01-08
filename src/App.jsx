//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './index.css'
import Home from './components/Home'
import { Routes, Route } from 'react-router'

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
    </Routes>
  )
}

export default App
