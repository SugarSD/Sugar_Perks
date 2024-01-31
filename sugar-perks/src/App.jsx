import { useState } from 'react'
import './App.css'

//Import Components
import Header from './components/Header/Header';
import Dropdown from './components/Dropdown/Dropdown';


function App() {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  return (
    <>
      <div id="main">
        <Header currentDropdownVisible={dropdownVisible} changeDropdownVisible={setDropdownVisible} />
        {dropdownVisible ? <Dropdown /> : null}
      </div>
    </>
  )
}

export default App
