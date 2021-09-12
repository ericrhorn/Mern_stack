import React, { useState } from "react";
import "./App.css";
import TabDisplay from "./components/TabDisplay";
import Tab from "./components/Tab";

function App() {

  const tabArr = [
    {label: "tab1", content: "This is tab one"},
    {label: "tab2", content: "This is tab two"},
    {label: "tab3", content: "This is tab three"},
  ];

const [allTab, setAllTab] = useState(tabArr);

const [currentTabIndex, setCurrentTabIndex] = useState(0);

  return (
    <div className="App">
      <Tab
        allTab={allTab}
        currentTabIndex={currentTabIndex}
        setCurrentTabIndex={setCurrentTabIndex}
      />
      <TabDisplay
        allTab={allTab}
        currentTabIndex={currentTabIndex}
      />
    </div>
  );
}

export default App;
