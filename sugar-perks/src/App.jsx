import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'

//Import Components
import Header from './components/Header/Header';
import Dropdown from './components/Dropdown/Dropdown';
import Productivity from './Productivity/Productivity';


function App() {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  return (
    <>
      <div id="main">

        <BrowserRouter>
          <Header currentDropdownVisible={dropdownVisible} changeDropdownVisible={setDropdownVisible} />
          {dropdownVisible ? <Dropdown /> : null}
          <Routes>
            <Route path="/home" element={<div></div>} />
            <Route path="/productivity" element={<Productivity />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
