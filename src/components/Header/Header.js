import './Header.scss';

import logo from '../../img/logo.png';

function Header (props) {
    return (
    <header className="header">
      <div className="headerRow">
        <div className= "headerLogo">
          <img src={logo} alt="logo"/>
          <div className="headerTitle">ToDoList</div>
        </div>
        {props.themeSelect}
      </div>
    </header>
    )
}

export default Header;