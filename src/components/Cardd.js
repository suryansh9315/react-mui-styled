import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const Cardd = () => {
  return (
    <div>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="300"
          image="https://imgs.search.brave.com/FPepKEUSioANttuwfn7izGq-1WWaRK4LUnPM7UAvhYc/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly82NC5t/ZWRpYS50dW1ibHIu/Y29tLzgyMTk0NTNh/YmFjODQwZjhlNTVl/MWMxYWUzMTI5MWQ1/LzA5ZDAzYWMyOTdj/OWRkZTMtMmYvczIw/NDh4MzA3Mi8wMjVk/Yjk5MzM4NTFmMzFl/OTc0NGJmYmI3YTA2/ODMxZjRiNjZmMzFl/LmpwZw"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default Cardd;
