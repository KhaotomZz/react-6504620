import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MyCard(props) {
  return (
    <Card>  
        <CardMedia
    sx={{ height: 140 }}
    image={props.coverimage}
    title={props.name}
  />
  <CardContent>
    <Typography gutterBottom variant="h5" component="div">
      {props.name}
    </Typography>
    <Typography variant="body2" color="text.secondary">
      {props.detail}
    </Typography>
  </CardContent>
  <CardActions>
    <Button size="small">Share</Button>
    <Button size="small">Learn More</Button>
  </CardActions>
</Card>
);
}


