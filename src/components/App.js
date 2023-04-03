import "../styles/App.css"

import { Routes, Route } from "react-router-dom"

import Login from "./Homepage/Login"
import Register from "./Homepage/Register"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  )
}

export default App
