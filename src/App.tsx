import { Outlet } from "react-router";
import "./App.css";
import Navbar from "./pages/shared/Navbar";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </>
  );
}

export default App;
