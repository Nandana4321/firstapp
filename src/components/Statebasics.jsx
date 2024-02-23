import React, { useState } from 'react'
import { Typography,Button,TextField } from '@mui/material';
const Statebasics = () => {
    var [fname,setFname]=useState("Nandana");
    var [val,setVal]=useState();
    const handleInput=(e) =>{
    //console.log(e.target.value);
    setVal(e.target.value);
    console.log(val);
    }
    const submithandler=()=>{
        console.log("clicked");
        setFname(val);
    }
  return (
    <div>
        <Typography variant="h4">Welcome {fname}</Typography>
        <br /><br />
        <TextField variant='outlined'  onChange={handleInput} label="Type Your Name"></TextField>
        <Button variant='contained'  onClick={submithandler} >submit</Button>
        
        </div>
  )
}

export default Statebasics