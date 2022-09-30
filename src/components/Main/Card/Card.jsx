import React, { useContext } from "react";
import { pokeContext } from "../../../context/pokeContext";
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});



const Cards = (props) => {

  const name = props.value.name;
  const type = props.value.type;
  const img = props.value.img;

  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}




export default Card;






// const Card = (props) => {

//   // console.log(props);
//   const name = props.value.name;
//   const type = props.value.type;
//   const img = props.value.img;
//   // console.log("name ", name);
//   // const image = props.value.sprites.front_default;
//   // const type_1 = props.value.types[0].type.name;

//   return <div className="card">
//     <img src={img} alt="Pokemon" />
//     <h2>{name}</h2>
//     <h2>{type}</h2>
//   </div>;
// };

// export default Card;

