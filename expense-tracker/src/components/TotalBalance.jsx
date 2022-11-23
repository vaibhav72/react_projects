import React ,{useContext} from 'react'
import { ExpenseContext } from './contexts/expenseContext'

const TotalBalance = () => {
 const {entries}=   useContext(ExpenseContext)
 let sum=0;
 console.log(entries)
 entries.forEach(element => {
    sum+=parseInt(element.amount);
 });
  return (
    <div> <h2 className="display-3 text-center">${sum}</h2></div>
  )
}

export default TotalBalance