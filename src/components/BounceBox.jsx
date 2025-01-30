import { useEffect, useState, useRef } from "react";

const BounceBox = ({
  colorChangeSpeed,
  totalColumns,
  totalRows,
  trail,
  red,
  setRed,
  green,
  setGreen,
  blue,
  setBlue,
}) => {
  const [column, setColumn] = useState(0);
  const [direction, setDirection] = useState(1);
  const columnRefs = useRef([]);

  useEffect(() => {
    const interval = setInterval(() => {
      // Direction change logic
      if (direction === 1) {
        setColumn(column + 1);
        if (column === totalColumns) {
          setDirection(0);
        }
      } else {
        setColumn(column - 1);
        if (column === trail - 1) {
          setDirection(1);
        }
      }

      // Color change logic
      if (green > 0 && red === 0) {
        setGreen(green - colorChangeSpeed);
        setBlue(blue + colorChangeSpeed);
      } else if (blue > 0 && green === 0) {
        setBlue(blue - colorChangeSpeed);
        setRed(red + colorChangeSpeed);
      } else if (red > 0) {
        setRed(red - colorChangeSpeed);
        setGreen(green + colorChangeSpeed);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [column, direction, red, green, blue]);

  const getColor = (i, j, column) => {
    for (let k = 0; k <= trail; k++) {
      if (column - k === i) {
        const opacity = direction ? 1 - k / trail : k / trail;
        return {
          backgroundColor: `rgba(${red}, ${green}, ${blue}, ${opacity})`,
        };
      }
    }
    return { backgroundColor: "rgb(0, 0, 0)" };
  };

  return (
    <div className="h-auto w-auto bg-gray-900 m-1 rounded-lg p-1">
      <div className="flex">
        {/* Create the grid */}
        {Array.from({ length: totalColumns }).map((_, i) => (
          <div key={i} ref={(el) => (columnRefs.current[i] = el)} className="">
            {Array.from({ length: totalRows }).map((_, j) => (
              <div
                key={j}
                className="h-[3vh] w-[3vh] m-[1.5px] p-1
                    cursor-pointer hover:border-2 hover:border-white hover:rounded-sm
                "
                style={{
                  ...getColor(i, j, column),
                }}
              ></div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BounceBox;
