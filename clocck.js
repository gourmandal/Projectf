Inside src,inside components create clock.js
function Clock()
{
    function showDate()
    {
        console.log(new Date().toString())
        return <div>{new Date().toString()}</div>
    }
    setInterval(showDate,1000)
    return <div>{showDate()}</div>
}

export default Clock;

App.js
import React from 'react';
import Welcome from './components/Welcome';
import Clock from './components/Clock';
function App()
{
  return (
    <Clock/>
  )
  
}
export default App;
Case 1:using flag as a dependency variable of array
In the below example each time when we change flag value,the value of  statevariable time is returned
clock.js
import React,{useState,useEffect} from 'react';
function Clock()
{
    const [time,setTime]=useState(new Date().toString())
    const [flag,setFlag]=useState(true)
    useEffect(()=>{ 
        console.log("Component is updated successfully")
    },[flag]);   
    return <div>{time}</div>
}

//export default Clock;
//Case 2:using time as a dependency variable of array
In the below example,the component returns the value of state variable time.The initial value of time is current date and time.
The useEffect hook gets executed as the time changes.
useEffect internally calls  showDate() for every 1000ms=1s,
with the help of  setInterval()
import React,{useState,useEffect} from 'react';
function Clock()
{
    const [time,setTime]=useState(new Date().toString())
    const [flag,setFlag]=useState(true)
    useEffect(()=>{ 
        console.log("Component is updated successfully")
        const interval=setInterval(showDate,1000)
    },[time]);

    function showDate()
    {
        setTime(new Date().toString())
        //it will set time to the cur time
    }
   
    return <div>{time}</div>
}

export default Clock;