import React from "react";
import  ReactDOM  from "react-dom/client";
import './App.css'
import './components/navbar'
import Navbar from "./components/navbar";
const App=()=>{
    return <div><Navbar/></div>
}


const root=ReactDOM.createRoot(document.getElementById('root'))

root.render(<App/>);