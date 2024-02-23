import { Button, TextField, Typography } from '@mui/material'
import React from 'react'

const Login = () => {
  return (
    <div>
        <h1></h1>
        {/* <input placeholder='username'/> */}
        <br />
        {/* <input placeholder='password'/> */}
        <br />
        {/* <button>Submit</button> */}
        <Typography variant="h1">Login page</Typography>
        <br /><br /><br />
        <TextField variant="outlined" label="username"></TextField>
        <br /><br />
        <TextField variant="filled" label="username"></TextField>
        <br /><br />
        <TextField variant="standard" label="username"></TextField>
        <br /><br />
        <Button variant="text">Text</Button>
        <br /><br />
        <Button variant="contained">contained</Button>
        <br /><br />
        <Button variant="outlined">outlined</Button>
        <br /><br />


        

    
    </div>
    
  )
}

export default Login