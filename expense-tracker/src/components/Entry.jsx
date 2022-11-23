import React ,{useContext}from "react";
import { ExpenseContext } from "./contexts/expenseContext";

const Entry = (props) => {
    const {handleDelete}=useContext(ExpenseContext)
  return (
    <div>
      <li
        className={`entry-item mt-2 list-group-item list-group-item-action list-group-item-${
          props.entry.amount > 0 ? "success" : "danger"
        }`}
      >
        {props.entry.description}
       
        <button className="close-button close" onClick={()=>handleDelete(props.entry.id)}>
          <span aria-hidden="true">&times;</span>
        </button> <span className="float-right"> {props.entry.amount}</span>
      </li>
    </div>
  );
};

export default Entry;
