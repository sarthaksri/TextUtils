import { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import TextForms from './Components/TextForms';
// import About from './Components/About';
function App() {

  const [mode, setMode] = useState('light');

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor='#2c0c32';
    }
    else {
      setMode('light');
      document.body.style.backgroundColor= 'white';
    }
  }

  return (
    <>
      {/* <Navbar title="TextUtils" aboutText="About TextUtils" /> */}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <div className="container my-3">
        <TextForms heading="Enter you text to analyse here" mode={mode}/>
        {/* <About/> */}
      </div>
    </>
  );
}

export default App;
