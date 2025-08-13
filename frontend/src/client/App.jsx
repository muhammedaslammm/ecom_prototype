import { Outlet } from "react-router-dom";
import Header from "./components/header/Header";
import { Toaster } from "sonner";
import "./App.css";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {
  const [state, setState] = useState(null);

  return (
    <>
      <Toaster position="top-center" />
      <div className="application bg-neutral-200">
        <Header state={state} /> {/*header UI */}
        <Outlet /> {/*this part changes based on the route defined.*/}
        <Footer /> {/*footer UI */}
      </div>
    </>
  );
}
export default App;
