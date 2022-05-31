import React from 'react';
import './App.css';
import { useState ,useEffect} from 'react'

/* const Person=(props)=>{
  return(
  <>
    <h1>trying function in same page {props.id}</h1>
    <h1>react is so cool {props.name}</h1>
  </>)
} */

function App() {
  const [x,setx]=useState(0)

  function minus(){
setx(x-1)
  }
/* const plus=()=>{
  setx(x+1)
} */

useEffect(()=>{
  /* alert('welcome visitor  ') 
      this function (first parameter) is executed whenever variable in the next argument got changed */
      setx(50)} ,[])
              

  return (
    <div className="App">

<button onClick={()=>{minus()}}>-</button>
<h1>count is {x} </h1>
{/* <button onClick={()=>plus()}>+</button> */}
<button onClick={()=>setx((prevx)=>prevx+1)}>+</button>
{/* <button onClick={()=>alert('clicked')}>-</button>
<button onClick={()=>{setx(2)}}>-</button> */}








{/* <Person id={1} name='awad'/>
<Person id={2} name='matheo'/>
<Person id={3} name='jane'/> */}
{/*const name=null
 const login=true8?/*       <h1 style={{color:'green',backgroundColor:'red'}}>we will start our journey {name==='awad'? 'awad' :'all'}{2+2}</h1>
{name ? (<h1>going along {name}</h1>):<><a href='google.com'>going </a><p>going far-name is null</p></>}
{login?'helloo user':'signup or login'} */}
    </div>
  );
}

export default App;
