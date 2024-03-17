import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";

import { cacheResults } from "../utils/searchSlice";

const Head = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestion, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchCache = useSelector((store) => store.search);
  useEffect(() => {
    console.log(searchQuery);
    //make an api call after every key press
    //but if the differenc between 2 api call is <200ms
    //decline the api call
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSugestions();
      }
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);
  const getSearchSugestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    console.log(json[1]);
    setShowSuggestions(json[1]);
    //dispatch an action
    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };
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
        <div className="col-span-10 px-10">
          <div>
            <input
              value={searchQuery}
              type="text"
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={(e) => setShowSuggestions(true)}
              onBlur={(e) => setShowSuggestions(false)}
              className="w-1/2 px-5 border border-gray-400 p-2 rounded-l-full"
            />
            <button className="border border-gray-400 rounded-r-full bg-gray-200">
              Search
            </button>
          </div>

          <div className="fixed bg-white py-2 px-5 w-[37rem] border border-gray-100 ">
            <ul>
              {showSuggestions &&
                suggestion.map((s) => {
                  return(
                  <li className="py-2 px-3 m-1 shadow hover:bg-gray-100 cursor-pointer">
                    {s}
                  </li>
                  )
                })}
            </ul>
          </div>
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
