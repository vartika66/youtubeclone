import React, { useState, useEffect } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline'; // Assuming you're using Heroicons for icons
import Button from './Button';

const ButtonList = () => {
  const list = ["movies", "cricket", "comedy", "education", "kids", "drama", "news", "tvshows", "satsang", "thoughts"];
  const [showCarousel, setShowCarousel] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex(prevIndex => (prevIndex === 0 ? list.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex(prevIndex => (prevIndex === list.length - 1 ? 0 : prevIndex + 1));
  };

  useEffect(() => {
    const handleResize = () => {
      // Check if the list length exceeds the screen width
      if (document.body.scrollWidth < document.documentElement.clientWidth) {
        setShowCarousel(true);
      } else {
        setShowCarousel(false);
      }
    };

    // Call handleResize when the component mounts and when the window is resized
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if (!showCarousel) {
    return (
      <div className="flex flex-wrap">
        {list.map(item => <Button key={item} name={item} />)}
      </div>
    );
  }

  return (
    <div className="flex items-center">
      <button onClick={handlePrevious} className="mr-2">
        <ChevronLeftIcon className="h-6 w-6 text-gray-500" />
      </button>
      <div className="flex justify-center items-center">
        <Button name={list[currentIndex]} />
      </div>
      <button onClick={handleNext} className="ml-2">
        <ChevronRightIcon className="h-6 w-6 text-gray-500" />
      </button>
    </div>
  );
};

export default ButtonList;
