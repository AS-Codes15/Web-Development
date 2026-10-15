import React from "react";
import './styles/index.css';
import SidebarComponent from "./components/Sidebar";

function App() {
  return (
    <div className="flexbox">
      <SidebarComponent />
      <div className="layout-container">
        <div className="layout=container__wrapper">
          <div className="flexbox flexbox-justify-between flexbox-align-baseline">
            <h3>Expenses</h3>
            <span className="pill info">INR 0.00</span>
          </div>
          <hr />
          <div className="layout-container__expenses">
            <ul>
              <li>
                
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
