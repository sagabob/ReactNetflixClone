import { forwardRef } from "react";
import Slick from "../components/slick";
import { BASE_IMAGE_URL } from "../data/request";
import { SlickContentProps } from "./types";

const SlickContentContainer = forwardRef<HTMLImageElement, SlickContentProps>(({ lowestVisibleIndex, itemsInRow, sliderHasMoved, movies }, ref) => {
  console.log(`enter slick container ${lowestVisibleIndex}`);
  // gets the indexes to be displayed

  const left = [];
  const mid = [];
  const right = [];

  const totalItems = movies.length;

  for (let i = 0; i < itemsInRow; i++) {
    // left
    if (sliderHasMoved) {
      if (lowestVisibleIndex + i - itemsInRow < 0) {
        left.push(totalItems - itemsInRow + lowestVisibleIndex + i);
      } else {
        left.push(i + lowestVisibleIndex - itemsInRow); // issue here
      }
    }

    // mid
    if (i + lowestVisibleIndex >= totalItems) {
      mid.push(i + lowestVisibleIndex - totalItems);
    } else {
      mid.push(i + lowestVisibleIndex);
    }

    // right
    if (i + lowestVisibleIndex + itemsInRow >= totalItems) {
      right.push(i + lowestVisibleIndex + itemsInRow - totalItems);
    } else {
      right.push(i + lowestVisibleIndex + itemsInRow);
    }
  }

  // combine indexes
  const indexToDisplay = [...left, ...mid, ...right];

  // add on leading and trailing indexes for peek image when sliding
  if (sliderHasMoved) {
    const trailingIndex = indexToDisplay[indexToDisplay.length - 1] === totalItems - 1 ? 0 : indexToDisplay[indexToDisplay.length - 1] + 1;
    indexToDisplay.push(trailingIndex);

    const leadingIndex = indexToDisplay[0] === 0 ? totalItems - 1 : indexToDisplay[0] - 1;
    indexToDisplay.unshift(leadingIndex);
  }

  const sliderContents = [];
  for (let i = 0; i < indexToDisplay.length - 1; i++) {
    let index = indexToDisplay[i];
    sliderContents.push(
      <Slick.Item
        src={movies[index].backdrop_path != null ? `${BASE_IMAGE_URL}${movies[index].backdrop_path}` : "images/misc/home-bg.jpg"}
        title={movies[index].name || movies[index].title}
        key={`${movies[index].id}-${index}`}
        width={100 / itemsInRow}
      />
    );
  }

  sliderContents.push(
    <Slick.ItemRef
      src={movies[indexToDisplay[indexToDisplay.length - 1]].backdrop_path != null ? `${BASE_IMAGE_URL}${movies[indexToDisplay[indexToDisplay.length - 1]].backdrop_path}` : "images/misc/home-bg.jpg"}
      title={movies[indexToDisplay[indexToDisplay.length - 1]].name || movies[indexToDisplay[indexToDisplay.length - 1]].title}
      key={`${movies[indexToDisplay[indexToDisplay.length - 1]].id}-${indexToDisplay[indexToDisplay.length - 1]}`}
      width={100 / itemsInRow}
      ref={ref}
    />
  );

  // adds empty divs to take up appropriate spacing when slider at initial position
  if (!sliderHasMoved) {
    for (let i = 0; i < itemsInRow; i++) {
      sliderContents.unshift(<Slick.EmptyItem width={100 / itemsInRow} key={i} />);
    }
  }

  console.log(indexToDisplay);

  return <>{sliderContents}</>;
});

export default SlickContentContainer;
