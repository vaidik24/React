import "./App.css";
import Card from "./components/Card";
function App() {
  return (
    <>
      <h1 className="bg-green-500 p-2 rounded-xl mb-4">tailwind test</h1>
      <Card username="vaidik" btntext="click me" />
      <Card username="hanu " />
      <Card username="shikha" />
    </>
  );
}

export default App;
