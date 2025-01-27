import "./App.css";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import { useDispatch } from "react-redux";
import { login } from "./redux/authSlice.js";
import authServices from "./services/auth.js";
import { useEffect } from "react";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    authServices.getCurrentUser().then((data) => {
      dispatch(login(data));
    });
  }, []);

  return (
    <div className="flex flex-col h-full">
      <div>
        <Header />
      </div>

      <main className="mt-5 flex justify-center items-center grow">
        <Outlet />
      </main>
    </div>
  );
};

export default App;
