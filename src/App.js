import "./App.css";
import { useState } from "react";

import Navbar1 from "./components/NavBar/Navbar1.jsx";
import TextForm2 from "./components/TextForm/TextForm2.jsx";
import Alert from "./components/Alert/Alert";
import About from "./components/about";

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
} from "react-router-dom";

function App() {
  // properties
  const [color, setColor] = useState({
    color: "black",
    backgroundColor: "white",
  });

  const [mode, setMode] = useState({
    color: "light",
  });

  const [alert, setAlert] = useState(null);

  //functions

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      typ: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode.color === "light" || mode.color === "black") {
      setMode({
        color: "dark",
      });
      showAlert("Dark mode has been enabled", "success");
      document.body.style.backgroundColor = "#042743";
    } else {
      setMode({
        color: "light",
      });
      showAlert("Light mode has been enabled", "success");
      document.body.style.backgroundColor = "white";
    }
  };

  const toggleModeGreen = () => {
    if (mode.color === "light" || mode.color === "dark") {
      setMode({
        color: "black",
      });
      showAlert("Green mode has been enabled", "success");
      document.body.style.backgroundColor = "#052a05";
    } else {
      setMode({
        color: "light",
      });
      showAlert("Light mode has been enabled", "success");
      document.body.style.backgroundColor = "white";
    }
  };

  const about = () => {
    document.title = "Text Utility-About";
  };

  //alert function

  return (
    <>
      {/* ***********************************************for routing purposes*************************** */}

      {/* <Router>
        <Navbar1
          title="hayan"
          about="Aboust us"
          mode={mode.color}
          toggleMode={toggleMode}
          toggleGreen={toggleModeGreen}
        />
        <Alert alertMesg={alert} />
        <div className="container">
          <Routes>
            <Route exact path="/about" element={<About title="Text Utility-About" />} />
            <Route
              exactpath="/"
              element={
                <TextForm2
                  heading="Enter text to analyze"
                  modeText={mode.color}
                  alertMsg={showAlert}
                  title = "Text Utility-Home"
                />
              }
            />
          </Routes>
        </div>
      </Router> */}

      {/* ****************************************Deployement**************************************** */}
      <Navbar1
        title="hayan"
        about="Aboust us"
        mode={mode.color}
        toggleMode={toggleMode}
        toggleGreen={toggleModeGreen}
      />
      <Alert alertMesg={alert} />
      <div className="container">
        <TextForm2
          heading="Enter text to analyze"
          modeText={mode.color}
          alertMsg={showAlert}
          title="Text Utility-Home"
        />
      </div>
    </>
  );
}

export default App;
