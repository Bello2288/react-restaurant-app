function ReviewsDetail({ review }) {

  const previewTemplate = (
    <li className="review-list">
      <h2>{review.name}</h2>
      <p>{review.body}</p> 
    </li>
  );

  return <>{previewTemplate} </>;
}

export default ReviewsDetail;