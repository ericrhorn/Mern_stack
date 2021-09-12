import React from "react";

const TabDisplay = (props) => {
  const { allTab, currentTabIndex } = props;

  return (
    <div>
        {allTab[currentTabIndex].content}
    </div>
  );
};

export default TabDisplay;
