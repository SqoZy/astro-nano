import React, { useState } from "react";

const PopupImage = ({ src, alt }) => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <img
        src={src}
        alt={alt}
        className="cursor-pointer w-full h-full object-cover rounded-lg"
        onClick={togglePopup}
      />
      {isOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
          onClick={togglePopup}
        >
          <div className="relative bg-white p-4 rounded-lg shadow-lg max-w-[90%] max-h-[90%]">
            <img
              src={src}
              alt={alt}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default PopupImage;