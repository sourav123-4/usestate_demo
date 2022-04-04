import React from 'react'
import './App.css'
export default function App(){
    const [count,setCount]=React.useState(0)
    function minus(){
        setCount(prev=>prev-1)
    }
    function plus(){
        setCount(prev=>prev+1)
    }
    return(
        <div className='usestate'>
            <button className='btn1' onClick={minus}>-</button>
            <h1 className='number'>{count}</h1>
            <button className='btn2' onClick={plus}>+</button>
        </div>
    )
}