import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Head = () => {
  const dispatch = useDispatch();
  const toggleMenuhandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <>
      <div className="grid grid-flow-col p-5 m-2 shadow-xl">
        <div className="flex col-span-1">
          <img
            alt=" menu"
            onClick={() => toggleMenuhandler()}
            src="https://static.vecteezy.com/system/resources/previews/021/190/402/original/hamburger-menu-filled-icon-in-transparent-background-basic-app-and-web-ui-bold-line-icon-eps10-free-vector.jpg"
            className="h-8 cursor-pointer"
          />
          <a href="/">
            <img
              alt="youtubelogo"
              src="https://logos-world.net/wp-content/uploads/2020/04/YouTube-Logo-2017-present.jpg"
              className="h-8 mx-2"
            />
          </a>
        </div>
        <div className="flex col-span-10 px-10">
          <input
            type="text"
            className="w-1/2 border border-gray-400 p-2 rounded-l-full"
          />
          <button className="border border-gray-400 rounded-r-full bg-gray-200">
            Search
          </button>
        </div>
        <div className="flex col-span-1">
          <img
            alt="usericon"
            src="https://icon-library.com/images/generic-user-icon/generic-user-icon-13.jpg"
            className="h-8"
          />
        </div>
      </div>
    </>
  );
};

export default Head;
