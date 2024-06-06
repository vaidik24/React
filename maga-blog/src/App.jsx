import "./App.css";

function App() {
  // console.log(process.env.REACT_APP_APPWRITE_URL);
  console.log(import.meta.env.VITE_APPWRITE_PROJECT_ID);
  return (
    <>
      <h1>Hello from Blog site</h1>
    </>
  );
}

export default App;
