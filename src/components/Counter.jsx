import React, { useState } from 'react'
import { Typography,Button } from '@mui/material'
const Counter=() =>{
    var[Count,setCount]=useState(0);
    const add=() =>{
        console.log("add btn  is clicked");
        setCount(Count+1);
    }
    
    const sub=() =>{
        console.log("sub btn is clicked");
        setCount(Count-1);
    }

  return (
    <div>
        <Typography variant="h3">Count;{Count}</Typography>
        <br />
        <Button variant="contained" color="success" onClick={add}>+</Button>&nbsp;
        <Button variant="contained" color="error" onClick={sub}>-</Button>
    </div>
  )
}

export default Counter