import Resume from "./components/Resume";
import VisitorCounter from "./components/VisitorCounter";
import Navbar from "./components/Navbar";
import { useState } from "react";

export default function App() {
  const [isStartButtonClicked, setIsStartButtonClicked] = useState<boolean>(false)

  return (
    <div>
      <div className="page-wrapper">
        <div className="page-container">
          <div>Header</div>
          <div className="page-content">
            <Resume />
            <VisitorCounter />
          </div>
        </div>
      </div>
      <Navbar isStartButtonClicked={isStartButtonClicked} setIsStartButtonClicked={setIsStartButtonClicked}/>
    </div>
  );
}
