import { useCallback, useState, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [isNumber, setIsNumber] = useState(false);
  const [isString, setIsString] = useState(false);
  const [password, setPassword] = useState("");

  // REF HOOK
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTWXYZabcdefghijklmnopqrstuvwxyz";
    if (isNumber) {
      str += 123445678910;
    }
    if (isString) {
      str += "@#$%^&";
    }
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    console.log(pass);
    console.log(length);
    setPassword(pass);
  }, [isNumber, isString, length, setPassword]);

  const copypasswordToClipBoard = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, isNumber, isString, passwordGenerator]);

  return (
    <div className="w-full max-w-md  mx-auto  shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700">
      <h1 className="text-white text-center">Password generator</h1>
      <div className="flex shadow-md pt-3 rounded-lg mb-4 pb-5 overflow-hidden">
        <input
          type="text"
          className="outline-none rounded-lg w-full py-1 bg-white  px-3"
          placeholder="Password"
          value={password}
          readOnly
          ref={passwordRef}
        />
        <button
          type="password"
          className="rounded-lg px-5 bg-blue-500 text-white "
          onClick={copypasswordToClipBoard}
        >
          Copy
        </button>
      </div>
      <div className="flex">
        <div className="flex shadow-md px-3 py-2 cursor-pointer">
          <div className="flex">
            <input
              type="range"
              min={8}
              max={100}
              value={length}
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label>Length:{length}</label>
          </div>
        </div>
        <div className="flex justify-center items-center gap-3  ">
          <div className="flex gap-2">
            <input
              type="checkbox"
              value={isNumber}
              defaultChecked={isNumber}
              onChange={() => {
                setIsNumber((prev) => !prev);
              }}
            />
            <label>Number</label>
          </div>
          <div className="flex gap-2">
            <input
              type="checkbox"
              value={isString}
              onChange={() => {
                setIsString((prev) => !prev);
              }}
            />
            <label>String</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
