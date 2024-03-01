import React from "react";
import { useSelector } from "react-redux";
import store from "../utils/store";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  //Early return pattern coding
  if (!isMenuOpen) return null;
  return (
    <div className="shadow-lg">
      <ul>
       
          <li>Home</li>
        

        <li>Short</li>
        <li>Videos</li>
        <li>Live</li>
      </ul>
      <h1 className="font-bold pt-5">Subscriptions</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
      <h1 className="font-bold pt-5">Subscriptions</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
    </div>
  );
};

export default Sidebar;
