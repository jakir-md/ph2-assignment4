import { Outlet } from "react-router";
import "./App.css";
import Navbar from "./pages/shared/Navbar";
import { Toaster } from "react-hot-toast";
import Footer from "./pages/shared/Footer";

function App() {
  return (
    <div className="max-w-[1440px] mx-auto">
      <Navbar></Navbar>
      <div>
        <Toaster />
      </div>
      <div>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
