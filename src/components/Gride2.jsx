import { Card, Grid, TextField } from '@mui/material'

import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Gride2 = () => {
    var[prod,setprod]=useState([]);
 useEffect(()=>{
    axios.get("https://fakestoreapi.com/products")
    .then((response)=>{
        console.log(response.data);
        setprod(response.data);
        console.log(prod)
    })
    .catch((err)=>{console.log(err)})
 },[])
  return (
    <div style={{margin:'4%'}}> 
        <Grid container spacing={2}>
            {prod.map((val,i)=>{
             return (   
             <Grid item xs={12} sm={6} md={4}>
                    <Card sx={{ maxWidth: 345 }}>
                 <CardMedia
                   sx={{ height: 140 }}
                   image={val.image}
                   title="green iguana"
                 />
                 <CardContent>
                   <Typography gutterBottom variant="h5" component="div">
                     {val.title}
                   </Typography>
                   <Typography variant="body2" color="text.secondary">
                    {val.price}
                   </Typography>
                 </CardContent>
                 <CardActions>
                   <Button size="small">Buy</Button>
                   <Button size="small">Learn More</Button> 
                   <Button size="small">Add to cart</Button>
                 </CardActions>
               </Card>
                 </Grid>)
            })}

        </Grid>









        
       
        {/* <Grid item xs={12} sm={6} md={4}>
            <TextField fullWidth variant='outlined' label='item1'></TextField>
            <Grid item xs={12} sm={6} md={4}></Grid>
            <TextField fullWidth variant='outlined' label='item2'></TextField>
            </Grid>
        </Grid> */}
    </div>
  )
}

export default Gride2