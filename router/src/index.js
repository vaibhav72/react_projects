import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/About";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Home from "./components/Home";
import NavBar from "./NavBar";
import "./App.css";
import { AuthContextProvider } from "./context/authContext";
import Admin from "./components/Admin";

const App = () => {
  return (
    <AuthContextProvider>
      <BrowserRouter>
        <NavBar></NavBar>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/blog/*" element={<Blog />}></Route>
          <Route path="/admin" element={<Admin></Admin>}></Route>
        </Routes>
      </BrowserRouter>
    </AuthContextProvider>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
