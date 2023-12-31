import React, { useContext, useEffect, useRef } from "react";
import CustomCursorContext from "./context/CustomCursorContext";

const CustomCursor = () => {
  const { type } = useContext(CustomCursorContext);
  const secondaryCursor = useRef(null);
  const mainCursor = useRef(null);
  const positionRef = useRef({
    mouseX: 0,
    mouseY: 0,
    destinationX: 0,
    destinationY: 0,
    distanceX: 0,
    distanceY: 0,
    key: -1,
  });

  useEffect(() => {
    const moveCursor = (event) => {
      const { clientX, clientY } = event;

      if (secondaryCursor.current) {
        positionRef.current.mouseX =
          clientX - secondaryCursor.current.clientWidth / 2;
        positionRef.current.mouseY =
          clientY - secondaryCursor.current.clientHeight / 2;
      }

      if (mainCursor.current) {
        mainCursor.current.style.transform = `translate3d(${clientX -
          mainCursor.current.clientWidth / 2}px, ${clientY -
          mainCursor.current.clientHeight / 2}px, 0)`;
      }
    };

    document.addEventListener("mousemove", moveCursor);

    return () => {
      document.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  useEffect(() => {
    const followMouse = () => {
      positionRef.current.key = requestAnimationFrame(followMouse);
      const {
        mouseX,
        mouseY,
        destinationX,
        destinationY,
        distanceX,
        distanceY,
      } = positionRef.current;

      if (!destinationX || !destinationY) {
        positionRef.current.destinationX = mouseX;
        positionRef.current.destinationY = mouseY;
      } else {
        positionRef.current.distanceX = (mouseX - destinationX) * 0.1;
        positionRef.current.distanceY = (mouseY - destinationY) * 0.1;
        positionRef.current.destinationX += distanceX;
        positionRef.current.destinationY += distanceY;
      }

      if (secondaryCursor.current) {
        secondaryCursor.current.style.transform = `translate3d(${positionRef.current.destinationX}px, ${positionRef.current.destinationY}px, 0)`;
      }
    };

    followMouse();
  }, []);

  return (
    <div className={`cursor-wrapper ${type}`}>
      <div className="main-cursor" ref={mainCursor}>
        <div className="main-cursor-background"></div>
      </div>
      <div className="secondary-cursor" ref={secondaryCursor}>
        <div className="cursor-background"></div>
      </div>
    </div>
  );
};

export default CustomCursor;
