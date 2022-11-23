import React, { createContext, useState } from "react";

export const ExpenseContext = createContext();

export const ExpenseContextProvider = (props) => {
  const [entries, setEntries] = useState([
    { id: 1, description: "Pizza", amount: -20 },
    { id: 2, description: "Salary", amount: 10 },
    { id: 3, description: "Uber", amount: -30 },
    { id: 4, description: "Tax return", amount: 50 },
  ]);
  const handleDelete=(id)=>{setEntries(entries.filter((element)=>element.id!==id))}
  const addEntry=(newEntry)=>{
    setEntries([...entries,newEntry])
  }
  return (
    <ExpenseContext.Provider value={{ entries ,handleDelete,addEntry}}>
      {props.children}
    </ExpenseContext.Provider>
  );
};
