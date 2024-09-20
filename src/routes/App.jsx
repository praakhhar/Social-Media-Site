import { useState } from "react";

import Footer from "../../component/Footer";
import Header from "../../component/Header";
import Sidebar from "../../component/Sidebar";
import "./App.css";

import PostListProvider from "../../store/post-list-store";
import { Outlet } from "react-router-dom";

function App() {
  let [currState, setCurrState] = useState("Home");
  return (
    <>
      <PostListProvider>
        <div className="main-container">
          <Sidebar currState={currState} setCurrState={setCurrState}></Sidebar>
          <div className="content">
            <Header></Header>
            <Outlet />

            <Footer> </Footer>
          </div>
        </div>
      </PostListProvider>
    </>
  );
}

export default App;
