import React, { useEffect, useState } from "react";

export default function Banner() {
  const [imageSrc, setImageSrc] = useState(
    "https://i.ibb.co/jfqFY2s/top-view-paint-can-min-1.jpg"
  );
  const backupImageSrc =
    "https://i.postimg.cc/MpRprLh5/top-view-paint-can-min-1.jpg"; // Backup image URL

  // Function to handle image loading errors and switch to the backup image
  const handleImageError = () => {
    setImageSrc(backupImageSrc);
  };

  useEffect(() => {
    const image = new Image();
    image.src = imageSrc;
    image.onload = () => {};
    image.onerror = () => {
      handleImageError();
    };
  }, [imageSrc]);

  return (
    <div
      className="background-image customMid:h-[calc(100vh-64px)]  h-screen"
      style={{ backgroundImage: `url(${imageSrc})` }}
    >
      <div className="flex flex-col 2xl:text-6xl text-start xl:text-5xl md:text-4xl extraSm:text-xl text-white font-bold justify-center md:ml-20 extraSm:text-center extraSm:ml-0 h-full w-1/2">
        <h1 className="text-yellow-300 mb-3">Wall - Wizards</h1>
        <h1 className="mb-3">Bringing Walls to</h1>
        <h1>Life with Every Brushstroke</h1>
      </div>
    </div>
  );
}
