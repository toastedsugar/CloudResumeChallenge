import Resume from "./components/Resume";
import VisitorCounter from "./components/VisitorCounter";
import Navbar from "./components/Navbar";

export default function App() {
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
      <Navbar />
    </div>
  );
}
