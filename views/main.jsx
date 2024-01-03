import Table from "../components/Table/body";
import { Navbar } from "../components/Navbar/navbar";
import Sidebar from "../components/Sidebar/index";
import "./global.css";
const Main = () => {
  return (
    <main>
      <Navbar />
      <div className="content">
        <Sidebar />
        <Table />
      </div>
    </main>
  );
};

export default Main;
