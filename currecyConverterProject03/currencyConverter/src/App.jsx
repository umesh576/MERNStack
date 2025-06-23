import React from "react";

const App = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center ">
      <div className="p-4 px-6 bg-white backdrop-blur-md border border-white/30 rounded-xl shadow-lg">
        <div>
          <div className="w-full flex justify-between bg-white border border-white/30 rounded-xl shadow-lg p-6 ">
            <div>
              <p>From</p>
              <input type="number" className="bg-gray-200" />
            </div>
            <div>
              <p>Currecy Type</p>
              <select name="" id="currencyType">
                <option value="USD">USD</option>
                <option value="NPR">NPR</option>
              </select>
            </div>
          </div>
          <div className="w-full flex justify-center">
            <button className="px-3 py-1 bg-blue-500 text-white rounded-lg cursor-pointer">
              Swap
            </button>
          </div>
          <div className="flex backdrop-blur-md bg-white/10 border border-white/30 rounded-xl shadow-lg p-6">
            <div>
              <p>To</p>
              <input type="number" className="bg-gray-200" />
            </div>
            <div>
              <p>Currecy Type</p>
              <select name="" id="currencyType">
                <option value="USD">USD</option>
                <option value="NPR">NPR</option>
              </select>
            </div>
          </div>
          <div className="w-full flex justify-center my-4 ">
            <button className="px-3 py-2 w-full bg-blue-500 text-white rounded-lg cursor-pointer 0">
              convert usd to NPR
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
