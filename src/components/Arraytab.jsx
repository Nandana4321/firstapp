import { TableCell, TableContainer, TableHead,Table, TableBody, TableRow } from '@mui/material'
import React, { useState } from 'react'

const Arraytab = () => {
    var[y,sety]=useState(
        [{"sname":"nandana","age":21,"place":"vatakara"},
        {"sname":"raha","age":21,"place":"calicut"},
        {"sname":"sari","age":20,"place":"kanur"}]
    )
  return (
    <div>
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell style={{color:"blue",fontFamily:"cursive"}}>name</TableCell>
                        <TableCell style={{color:"blue",fontFamily:"cursive"}}>age</TableCell>
                        <TableCell style={{color:"blue",fontFamily:"cursive"}}>place</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {y.map((val,i)=>{
                        return(
                            <TableRow>
                                <TableCell>{val.sname}</TableCell>
                                <TableCell>{val.age}</TableCell>
                                <TableCell>{val.place}</TableCell>
                            </TableRow>


                        )
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    </div>
  )
}

export default Arraytab