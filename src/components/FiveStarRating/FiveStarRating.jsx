import { StarFill, Star as StarEmpty, StarHalf } from "react-bootstrap-icons";

function FiveStarRating({rating}) {
  // declare star icon array
  const starList = [];
  // store number of filled starts
  const starFillCount = Math.floor(rating);
  // store if have half star
  const hasHalfStar = (rating-parseInt(rating)) >= 0.5;
  // store the number of empty stars
  const emptyStarCount = 5 - starFillCount - (hasHalfStar?1:0);
  // push full stars and empty stars icons - anyone
  for (let i = 1; i <= starFillCount; i++) {
    starList.push(<StarFill key={'star-fill'+i}/>);
  }
  for (let i = 1; i <= emptyStarCount; i++) {
    starList.push(<StarEmpty key={'star-empty'+i}/>);
  }

  return <div>{starList}</div>;
}

export default FiveStarRating;
