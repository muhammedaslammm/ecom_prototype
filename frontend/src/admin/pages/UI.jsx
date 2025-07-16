import { useState } from "react";
import AdminSectionTitle from "../components/AdminSectionTitle";

const UI = () => {
  const [sections, setSections] = useState([]);
  return (
    <div className="ui-management">
      <AdminSectionTitle />
      <section className="bg-white border border-[#e3e3e3] shadow-[0_0_#d4d4d4] mt-[1.5rem] rounded-[1rem]">
        {sections.length ? <div></div> : <div></div>}
      </section>
    </div>
  );
};

export default UI;
