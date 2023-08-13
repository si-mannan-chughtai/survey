import React, {useState} from 'react';
import { NavLink, Link } from 'react-router-dom';
import abasynlogo from './Logo.png'
import sir from '../images/sir.png'
import PersonIcon from '@mui/icons-material/Person'
import HomeIcon from '@mui/icons-material/Home';
import LogoutIcon from '@mui/icons-material/Logout';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import './MainHeader.css'
//import  '.images/sir'
function MainHeader() {
  const [isButtonPressed, setIsButtonPressed] = useState(false);

  const handleButtonPress = () => {
    setIsButtonPressed(true);
  }

  const handleButtonRelease = () => {
    setIsButtonPressed(false);
  }

  const navStyle = {
    backgroundColor: 'white',
    border: '1px solid #0000001a',
    marginTop: isButtonPressed ? '100px' : '0px',
  }
  return (
    <nav className="navbar navbar-expand-lg " style={navStyle}>
    <div className="container-fluid">
      <a className="navbar-brand" href="#">
        <img src={abasynlogo} alt="logo" style={{width:'100px'}}/>
        <span className='portal'>Student Portal</span> 
      </a>
      <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarSupportedContent" 
          aria-controls="navbarSupportedContent" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
          style={{
            fontSize: "10px",
            height: "40px",
            marginBottom: "10px",
            color: '#346448'
          }}
          onMouseDown={handleButtonPress}
          onMouseUp={handleButtonRelease}
          onMouseLeave={handleButtonRelease}
        >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0" style={{backgroundColor:" white"}}>
        <li className="nav-item">
              <NavLink
                to="/profile"
                className="nav-link"
                activeClassName="active"
                style={{
                  fontStyle: 'normal',
                  fontSize: '15px',
                  fontWeight: 500,
                  color: '#346448',
                }}
              >
                <PersonIcon className="menuIcon" />
                <span
                  style={{
                    marginLeft: 10,
                    fontFamily: 'Mplus 1p, sans-serif',
                    fontStyle: 'normal',
                    fontWeight: 500,
                    fontSize: '13px',
                    color: '#346448',
                  }}
                >
                  3355
                </span>
              </NavLink>
            </li>

          <li className="nav-item">
              <NavLink
                to="/home"
                exact
                className="nav-link"
                activeClassName="active"
                style={{
                  fontStyle: 'normal',
                  fontSize: '15px',
                  fontWeight: 500,
                  color: '#346448',
                }}
              >
                <HomeIcon className="menuIcon" />
                <span
                  style={{
                    marginLeft: 10,
                    fontFamily: 'Mplus 1p, sans-serif',
                    fontStyle: 'normal',
                    fontWeight: 500,
                    fontSize: '13px',
                    color: '#346448',
                  }}
                >
                  Home
                </span>
              </NavLink>
            </li>

          <li className="nav-item">
              <NavLink
                to="/ResetPassword"
                className="nav-link"
                activeClassName="active"
                style={{
                  fontStyle: 'normal',
                  fontSize: '15px',
                  fontWeight: 500,
                  color: '#346448',
                }}
              >
                <AutorenewIcon className="menuIcon" />
                <span
                  style={{
                    marginLeft: 10,
                    fontFamily: 'Mplus 1p, sans-serif',
                    fontStyle: 'normal',
                    fontWeight: 500,
                    fontSize: '13px',
                    color: '#346448',
                  }}
                >
                  Reset Password
                </span>
              </NavLink>
             </li>

          <li className="nav-item">
              <NavLink
                to="logout"
                className="nav-link"
                activeClassName="active"
                style={{
                  fontStyle: 'normal',
                  fontSize: '15px',
                  fontWeight: 500,
                  color: '#346448',
                }}
              >
                  <LogoutIcon className='menuIcon'/> 
                <span
                  style={{
                    marginLeft: 10,
                    fontFamily: 'Mplus 1p, sans-serif',
                    fontStyle: 'normal',
                    fontWeight: 500,
                    fontSize: '13px',
                    color: '#346448',
                  }}
                >
                 Logout
                </span>
              </NavLink>
             </li>
             <li className="nav-item ">
    <a href="/#"><img src={sir} alt="Avatar" class="avatar"/></a>
  </li>
          
          
        </ul>
      </div>
    </div>
  </nav>
  );
}
export default MainHeader

