import { useState, useEffect } from "react";

function App() {
  const [color, setColor] = useState("white");

  useEffect(() => {
    const colors = [
      "#FF5733", // Vibrant Red-Orange
      "#33FF57", // Bright Green
      "#3357FF", // Bright Blue
      "#FF33FF", // Vibrant Pink
      "#33FFF5", // Bright Cyan
      "#FFF533", // Bright Yellow
      "#FF3380", // Bright Magenta
      "#FF9D33", // Vibrant Orange
      "#D433FF", // Vibrant Purple
      "#33FF83", // Bright Lime Green
    ];
    let colorIndex = 0;

    const intervalId = setInterval(() => {
      setColor(colors[colorIndex]);
      colorIndex = (colorIndex + 1) % colors.length;
    }, 1000); // Change color every second

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <div
        className="w-full h-screen duration-500"
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 ">
          <div className="flex justify-center flex-wrap gap-3 shadow-lg bg-white px-3 py-2 rounded-full">
            <button
              className="outline-none px-4 rounded-full text-white shadow-lg bg-red-600 py-1"
              onClick={() => setColor("red")}
            >
              Red
            </button>
            <button
              className="outline-none px-4 rounded-full text-white shadow-lg bg-blue-600 py-1"
              onClick={() => setColor("blue")}
            >
              Blue
            </button>
            <button
              className="outline-none px-4 rounded-full text-white shadow-lg bg-green-600 py-1"
              onClick={() => setColor("green")}
            >
              Green
            </button>
            <input
              type="color"
              value={color}
              onChange={(e) => setColor(e.target.value)}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
