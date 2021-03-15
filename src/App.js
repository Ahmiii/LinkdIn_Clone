import React from "react";
import Header from "./app/container/Header/Header";
import Sidebar from "./app/container/SidePanal/Sidebar";
import Feed from "./app/components/Feed/Feed";
import Login from "./app/components/Login/Login";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import "./App.css";

function App() {
  const user = useSelector(selectUser);
  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <>
          <Header />
          <div className="app__body">
            <Sidebar />
            <Feed />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
