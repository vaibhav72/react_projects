import React from "react";
const Paginate = (props) => {
  const pageNumbers = [];
  for (
    let index = 1;
    index <= Math.ceil(props.totalItems / props.itemsPerPage);
    index++
  ) {
    pageNumbers.push(index);
  }
  return (
    <nav>
      <ul className="pagination pagination-sm justify-content-end border-0">
        {pageNumbers.map((el) => {
       let   classes='page-item';
          if(el===props.currentPage)
          classes='page-item active'
          return (
            <li className={classes}>
              <a href="#" onClick={()=>props.pageSelected(el)} className="page-link">
                {el}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
export default Paginate;
