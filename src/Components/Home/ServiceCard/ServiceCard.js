import { CardActionArea, CardActions, CardContent, CardMedia, IconButton, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { Collapse } from '@material-ui/core';
import clsx from 'clsx';
import { Link } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
   
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
   
  }));



const ServiceCard = (props) => {
  
    const {serviceName,image,serviceTitle,description,price
    } = props.data;
   
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
  
    const handleExpandClick = () => {
      setExpanded(!expanded);
    };
    
    return (
      <div className="">
 
             <CardActionArea>
        <CardMedia
          style={{height: '140px'}}
          image=
          
          {`data:image/png;base64,${image.img} `}


          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">


            {serviceName}


          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">


            {serviceTitle}


          </Typography>


          <h3 className="mt-3">${price}</h3>


        </CardContent>
      </CardActionArea>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <Link to={"/order/"+ serviceName} className="text-decoration-none text-dark " style={{fontSize:"16px"}}>Buy Now</Link>
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>

          {description}
        </CardContent>
      </Collapse>
     
      </div>  
        
    );
};

export default ServiceCard;