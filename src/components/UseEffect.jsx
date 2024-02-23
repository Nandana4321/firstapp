import React, { useState,useEffect } from 'react'
import { Typography,Button ,} from '@mui/material'
const UseEffect = () => {
    var [x,setx]=useState()
    const react=()=>{
         setx("React");
    }
    const react1=()=>{
        setx("Angular");
   }
   const react2=()=>{
    setx("Next");
}
useEffect(()=>{react1();},[]);
  return (
    <div>
        <Typography variant="h4">Welcome to {x}</Typography>
        <Button varaiant="contained" color="primary"onClick={react}>React</Button>
        <Button variant="contained" color="success"onClick={react1}>Angular</Button>
        <Button variant="contained" color="success"onClick={react2}>Next</Button>
    </div>
  )
}

export default UseEffect