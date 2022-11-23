import React from 'react'
import AddEntry from './components/AddEntry'
import { ExpenseContextProvider } from './components/contexts/expenseContext'
import Entries from './components/Entries'
import Summary from './components/Summary'
import TotalBalance from './components/TotalBalance'
import './App.css'
 const App = () => {
  return (
    <ExpenseContextProvider>
    <div className='container justify-content-center'>
        <TotalBalance/>
        <Summary/>
        <AddEntry/>
        <Entries/>
    </div></ExpenseContextProvider>
  )
}

export default App