import { Link } from 'react-router-dom';
import './Dropdown.css'

function Dropdown() {

  return (
    <>
      <div id="dropdown">
        <ul>
            <li><Link to="/" className="route-link"><h2>Dashboard</h2></Link></li>
            <li><Link to="/productivity" className="route-link"><h2>Productivity</h2></Link></li>
        </ul>
      </div>
    </>
  )
}

export default Dropdown;