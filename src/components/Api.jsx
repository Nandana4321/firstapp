import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios, { Axios } from 'axios';
import React, { useEffect, useState } from 'react'

const Api = () => {
    var[user,setUser]=useState([]);
    useEffect(()=>{
        axios.get("http://localhost:4000/student").then((response)=>{
            console.log(response.data)
            setUser(response.data);
        })
    })
  return (
    
    <div>
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Age</TableCell>
                        <TableCell>Department</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {user.map((val,i)=>{
                        return(
                            <TableRow>
                                <TableCell key={i}>{val.name}</TableCell>
                                <TableCell key={i}>{val.age}</TableCell>
                                <TableCell key={i}>{val.department}</TableCell>
                            </TableRow>
                        )

                    })}
                </TableBody>
            </Table>
        </TableContainer>
    </div>
  )
}

export default Api