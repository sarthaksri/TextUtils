import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import TextForms from "./Components/TextForms";
import About from "./Components/About";
import Alert from "./Components/Alert";
import { Route, BrowserRouter as Router, Routes, } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#2c0c32";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
  };

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  return (
    <>
    <Router>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
      <Routes>
        <Route path="/" element={<TextForms showAlert={showAlert} heading="Enter you text to analyse here" mode={mode} />}/>
        <Route path="/about" element={<About />} />
      </Routes>
      </div>
      </Router>
    </>
  );
}

export default App;
