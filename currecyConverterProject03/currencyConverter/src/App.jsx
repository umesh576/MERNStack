import { useState } from "react";

function App() {
  const [result, setResult] = useState(10);

  // const [currency, calcCurrency] = useEffect(() => {}, [result, currency]);
  return (
    <div className="w-full bg-white flex justify-center items-center h-screen">
      <div className=" flex justify-center items-center  bg-blue-700 p-6">
        <div className=" rounded-lg p-6 bg-white  ">
          <div className="">
            <div className="flex">
              <div>
                <div>
                  <label>from</label>
                </div>
                <input
                  type="number"
                  placeholder="Enter rupee"
                  className="bg-gray-300 outline-1 rounded-lg p-2"
                />
              </div>
            </div>
            <div className="mt-5">
              <div className="flex gap-3">
                <div>
                  <label>Choose currencyType</label>
                </div>
                <select
                  name="selectType"
                  id="selectType"
                  className="bg-gray-300 outline-1 rounded-lg p-2"
                >
                  <option value="1">usd</option>
                  <option value="1">NPR</option>
                  <option value="1">INR</option>
                </select>
              </div>
            </div>
          </div>
          <p>Result:{result}</p>
          <button className="w-full bg-blue-500 mt-4 p-1 rounded-lg text-2xl text-center cursor-pointer">
            Swap
          </button>
          <div></div>
          <button
            className="w-full bg-blue-500 mt-4 p-1 rounded-lg text-2xl cursor-pointer"
            onClick={{ setResult }}
          >
            Convert
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
