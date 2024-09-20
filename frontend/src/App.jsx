import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import WatermarkUploader from "./Pages/WatermarkUploader";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <div>
          <Routes>
            {/* Home Route */}
            <Route path="/" element={<Home />} />

            {/* Upload Route */}
            <Route path="/upload" element={<WatermarkUploader />} />

            {/* Browse Route */}
            {/* <Route path="/browse" element={<Browse />} /> */}
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App
