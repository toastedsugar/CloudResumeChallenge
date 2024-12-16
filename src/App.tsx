import Resume from "./components/Resume";
import VisitorCounter from "./components/VisitorCounter";
import Navbar from "./components/Navbar";
import { useState } from "react";
import ComputerImage from "../src/assets/Win95-icons/Computers/Computer with programs.ico";

export default function App() {
  const [isStartButtonClicked, setIsStartButtonClicked] =
    useState<boolean>(false);
  const [selectedPage, setSelectedPAge] = useState<string>("Resume");

  return (
    <div className="app-wrapper">
      <div className="page-wrapper">

        <div className="page-container">

            <div className="page-header">
              <img className="page-header-icon" src={ComputerImage} alt="" />
              {selectedPage}
            </div>
            <Resume />

        </div>
      </div>
      <Navbar
        isStartButtonClicked={isStartButtonClicked}
        setIsStartButtonClicked={setIsStartButtonClicked}
      />
    </div>
  );
}

/**

<div>
      <div className="page-wrapper">
        <div className="page-container">
          <div className="page-header">
            
            <img className="page-header-icon" src={ComputerImage} alt="" />
            {selectedPage}</div>
          <div className="page-menu">
            <p className="page-menu-item">File</p>
            <p className="page-menu-item">Edit</p>
            <p className="page-menu-item">View</p>
            <p className="page-menu-item">Help</p>
          </div>
          <div className="page-content">
            <Resume  />
            <VisitorCounter />
          </div>
        </div>
      </div>
      <Navbar
        isStartButtonClicked={isStartButtonClicked}
        setIsStartButtonClicked={setIsStartButtonClicked}
      />
    </div>


 */
