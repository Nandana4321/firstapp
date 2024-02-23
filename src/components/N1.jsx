import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'

const N1 = () => {
    var[inp,setInp]=useState(["abcde"]);
    var[data,setData]=useState();
    const handleinput=(e)=>{
        console.log("on");
        setData(e.target.value);
        console.log("inp",data);
    }
    const add=()=>{
        console.log("c")
        setInp([...inp,data]);
        console.log("sub",inp)
        setData("")
    }

  return (
    <div>
        <br /><br />
        <TextField variant="outlined" label="write something" onChange={handleinput} value={data} ></TextField>
        
        
        <br /><br />
        <Button variant="text" onClick={add}>Submit</Button>
        <br /><br />
        <ul>
            {inp.map((v,i)=>{
                return <li key={i}>{v}</li>
            }
            
            )}
        
        </ul>

    </div>
  )
}

export default N1