import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import axios from "axios";

const App = () => {
  const [images, setImages] = useState([]);
  const [search, setSearch] = useState("");
  //   useEffect(() => {
  //     const fetchData = async () => {
  //       const result = await axios("https://api.pexels.com/v1/search", {
  //         params: { query: "dogs" },
  //         headers: {
  //           Authorization:
  //             "563492ad6f91700001000001ad3e58c94cf34e9197d0cbf4fe2b9156",
  //         },
  //       });
  //       console.log(result);
  //       setImages(result.data.photos);
  //     };
  //     fetchData();
  //   }, []);

  const renderImages = () => {
    return images.map((e) => {
      return (
        <div>
          <div className="card m-3">
            <img src={e.src.medium}></img>
            <div className="card-body">
              <p className="card-text">PhotoGrapher - {e.photographer}</p>
            </div>
          </div>
        </div>
      );
    });
  };
  const handleSearchChange = (events) => {
    setSearch(events.target.value);
  };

  const handleSubmit = () => {
    const fetchData = async () => {
      const result = await axios("https://api.pexels.com/v1/search", {
        params: { query: search },
        headers: {
          Authorization:
            "563492ad6f91700001000001ad3e58c94cf34e9197d0cbf4fe2b9156",
        },
      });
      console.log(result);
      setImages(result.data.photos);
    };
    fetchData();
  };
  return (
    <div>
      <div>
        <input
          value={search}
          onChange={handleSearchChange}
          className="form-control"
          placeholder="Search"
        ></input>
        <button onClick={handleSubmit} className="btn btn-primary">
          Search
        </button>
      </div>
      <div className="row justify-content-center">{renderImages()}</div>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
