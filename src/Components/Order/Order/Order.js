import React, { useEffect, useState } from 'react';

 import { CardActionArea, CardContent, CardMedia, Typography,CardActions,Card, makeStyles } from '@material-ui/core';
import './Order.css'
 import { Button } from '@material-ui/core';
 import img from "../../../images/carousel-3.jpg"






// const useStyles = makeStyles({
//     root: {
//       maxWidth: 345,
//     },
//     media: {
//       height: 140,
//     },
//   });
 
const Order = () => {
  // const classes = useStyles();
  // let { name} = useParams();

  // const [error, setError] = useState(null);
  // const [isLoaded, setIsLoaded] = useState(false);
  // const [items, setItems] = useState([]);

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  // useEffect(() => {
  //   fetch("http://localhost:4000/services")
  //     .then(res => res.json())
  //     .then(
  //       (result) => {
  //         setIsLoaded(true);
  //         setItems(result);
  //       },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
  //       (error) => {
  //         setIsLoaded(true);
  //         setError(error);
  //       }
  //     )
  // }, [])
// console.log(items)
//     const productName = items.find(pdName => pdName.serviceName === name);
//  const {serviceName,serviceTitle,price,image,description}=  productName ;
  
    // const handleSubmit = () => {
     
        
    //     fetch('http://localhost:4000/addOrder', {   
    //         method: 'POST',
    //         body: JSON.stringify({
    //           name : name,
    //           title:serviceTitle,
    //           price:price

    //         }),
    //         headers: { 
    //           'Content-Type':"application/json; charset=UTF-8" 
    //         }
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log('Successfull', data);
    //         })
    // };
    
    return (
        <div className="container">
    
    <Card  style={{display: 'block',margin:"50px auto "}}>
  <CardActionArea>
    <CardMedia
      
    image={img}
      title="Contemplative Reptile"
    />
    <CardContent>
       <Typography gutterBottom variant="h5" component="h2">
        this is title
      </Typography> 
      <h3 className="mt-3">
        $15
      </h3> 
    </CardContent>
  </CardActionArea>
  <CardActions>
   
    <Button size="small"  className="d-block m-auto" variant="outlined" style={{backgroundColor:"#343a40",color:"#fff"}} >
      Order Now
    </Button>
  </CardActions>
</Card>)
        </div> 


    );
};

export default Order;
// {/* <OrderNav name ={serviceName}></OrderNav>   */}