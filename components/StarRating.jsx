'use client';

import { useState } from 'react';
import '@styles/globalStyles.css';

const StarRating = () => {
  const [rating, setRating] = useState(0);

  const handleStarClick = (value) => {
    setRating(value);
  };

  return (
    <div className="starRating w-full">
      {[1, 2, 3, 4, 5].map((value) => (
        <span
          key={value}
          className={`"star" ${value <= rating ? "filled": ''}`}
          onClick={() => handleStarClick(value)}
        ></span>
      ))}
    </div>
  );
};

export default StarRating;