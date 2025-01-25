// import logo from './logo.svg';
// import './App.css';
import './styles.css'

function App() {
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
    <>
      <div>
        <ul className="dropdown">
          <li>
            <a href="/#" className="dropdown-link">
              Dropdown <span className="dropdown-arrow"></span>
            </a>
            <ul className="dropdown-links">
              <li>
                <a href="/#">Link1</a>
              </li>
              <li>
                <a href="/#">Link2</a>
              </li>
              <li>
                <a href="/#">Link3</a>
              </li>
              <li>
                <a href="/#">Link4</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </>
  );
}

export default App;
