import React, {useState} from "react";
import { FaStar } from "react-icons/fa";

const Star = ({ selected = false, onSelect = f => f  }) => (
    <>
    <FaStar color={selected ? "red" : "grey"} onClick={onSelect} />
    </>
);

const createArray = length => [...Array(length)];

const BookRating = ({ totalStars = 5 }) => {
  const [rating, setRating] = useState(0);
  return createArray(totalStars).map((n, i) => <Star key={i} selected={rating > i} onSelect={() => setRating(i + 1)}/> );
}

export default BookRating;

