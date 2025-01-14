import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import About from './components/About'
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [modeBlue, setmodeBlue] = useState('light');
  const [modeGreen, setmodeGreen] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null)
    }, 1700)
  }
  const togglemodeBlue = () => {
    if (modeBlue === 'light') {
      setmodeBlue('dark')
      document.body.style.backgroundColor = '#042743'
      showAlert("Dark modeBlue has been enabled", "Primary")
      document.title = 'TextUtils - DarkMode'
      // setInterval(() => {
      //   document.title ='TextUtils - TimeOut'
      // }, 2000);
    } else {
      setmodeBlue('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light modeBlue has been enabled", "Primary")
      document.title = 'TextUtils - LightMode'
    }
  }

  const togglemodeGreen = () => {
    if (modeGreen === 'light') {
      setmodeGreen('dark')
      document.body.style.backgroundColor = 'green'
      showAlert("Dark modeGreen has been enabled", "success")
    } else {
      setmodeGreen('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light modeGreen has been enabled", "success")
    }
  }
  return (
    // <Navbar title=" TextUtils" />
    // <Navbar/>
    <>
    {/* <Router> */}
      <Navbar title="TextUtils" aboutText="About" modeBlue={modeBlue} togglemodeBlue={togglemodeBlue} modeGreen={modeGreen} togglemodeGreen={togglemodeGreen} />
      <Alert alert={alert} modeBlue={modeBlue} modeGreen={modeGreen} />

      <div className='container'>
        {/* <Routes> */}
          {/* <Route exact path="/"> */}
            <TextForm showAlert={showAlert} heading="Enter your text here" modeBlue={modeBlue} modeGreen={modeGreen} />
          {/* </Route> */}
          {/* <Route exact path="about" element={<About />} /> */}
        {/* </Routes> */}
      </div>
    {/* </Router> */}
    </>
  );
}

export default App;
