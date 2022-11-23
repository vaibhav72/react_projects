import React, { useEffect, useState } from "react";
import axios from "axios";
import Loader from "./loader";
import Paginate from "./Paginate";
const Giphy = () => {
  const [data, setData] = useState([]);
  const [search ,setSearch]=useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(25);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

const handleSearchChange=(event)=>{
  setSearch(event.target.value);
}

const handleSubmit=async (event)=>{
  event.preventDefault();
  setIsError(false);
  setIsLoading(true);
  try {
    const results = await axios("https://api.giphy.com/v1/gifssearch", {
      params: {
        api_key: "CiTqC6y4cr5rkUUwXKBpaf7uqQ7ife0Y",
       q:search
      },
    });
    console.log(results);
    setData(results.data.data);
  } catch (e) {
    setIsError(true);
    setTimeout(() => setIsError(false), 4000);
  }
  setIsLoading(false)
}
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setIsError(false);
      try {
        const results = await axios("https://api.giphy.com/v1/gifs/trending", {
          params: {
            api_key: "CiTqC6y4cr5rkUUwXKBpaf7uqQ7ife0Y",
            limit: 100,
          },
        });
        console.log(results);
        setData(results.data.data);
      } catch (e) {
        setIsError(true);
        setTimeout(() => setIsError(false), 4000);
      }
      setIsLoading(false);
    };
    fetchData();
  }, []);

  const renderGifs = () => {
    if (isLoading) return <Loader />;
    return currentItems.map((e) => {
      return (
        <div key={e.id} className="gif">
          <img src={e.images.fixed_height.url}></img>
        </div>
      );
    });
  };

  const renderError = () => {
    return <p>unable to get gifs try again later</p>;
  };

  const pageSelected = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  if (isError)
    return (
      <div
        className="alert alert-warning alert-dismissable fade show"
        role="alert"
      >
        {renderError()}
      </div>
    );
  return (
    <div className="m-2">
      <h1>{data.length / itemsPerPage}</h1>
      <div>
        
        <form action="" className="form-inline justify-content-center m-2">
          <input value={search} onChange={handleSearchChange} type="text" className="form-control" placeholder="Search" />
          <button onClick={handleSubmit} className="btn btn-primary">Go</button>
        </form>
      </div>
      <Paginate
        pageSelected={pageSelected}
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
        totalItems={data.length}
      ></Paginate>
      <div className="container gifs">{renderGifs()}</div>
    </div>
  );
};
export default Giphy;
