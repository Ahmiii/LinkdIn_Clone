import React from "react";
import Header from "./app/container/Header/Header";
import Sidebar from "./app/container/SidePanal/Sidebar";
import Feed from "./app/components/Feed/Feed";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app__body">
        <Sidebar />
        <Feed />
      </div>
    </div>
  );
}

export default App;
