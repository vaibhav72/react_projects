import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import axios from "axios";

const App = () => {
  useEffect(() => {
    const fetchData = async () => {
      const data = await axios("https://jsonplaceholder.typicode.com/posts");
      console.log(data);
      setPosts(data.data);
    };

    fetchData();
  }, []);
  const [posts, setPosts] = useState([]);
  return (
    <div className="container">
      {posts.map((e) => {
        return <div className="card my-3">
        <div className="card-body">
            <h5 className="card-title">{e.title}</h5>
            <p className="card-text">{e.body}</p>
            <a href="#" className="btn btn-primary">Read More</a>
        </div>
        </div>;
      })}
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
