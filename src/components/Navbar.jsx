import React from 'react'
import { Button, AppBar,Toolbar,Typography,color } from '@mui/material'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
      <AppBar position="static">
         <Toolbar>
         <Typography variant="h6" component="div" sx={{flewGrow:1}} align="left">
            App</Typography>

         <Button >
            <Link to='/' style={{color:"black"}}>Login</Link></Button>
            <Button >
            <Link to='/s' style={{color:"black"}}>sign</Link></Button>
            <Button>
              <Link to='/ss' style={{color:"black"}}>Table</Link>
            </Button>
            <Button>
            <Link to='/sss' style={{color:"black"}}>Table1</Link>
            </Button>
            <Button>
            <Link to='/m' style={{color:"black"}}>N1</Link>
            </Button>
            <Button>
            <Link to='/mm' style={{color:"black"}}>Api</Link>
            </Button>
            <Button>
            <Link to='/g' style={{color:"black"}}>Gride2</Link>
            </Button>
            <Button>
            <Link to='/c' style={{color:"black"}}>Card</Link>
            </Button>


            </Toolbar>
            
         
      </AppBar>
    </div>
  )
}

export default Navbar
