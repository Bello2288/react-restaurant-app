import { useState } from "react";
import ReviewsForm from "./ReviewsForm";
import ReviewsDetail from "./ReviewsDetail";

const INITIAL_REVIEWS = [ 
  {
    id: 1,
    name: "Bill Murray",
    body: "OMG, this place is amazing! Some of the best pizza I have had. Would definitely recommend!",
  },
  {
    id: 2,
    name: "Chris M.",
    body: "The absolute best pizza! I will go out of my way to order from here from now on. The ingredients are fresh & unlike a lot of other pizza places you don't feel heavy after eating theirs.",
  },
  {
    id: 3,
    name: "Rose",
    body: "Delicious!! The garlic bread with cheese was so good and hot and gooey.",
  },
  {
    id: 4,
    name: "H H",
    body: "The staff was very nice and the place was clean.  The pizza had a large qty of toppings.",
  },
  {
    id: 5,
    name: "Michelangelo",
    body: "Cowabunga dude!",
  },
  {
    id: 6,
    name: "Bret Smith",
    body: "This place is the absolute BEST!!! They are the friendliest people ever and the food is amazing.",
  },
  {
    id: 7,
    name: "The Pizza Man",
    body: "This is my first pie from them. And I must say, I am NOT disappointed. ",
  },
];

function Reviews() {
  const [reviewList, setReviewList] = useState(INITIAL_REVIEWS);

  const addReview = (newReview) => {
    setReviewList([newReview, ...reviewList]);
  };

  const removeReview = (id) => {
    const index = reviewList.findIndex((review) => review.id === id);
    const updatedReviewList = [...reviewList];
    updatedReviewList.splice(index, 1);
    setReviewList(updatedReviewList);
  };

  const updateReview = (updatedReview) => {
    const index = reviewList.findIndex((review) => review.id === updatedReview.id);
    const updatedReviewList = [...reviewList];
    updatedReviewList[index] = updatedReview;
    setReviewList(updatedReviewList);
  };

  const reviewsHTML = reviewList.map((review) => (
    <ReviewsDetail
      key={review.id}
      review={review}
      removeReview={removeReview}
      updateReview={updateReview}
    />
  ));

  return (
    <div className="row">
      <ReviewsForm addReview={addReview} />
      <ul className="col-md-6">{reviewsHTML}</ul>
    </div>
  );
}

export default Reviews;