import React from "react";
import "./Main.css";
import a1 from "../Imgs/fortnite-pictures-b5kfcchwazwiz3cs 1.png";
import { IoCloseOutline } from "react-icons/io5";
const Main = () => {
  return (
    <div className="col-12 d-flex flex-column  align-items-center gap-3 p-sm-0 p-3">
      <div className="d-flex col-12 justify-content-end mt-3">
        <IoCloseOutline className="text-white fs-3 me-2" />
      </div>
      <span className="text-white epicfont   fw-light mt-4">
        Epic Games : An American Video Game And Software Developer And Publisher
        Based In Cary, North Carolina
      </span>
      <img className=" img-main " src={a1} alt="" />
      <p className="text-white epicfont1 text-center fs-6 fw-light">
        Create, play, and battle with friends for free in Fortnite. Be the last
        player standing in Battle Royale and Zero Build, experience a concert or
        live event, or discover over a million creator made games, including
        racing, parkour, zombie survival, and more. Each Fortnite island has an
        individual age rating so you can find the one that's right for you and
        your friends. Find it all in Fortnite ... Drop In.
      </p>
      <button className="bg-light    pt-2 pb-2 visitbutton">
        Visit Website{" "}
      </button>
    </div>
  );
};

export default Main;
