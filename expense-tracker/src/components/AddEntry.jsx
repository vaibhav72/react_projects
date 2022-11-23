import React, { useState, useContext } from "react";
import { ExpenseContext } from "./contexts/expenseContext";

const AddEntry = () => {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const { addEntry, entries } = useContext(ExpenseContext);
  return (
    <div className="border border-info rounded p-3 mt-4">
      <form className="form-group">
        <div className="form-group">
          <label htmlFor="description">description</label>
          <input
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            type="text"
            className="form-control"
            id="description"
          />
        </div>
        <div className="form-group">
          <label htmlFor="amount">amount</label>
          <input
            onChange={(e) => {
              setAmount(e.target.value);
            }}
            type="number"
            className="form-control"
            id="amount"
          />
        </div>

        <button
          type="submit"
          onClick={(e) => {
            e.preventDefault()
            const newEntry = { id: entries.length+1, description, amount };
            addEntry(newEntry);
          }}
          className="btn btn-info mt-3"
        >
          Add Entry
        </button>
      </form>
    </div>
  );
};

export default AddEntry;
