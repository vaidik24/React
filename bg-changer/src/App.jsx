import { useState } from "react";

function App() {
  const [color, setColor] = useState("white");
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
              onChange={() => setColor(event.target.value)}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
