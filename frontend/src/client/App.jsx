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
      <div className="application bg-neutral-200 min-h-[90vh]">
        <Header state={state} />
        <div className="pt-[14rem]">
          <Outlet />
        </div>

        <Footer />
      </div>
    </>
  );
}
export default App;
