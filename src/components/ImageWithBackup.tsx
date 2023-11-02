import { useState } from "react";

interface ImageWithBackupProps {
  imgbbUrl: string; // Define imgbbUrl as a string type
  postimg: string;
  altText: string;
}

const ImageWithBackup = ({
  imgbbUrl,
  postimg,
  altText,
}: ImageWithBackupProps) => {
  const [imageSrc, setImageSrc] = useState(imgbbUrl);

  const handleImageError = () => {
    // If the ImgBB image fails to load, switch to the Imgur image as a backup
    setImageSrc(postimg);
  };

  return <img src={imageSrc} alt={altText} onError={handleImageError} />;
};

export default ImageWithBackup;
