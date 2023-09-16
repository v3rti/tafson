import React, { useState } from 'react';

function RatingDropdown() {
  // Define an array of rating options
  const ratingOptions = [1, 2, 3, 4, 5];

  // Create a state variable to store the selected rating
  const [selectedRating, setSelectedRating] = useState('');

  // Handle changes to the selected rating
  const handleRatingChange = (event) => {
    setSelectedRating(event.target.value);
  };

  return (
    <div>
      <label htmlFor="ratingDropdown">Select a Rating:</label>
      <select
        id="ratingDropdown"
        name="rating"
        value={selectedRating}
        onChange={handleRatingChange}
      >
        <option value="">Select a rating</option>
        {ratingOptions.map((rating) => (
          <option key={rating} value={rating}>
            {rating}
          </option>
        ))}
      </select>
      <p>Selected Rating: {selectedRating}</p>
    </div>
  );
}

export default RatingDropdown;