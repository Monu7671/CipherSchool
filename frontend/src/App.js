import Dashboard from "./Components/Dashboard/Dashboard";
import Header from "./Components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";
import Navbar from "./Components/Navbar/Navbar";
import "./App.css";

function App() {
  return (
    <div className="main_container">
      <div className="lcomponents">
        <Sidebar />
      </div>
      <div className="rcomponents">
        <Navbar />
        <Header />
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
