import { useEffect, useState } from "react";
import Slick from "../components/slick";
import { BASE_IMAGE_URL } from "../data/request";
import { MovieType } from "../data/types";
import { useGettingDataHook } from "../hooks/useGettingDataHook";
import { SlickDotContainer } from "./slick_dot";
import { SlickProps } from "./types";

export function SlickContainer({ fetchUrl, title }: SlickProps) {
  const [sliderHasMoved, setSliderHasMoved] = useState(false); // boolean to display prev arrow
  const [sliderMoving, setSliderMoving] = useState(false); // boolean for slider animation
  const [movePercentage, setMovePercentage] = useState(0); // move percentage to shift slider during animation
  const [sliderMoveDirection, setSliderMoveDirection] = useState(""); // direction of movement of animation
  const [lowestVisibleIndex, setLowestVisibleIndex] = useState(0); // lowest visible index of slider content
  const [itemsInRow, setItemsInRow] = useState(5); // lowest visible index of slider content

  const movies = useGettingDataHook<MovieType>(fetchUrl);

  let selectedMovies: MovieType[] = [];
  if (movies !== undefined && Array.isArray(movies)) {
    selectedMovies = movies as MovieType[];
  }

  const totalItems = selectedMovies.length;

  useEffect(() => {
    handleWindowResize(window);
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  });

  // handle window resize and sets items in row
  const handleWindowResize = (e: any) => {
    if (window.innerWidth > 1440) {
      setItemsInRow(6);
    } else if (window.innerWidth >= 1000) {
      setItemsInRow(5);
    } else if (window.innerWidth < 1000) {
      setItemsInRow(4);
    }
  };

  const renderSliderContent = () => {
    // gets the indexes to be displayed
    const left = [];
    const mid = [];
    const right = [];

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
    }

    const leadingIndex = indexToDisplay[0] === 0 ? totalItems - 1 : indexToDisplay[0] - 1;
    indexToDisplay.unshift(leadingIndex);

    const sliderContents = [];
    for (let index of indexToDisplay) {
      sliderContents.push(
        <Slick.Item src={`${BASE_IMAGE_URL}${selectedMovies[index].backdrop_path}`} title={selectedMovies[index].name} key={`${selectedMovies[index].id}-${index}`} width={100 / itemsInRow} />
      );
    }

    // adds empty divs to take up appropriate spacing when slider at initial position
    if (!sliderHasMoved) {
      for (let i = 0; i < itemsInRow; i++) {
        sliderContents.unshift(<Slick.EmptyItem width={100 / itemsInRow} key={i} />);
      }
    }

    return sliderContents;
  };

  const handlePrev = () => {
    // get the new lowest visible index
    let newIndex = 0;
    if (lowestVisibleIndex < itemsInRow && lowestVisibleIndex !== 0) {
      newIndex = 0;
    } else if (lowestVisibleIndex - itemsInRow < 0) {
      newIndex = totalItems - itemsInRow;
    } else {
      newIndex = lowestVisibleIndex - itemsInRow;
    }

    // get the move percentage
    let newMovePercentage;
    if (lowestVisibleIndex === 0) {
      newMovePercentage = 0;
    } else if (lowestVisibleIndex - newIndex < itemsInRow) {
      newMovePercentage = ((itemsInRow - (lowestVisibleIndex - newIndex)) / itemsInRow) * 100;
    } else {
      newMovePercentage = 0;
    }

    setSliderMoving(true);
    setSliderMoveDirection("left");
    setMovePercentage(newMovePercentage);

    setTimeout(() => {
      setLowestVisibleIndex(newIndex);
      setSliderMoving(false);
    }, 850);
  };

  const handleNext = () => {
    let newIndex = 0;
    if (lowestVisibleIndex === totalItems - itemsInRow) {
      newIndex = 0;
    } else if (lowestVisibleIndex + itemsInRow > totalItems - itemsInRow) {
      newIndex = totalItems - itemsInRow;
    } else {
      newIndex = lowestVisibleIndex + itemsInRow;
    }

    // get the move percentage
    let newMovePercentage;
    if (newIndex !== 0) {
      newMovePercentage = ((newIndex - lowestVisibleIndex) / itemsInRow) * 100;
    } else {
      newMovePercentage = 100;
    }

    setSliderMoving(true);
    setSliderMoveDirection("right");
    setMovePercentage(newMovePercentage);

    setTimeout(() => {
      setLowestVisibleIndex(newIndex);
      setSliderMoving(false);
    }, 850);

    // slider has moved and show the previous arrow
    if (!sliderHasMoved) {
      setSliderHasMoved(true);
    }
  };

  const calTransform = () => {
    let translateXValue = 0;
    let transDuration = 750;
    if (sliderMoving) {
      if (sliderMoveDirection === "right") {
        translateXValue = -(100 + movePercentage + 100 / itemsInRow);
      } else if (sliderMoveDirection === "left") {
        translateXValue = -(movePercentage + 100 / itemsInRow);
      }
    } else {
      translateXValue = -(100 + (sliderHasMoved ? 100 / itemsInRow : 0));
      transDuration = 0;
    }

    return { translateXValue: translateXValue, transDuration: transDuration };
  };

  const calTransformOutput = calTransform();

  return totalItems > 0 ? (
    <Slick>
      <Slick.Heading>
        <h2>{title}</h2>
        <SlickDotContainer lowestVisibleIndex={lowestVisibleIndex} itemsInRow={itemsInRow} totalItems={totalItems} />
      </Slick.Heading>
      <Slick.Galery>
        {sliderHasMoved && <Slick.Control direction={"left"} onClick={handlePrev} />}
        <Slick.Content translateXValue={calTransformOutput.translateXValue} transitionDurationValue={calTransformOutput.transDuration}>
          {renderSliderContent()}
        </Slick.Content>
        <Slick.Control direction={"right"} onClick={handleNext} />
      </Slick.Galery>
    </Slick>
  ) : (
    <></>
  );
}
