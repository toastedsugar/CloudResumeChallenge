import Resume from "./components/Resume/Resume";
import Navbar from "./components/Navbar";
import { useState } from "react";
import ComputerImage from "../src/assets/Win95-icons/Computers/Computer with programs.ico";

export default function App() {
  const [isStartButtonClicked, setIsStartButtonClicked] =
    useState<boolean>(false);
  const [selectedPage, setSelectedPage] = useState<string>("Resume");

  setSelectedPage;

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
