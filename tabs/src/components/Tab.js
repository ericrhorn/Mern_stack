import React from "react";

const Tab = (props) => {
  const { allTab, currentTabIndex, setCurrentTabIndex } = props;

  const setSelectTab = (index) => {
    setCurrentTabIndex(index);
  };

  return (
    <div>
      {allTab.map((item, index) => (
        <button className="btn" onClick={(e) => setSelectTab(index)}>{item.label}</button>
      ))}
    </div>
  );
};

export default Tab;
