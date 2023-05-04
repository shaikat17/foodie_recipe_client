import React from "react";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";

const reviews = [
  {
    name: "John Smith",
    rating: 4,
    review:
      "I loved the food and the service was excellent! Highly recommend this restaurant.",
  },
  {
    name: "Jane Doe",
    rating: 5,
    review:
      "The best Indian food I have ever had! Everything was delicious and the staff was so friendly and welcoming.",
  },
  {
    name: "Bob Johnson",
    rating: 3,
    review:
      "The food was good but the service was a bit slow. Would still recommend for the quality of the food.",
  },
  {
    name: "Samantha Lee",
    rating: 5,
    review:
      "Absolutely amazing! I loved every dish I tried and the staff was so knowledgeable about the menu.",
  },
  {
    name: "Mike Brown",
    rating: 2,
    review:
      "I was disappointed with the food and the service was not great. Would not recommend this restaurant.",
  },
  {
    name: "Sarah Davis",
    rating: 4,
    review:
      "The food was delicious and the atmosphere was great! I will definitely be coming back here again.",
  },
];

const ReviewsSection = () => {
  return (
    <div className="bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-orange-500 mb-8 "><span className="border-b-4 border-orange-500">Reviews</span></h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white rounded p-6 shadow-md hover:shadow-lg"
            >
              <div className="flex items-center mb-4">
                <div className="rounded-full bg-gray-500 h-8 w-8 flex items-center justify-center text-white font-bold text-sm" style={{borderRadius: '100%'}}>
                  {review.name.charAt(0).toUpperCase()}
                </div>
                <div className="ml-2 text-gray-700 font-bold">
                  {review.name}
                </div>
              </div>
              <div className="text-gray-600 mb-4">{review.review}</div>
              <div className="text-gray-700 font-bold">
              <Stack spacing={1}>
            <Rating
              name="half-rating-read"
              defaultValue={review.rating}
              precision={0.5}
              readOnly
            />
          </Stack>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReviewsSection;
