
const Rating = (props) => {
   const { children } = props;
  const rating = Math.round(children);
  const filledStars = '★'.repeat(rating);
  const emptyStars = '☆'.repeat(5 - rating);
  const stars = filledStars + emptyStars;
  
  return (
    <div className="Rating">
        {stars}</div>
  );
};

export default Rating;
