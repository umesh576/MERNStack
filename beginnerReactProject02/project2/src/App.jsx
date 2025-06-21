import StudentCard from "./StudentCard";

function App() {
  const studentName = ["umesh", "joshi", "kxa.com"];
  return (
    <>
      {studentName.map((name) => {
        <StudentCard stName={name} />;
      })}
    </>
  );
}

export default App;
