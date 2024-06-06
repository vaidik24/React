import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import authService from "./appwrite/auth";
import { login, logout } from "./store/authSlice";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  // console.log(process.env.REACT_APP_APPWRITE_URL);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => setLoading(false));
  }, []);

  return !loading ? (
    <div className="min-h-screen flex flex-wrap content-between bg-gray-400">
      <div className=" w-full block ">
        <Header />
        <main></main>
        <Footer />
      </div>
    </div>
  ) : (
    <div>
      <div className="flex justify-center items-center h-screen bg-gray-400">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-200">
          Loading
        </div>
      </div>
    </div>
  );
}

export default App;
