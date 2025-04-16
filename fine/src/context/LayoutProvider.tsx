import React, { ReactNode } from "react";
import LayoutContext, { LayoutContextType } from "./LayoutContext";
import Sidebar from "../../src/components/Sidebar/Sidebar";

interface LayoutProviderProps {
  children: ReactNode;
}

export const LayoutProvider: React.FC<LayoutProviderProps> = ({ children }) => {
  const contextValue: LayoutContextType = {};

  return (
    <LayoutContext.Provider value={contextValue}>
      <div className="layout" style={{ display: "flex", backgroundColor: "#f4f7fc", minHeight: "100vh" }}>
        <Sidebar />
        <div className="main-content" style={{ flex: 1 }}>
          <main>{children}</main>
        </div>
      </div>
    </LayoutContext.Provider>
  );
};

export default LayoutProvider;