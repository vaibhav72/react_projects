import React from "react";

const Contacts = (props) => {
  return (
    <div className="list-group">
      {props.contacts.map((e) => {
        return (
          <li key={e.email} className="list-group-item">
            {e.name} {e.email}{" "}
            <button
              onClick={()=>props.handleDelete(e.email)}
              className="btn btn-danger mx-2"
            >
              Delete
            </button> <button
              onClick={()=>props.handleEdit(e.email)}
              className="btn btn-warning mx-2"
            >
           Edit
            </button>
          </li>
        );
      })}
    </div>
  );
};
export default Contacts;
