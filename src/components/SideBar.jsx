import React from "react";

export default function SideBar(props) {
  const { handleToggleModel, data } = props;
  return (
    <>
      <div className="sidebar">
        <div onClick={handleToggleModel} className="bgOverlay"></div>
        <div className="sidebarContents">
          <h2>{data?.title}</h2>
          <div className="descriptionContainer">
            <p className="descriptionTitle">{data?.date}</p>
            <p>{data?.explanation}</p>
            {/* data? && data.explanation - that means id data is true the they give a explanation , or the data is null or undefined the condition false that means data is false **/}
          </div>
          <button onClick={handleToggleModel}>
            <i className="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </>
  );
}
