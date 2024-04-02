import DashBoard from "./components/dashboard/DashBoard";
import SideBar from "./components/sidebar/SideBar";
import "./App.css";
import { useState } from "react";

function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  function OpenSidebar() {
    setOpenSidebarToggle(!openSidebarToggle);
  }

  return (
    <div className="dashboards">
      <SideBar
        openSidebarToggle={openSidebarToggle}
        OpenSidebar={OpenSidebar}
      />
      <DashBoard OpenSidebar={OpenSidebar} />
    </div>
  );
}

export default App;
