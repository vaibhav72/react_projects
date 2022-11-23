import React,{useState} from "react";
import ReactDOM from "react-dom/client";


const App = () => {
    const [count,setCount]=useState(0)
    const handleClick=()=>{
        setCount(count+1)
    }
  return (
   <div><h1>{count}</h1>
   <button onClick={handleClick} className='btn btn-primary'>Increment</button>
   </div>
  )
}
const root=ReactDOM.createRoot(document.getElementById('root'))
root.render(<React.StrictMode><App/></React.StrictMode>)
