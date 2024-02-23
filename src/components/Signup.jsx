import React, { useState } from 'react'
import { TextField,Button } from '@mui/material'
const Signup = () => {
    var[data,setData]=useState();
    const Inputhandler=(e) =>{
        
        setData({...data,[e.target.name]:e.target.value})
        console.log(data);
    }
  return (
    <div>
        <h1>Signup Form</h1>
        <TextField variant="outlined" name="username" label="username" onChange={Inputhandler}></TextField>
        <br /><br />
        <TextField variant="outlined" name="password" label="password" onChange={Inputhandler}></TextField>
        <br /><br />
        <TextField variant="outlined" name="email" label="email" onChange={Inputhandler}></TextField><br /><br />
        <Button varian="contained">submit</Button>

    </div>
  )
}

export default Signup