import React from "react";
import { Link,Route, Routes,useLocation} from "react-router-dom";
import Cars from "./Cars";
import Dogs from "./Dogs";
import Recipe from "./Recipe";

const Blog = () => {
  const { pathname } = useLocation();
  console.log(pathname)
  return (
    <div>
      <ul>
        <li>
          <Link to={`dogs`}>Dogs</Link>
        </li>
        <li>
          <Link to={`recipe`}>Recipe</Link>
        </li>
        <li>
          <Link to={`cars`}>Cars</Link>
        </li>
      </ul>

     <div> <Routes>
        <Route path={`dogs`} element={<Dogs/>}></Route>
        <Route path={`cars`} element={<Cars/>}></Route>
        <Route path={`recipe`} element={<Recipe/>}></Route>
      </Routes></div>
    </div>
  );
};

export default Blog;
