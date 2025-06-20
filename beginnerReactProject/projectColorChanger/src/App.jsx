import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");
  return (
    <>
      <div
        className="w-screen h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex justify-center flex-wrap gap-3 shadow-lg bg-white rounded-xl px-2 py-3">
            <button
              onClick={() => {
                setColor("red");
              }}
              className="outline-none px-4 text-white shadow-lg broder-black"
              style={{ backgroundColor: "red" }}
            >
              Red
            </button>
            <button
              onClick={() => {
                setColor("green");
              }}
              className="outline-none px-4 text-white shadow-lg"
              style={{ backgroundColor: "green" }}
            >
              Green
            </button>
            <button
              onClick={() => {
                setColor("yellow");
              }}
              className="outline-none px-4 text-black shadow-lg"
              style={{ backgroundColor: "yellow" }}
            >
              yellow
            </button>
            <button
              onClick={() => {
                setColor("black");
              }}
              className="outline-none px-4 text-white shadow-lg"
              style={{ backgroundColor: "black" }}
            >
              Black
            </button>
            <button
              onClick={() => {
                setColor("white");
              }}
              className="outline-none px-4 text-black shadow-lg"
              style={{ backgroundColor: "white" }}
            >
              White
            </button>
            <button
              onClick={() => {
                setColor("blue");
              }}
              className="outline-none px-4 text-white shadow-lg"
              style={{ backgroundColor: "Blue" }}
            >
              Blue
            </button>
            <button
              onClick={() => {
                setColor("pink");
              }}
              className="outline-none px-4 text-white shadow-lg"
              style={{ backgroundColor: "pink" }}
            >
              Pink
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
