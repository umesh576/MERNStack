import Card from "./componment/Card";

function App() {
  return (
    <>
      <h1 className="text-3xl font-bold underline bg-red-400 text-red">
        Hello world!
      </h1>

      <Card username="umeshjoshi" />
      <button className="text-white px-4 sm:px-8 py-2 sm:py-3 bg-sky-700 hover:bg-sky-800">
        Submit
      </button>
    </>
  );
}

export default App;
