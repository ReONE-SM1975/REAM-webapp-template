import logo from './logo.svg';
import './App.css';

import React, {useState} from 'react'

function App() {
  const [isPassword, setIsPassword] = useState(false);
  function handleIsPassword(e){
    e.preventDefault();
    setIsPassword(!isPassword)
    // document.querySelector(".Input__Field").setAttribute('type',isPassword ? 'text' : 'password')
  }
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    // 
  <>
  <div className="box">
    <div className="Input__wrapper">
      <input className="Input__Field" id="password" type={isPassword ? "password" : "type"} placeholder={"Type your password"} title="Require Minimum of 6 charaters long 1 numberical 1 Alphabet" pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$" />
        <label htmlFor="password" className="input__label">{"Password"}</label>
        <img src={logo} className={`input__icon ${isPassword ? "" : "spin"}`} alt="logo" title={`logo ${isPassword ? "" : "spin"}`} onClick={handleIsPassword}/> 
      
    </div>
  </div>
  
  </>  
  );
}

export default App;