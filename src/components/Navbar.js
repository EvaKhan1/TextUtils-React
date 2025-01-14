import React from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';

function Navbar(props) {
  const dynamicTextColor = (props.modeBlue === 'dark' || props.modeGreen === 'dark') ? 'white' : 'black';

  const dynamicColor = props.modeBlue === 'dark' ? 'dark' : (props.modeGreen === 'dark' ? 'dark' : 'light');

  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-${dynamicColor} bg-${dynamicColor}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#" style={{ color: dynamicTextColor }}>{props.title}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#" style={{ color: dynamicTextColor }}>Home</a>
              </li>
              <li className="nav-item">
                {/* <Link className="nav-link" to="/about" style={{ color: dynamicTextColor }}>{props.aboutText}</Link> */}
              </li>
            </ul>
            <div className="form-check form-switch" style={{ color: dynamicTextColor }}>
              <input className="form-check-input" onClick={props.togglemodeBlue} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable {props.modeBlue === 'light' ? 'dark' : 'light'} modeBlue</label>
            </div>

            <div className="form-check form-switch mx-2" style={{ color: dynamicTextColor }}>
              <input className="form-check-input" onClick={props.togglemodeGreen} type="checkbox" role="switch" id="flexSwitchCheckGreen" />
              <label className="form-check-label" htmlFor="flexSwitchCheckGreen">Enable {props.modeGreen === 'light' ? 'dark' : 'light'} modeGreen</label>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  title: 'Set title here',
  aboutText: 'Set About here',
};

export default Navbar;
