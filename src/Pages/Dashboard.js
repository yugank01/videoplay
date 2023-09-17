import React from "react";
import SideBar from "../component/SideBar";

export default function Dashboard() {
  return (
    <div className="WrapComp">
      <SideBar />
      <div className="dash">
        <div className="dash-connect">
          <button className="dash-btn">Connect Wallet/Connected</button>
        </div>

        <div className="dash-thumb">
          <button className="dash-thumbbtn">Video Thumbnail</button>
          <p className="dash-p">Video Title</p>
        </div>

        <div className="dash-buy">
          <button className="dash-btn">Buy Your Shardzz</button>
          <div className="dash-blank"></div>
        </div>
      </div>
    </div>
  );
}
