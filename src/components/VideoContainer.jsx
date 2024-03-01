import React, { useEffect, useState } from "react";
import { YOUTUBE_API } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    try {
      const response = await fetch(YOUTUBE_API);
      const data = await response.json();
      console.log(data.items);
      setVideos(data.items);
    } catch (error) {
      console.error("Error fetching videos:", error);
    }
  };
  return (
    <div className="flex flex-wrap">
      {videos &&
        videos.map((video) => (
        <Link to={"/watch?v=" + video.id}> <VideoCard key={video.id} info={video} /></Link>))}
    </div>
  );
};

export default VideoContainer;
