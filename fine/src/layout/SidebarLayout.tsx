import React, { ReactNode } from "react";
import Sidebar from "../components/Sidebar/Sidebar";

interface Props {
  children: ReactNode;
}

const SidebarLayout: React.FC<Props> = ({ children }) => {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <Sidebar />
      <div style={{ flex: 1, padding: "1rem" }}>
        {children}
      </div>
    </div>
  );
};

export default SidebarLayout;
