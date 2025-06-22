function App() {
  return (
    <div className=" flex justify-center items-center h-full">
      <div className="w-full rounded-lg p-3">
        <div>
          <div className="flex">
            <div>
              <label>from</label>
              <input type="number" />
            </div>
          </div>
          <div>
            <div>
              <label>currencyType</label>
              <select name="selectType" id="selectType">
                <option value="1">usd</option>
                <option value="1">NPR</option>
                <option value="1">INR</option>
              </select>
            </div>
          </div>
        </div>
        <button>swap</button>
        <div></div>
        <button>Convert</button>
      </div>
    </div>
  );
}

export default App;
