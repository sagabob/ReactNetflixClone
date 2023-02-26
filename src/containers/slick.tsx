import { useEffect, useState, TransitionEvent, useRef } from "react";
import Slick from "../components/slick";
import { MovieType } from "../data/types";
import { useGettingDataHook } from "../hooks/useGettingDataHook";
import { SlickContentContainer } from "./slick_content";
import { SlickDotContainer } from "./slick_dot";
import { SlickProps } from "./types";

const TRANSITION_DURATION = 800;

export function SlickContainer({ fetchUrl, title }: SlickProps) {
  const [sliderHasMoved, setSliderHasMoved] = useState(false); // boolean to display prev arrow
  const [sliderMoving, setSliderMoving] = useState(false); // boolean for slider animation
  const [movePercentage, setMovePercentage] = useState(0); // move percentage to shift slider during animation
  const [sliderMoveDirection, setSliderMoveDirection] = useState(""); // direction of movement of animation
  const [lowestVisibleIndex, setLowestVisibleIndex] = useState(0); // lowest visible index of slider content
  const [itemsInRow, setItemsInRow] = useState(5); // lowest visible index of slider content

  const [calculatedIndex, setCalculatedIndex] = useState(0); //store caledulated index
  const [calHeight, setCalHeight] = useState(200);
  const [calTop, setCalTop] = useState(50);

  const rawMovies = useGettingDataHook<MovieType>(fetchUrl);

  const contentDivRef = useRef<HTMLDivElement>(null);

  let movies: MovieType[] = [];
  if (rawMovies !== undefined && Array.isArray(rawMovies)) {
    movies = rawMovies as MovieType[];
  }

  const totalItems = movies.length;

  useEffect(() => {
    setControlConfig();
    handleWindowResize(window);

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  });

  // calculate the current height of the tiles and their top to parent
  const setControlConfig = () => {
    if (contentDivRef.current) {
      setCalHeight(contentDivRef.current.getBoundingClientRect().height);
      setCalTop(contentDivRef.current.offsetTop);
    }
  };

  // handle window resize and sets items in row
  const handleWindowResize = (e: Event | Window) => {
    if (window.innerWidth > 1440) {
      setItemsInRow(6);
    } else if (window.innerWidth >= 1000) {
      setItemsInRow(5);
    } else if (window.innerWidth < 1000 && window.innerWidth >= 600) {
      setItemsInRow(4);
    } else if (window.innerWidth <= 600) {
      setItemsInRow(3);
    }
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
    setCalculatedIndex(newIndex);
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
    setCalculatedIndex(newIndex);

    // slider has moved and show the previous arrow
    if (!sliderHasMoved) {
      setSliderHasMoved(true);
    }
  };

  const calTransform = () => {
    let translateXValue = 0;
    let transDuration = TRANSITION_DURATION;
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

  // callback when the transform ends
  const handleTransitionEnd = (event: TransitionEvent) => {
    //apply the state change on the main div
    if (event.target == event.currentTarget) {
      setLowestVisibleIndex(calculatedIndex);
      setSliderMoving(false);
    }
  };

  const calTransformOutput = calTransform();

  return totalItems > 0 ? (
    <Slick>
      <Slick.Heading>
        <h2>{title}</h2>
        <SlickDotContainer lowestVisibleIndex={lowestVisibleIndex} itemsInRow={itemsInRow} totalItems={totalItems} />
      </Slick.Heading>
      <Slick.Galery>
        {sliderHasMoved && <Slick.Control direction={"left"} onClick={handlePrev} currentHeight={calHeight} currentTop={calTop} />}
        <div ref={contentDivRef}>
          <Slick.Content translateXValue={calTransformOutput.translateXValue} transitionDurationValue={calTransformOutput.transDuration} onTransitionEnd={handleTransitionEnd}>
            <SlickContentContainer {...{ lowestVisibleIndex, itemsInRow, totalItems, sliderHasMoved, movies }} />
          </Slick.Content>
        </div>
        <Slick.Control direction={"right"} onClick={handleNext} currentHeight={calHeight} currentTop={calTop} />
      </Slick.Galery>
    </Slick>
  ) : (
    <></>
  );
}
