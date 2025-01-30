import React, { useEffect } from "react";
import BounceBox from "./components/BounceBox";
import { ThemeProvider } from "styled-components";
import Slider from "./components/Slider";
import Navbar from "./components/Navbar";

function App() {
  const [totalColumns, setTotalColumns] = React.useState(20);
  const [totalRows, setTotalRows] = React.useState(15);
  const [trail, setTrail] = React.useState(5);
  const [colorChangeSpeed, setColorChangeSpeed] = React.useState(1);
  const [red, setRed] = React.useState(0);
  const [green, setGreen] = React.useState(255);
  const [blue, setBlue] = React.useState(0);
  const [color, setColor] = React.useState("rgb(0, 255, 0)");

  const defaultValues = {
    totalColumns: 20,
    totalRows: 15,
    trail: 5,
    colorChangeSpeed: 1,
  };

  const handleReset = () => {
    setTotalColumns(defaultValues.totalColumns);
    setTotalRows(defaultValues.totalRows);
    setTrail(defaultValues.trail);
    setColorChangeSpeed(defaultValues.colorChangeSpeed);
  };

  useEffect(() => {
    setColor(`rgb(${red}, ${green}, ${blue})`);
  }, [red, green, blue]);

  return (
    <ThemeProvider theme={{ red, green, blue }}>
      <div className="h-screen w-screen bg-white">
        <Navbar />

        {/* Hero Section */}
        <div id="home" className="h-screen w-screen relative">
          <spline-viewer
            url="https://prod.spline.design/9T4QNtTDdCttd70D/scene.splinecode"
            className="w-full h-full"
          />
        </div>

        {/* Divider Line */}
        <div className="w-full h-[1px] bg-gray-600 opacity-30" />

        {/* Bouncing Box Section */}
        <div
          id="bounce"
          className="flex w-screen h-screen flex-row justify-around items-center"
          style={{
            background: "linear-gradient(90deg, #020210 0%, #060224 100%)",
          }}
        >
          <div
            className="space-y-4 p-6 rounded-lg"
            style={{
              background: "rgba(255, 255, 255, 0.1)",
              backdropFilter: "blur(10px)",
              WebkitBackdropFilter: "blur(10px)",
              boxShadow: "0 4px 30px rgba(255, 255, 255, 0.1)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
            }}
          >
            {Object.entries({
              Columns: [totalColumns, setTotalColumns, { min: 10, max: 30 }],
              Rows: [totalRows, setTotalRows, { min: 5, max: 20 }],
              Trail: [trail, setTrail, { min: 3, max: 10 }],
              Speed: [
                colorChangeSpeed,
                setColorChangeSpeed,
                { min: 1, max: 5 },
              ],
            }).map(([label, [value, setter, { min, max }]]) => (
              <Slider
                key={label}
                label={label}
                value={value}
                onChange={(e) => setter(parseInt(e.target.value))}
                min={min}
                max={max}
                activeColor={`rgb(${red}, ${green}, ${blue})`}
                className="text-white" // Add this className
              />
            ))}

            <button
              onClick={handleReset}
              style={{ background: color }}
              className="mt-4 w-full px-4 py-2 bg-[rgba(64,47,181,0.3)] hover:bg-[rgba(64,47,181,0.5)] 
                       text-white rounded-md transition-all duration-200 font-medium"
            >
              Reset Values
            </button>
          </div>
          <div className="z-40">
            <BounceBox
              totalColumns={totalColumns}
              totalRows={totalRows}
              trail={trail}
              colorChangeSpeed={colorChangeSpeed}
              red={red}
              setRed={setRed}
              green={green}
              setGreen={setGreen}
              blue={blue}
              setBlue={setBlue}
            />
          </div>
        </div>

        {/* Footer */}
        <footer className="w-full py-6 flex justify-center items-center bg-[#e3e3e3 ]">
          <a
            href="https://github.com/K-Daksh"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#6f3eff] font-['Jura'] text-lg hover:text-indigo-800 transition-colors duration-300 flex items-center gap-2"
          >
            Made with 💜 by Daksh Kitukale
          </a>
        </footer>
      </div>
    </ThemeProvider>
  );
}

export default App;
