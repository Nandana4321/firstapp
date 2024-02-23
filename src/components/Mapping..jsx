import { TableCell, TableContainer, TableHead, TableRow,Table, TableBody } from '@mui/material'
import React, { useState } from 'react'

const Mapping = () => {
    var[x,setx]=useState(["Nandana","Diya"]);

  return (
    <div>
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                    <TableCell style={{color:"red",fontFamily:"cursive"}}>Names</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {x.map ((val,i)=>{
                        return(
                            <TableRow>
                                <TableCell>{val}</TableCell>
                            </TableRow>
                        )
                        })}
                    
                    

                    
                </TableBody>
            </Table>
        </TableContainer>
    </div>
  )
}

export default Mapping