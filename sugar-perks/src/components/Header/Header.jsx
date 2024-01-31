import './Header.css'

function Header(props) {

  return (
    <>
      <div id="header">
        <div id="header-dropdown" onClick={() => props.changeDropdownVisible(!props.currentDropdownVisible)}>
          <i class="fa-solid fa-bars"></i>
        </div>
        <div id="header-title">
          <h1>Sugar <span>Perks</span></h1>
        </div>
      </div>
    </>
  )
}

export default Header;