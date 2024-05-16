import { useState } from "react";
import "./App.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import PostContext from "../store/post-store";
import { Outlet } from "react-router-dom";

function App() {
  const [selectedTab, setselectedTab] = useState("Home");

  return (
    <>
      <PostContext>
        <div className="box-container">
          <Sidebar selectedTab={selectedTab} setselectedTab={setselectedTab} />
          <div className="box">
            <Navbar />
            <div className="feed-container">
              {/* {selectedTab === "Home" ? <Feed /> : <Post />} */}
              <Outlet />
            </div>
            <Footer />
          </div>
        </div>
      </PostContext>
    </>
  );
}

export default App;
