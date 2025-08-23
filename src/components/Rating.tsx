"use client";
import { useState } from "react";

interface StarRatingProps {
  rating?: number;
  onRatingChange?: (value: number) => void;
  size?: string;
  readonly?: boolean;
  showValue?: boolean;
}

export default function StarRating({
  rating = 0,
  onRatingChange,
  size = "w-6 h-6",
  readonly = false,
  showValue = true,
}: StarRatingProps) {
  const [hoverRating, setHoverRating] = useState<number>(0);
  const [currentRating, setCurrentRating] = useState<number>(rating);

  const handleClick = (value: number) => {
    if (readonly) return;
    setCurrentRating(value);
    if (onRatingChange) {
      onRatingChange(value);
    }
  };

  const handleMouseEnter = (value: number) => {
    if (readonly) return;
    setHoverRating(value);
  };

  const handleMouseLeave = () => {
    if (readonly) return;
    setHoverRating(0);
  };

  const getStarColor = (starIndex: number): string => {
    const activeRating = hoverRating || currentRating;
    return starIndex <= activeRating
      ? "text-orange-500 fill-current"
      : "text-gray-300 fill-current";
  };

  return (
    <div className="flex items-center space-x-1">
      <div className="flex space-x-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type="button"
            className={`${size} ${getStarColor(star)} ${
              readonly ? "cursor-default" : "cursor-pointer hover:scale-110"
            } transition-all duration-150`}
            onClick={() => handleClick(star)}
            onMouseEnter={() => handleMouseEnter(star)}
            onMouseLeave={handleMouseLeave}
            disabled={readonly}
          >
            <svg viewBox="0 0 24 24" className="w-full h-full">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          </button>
        ))}
      </div>

      {showValue && (
        <span className="ml-2 text-sm text-gray-600 font-medium">
          {currentRating > 0 ? `${currentRating}/5` : ""}
        </span>
      )}
    </div>
  );
}
