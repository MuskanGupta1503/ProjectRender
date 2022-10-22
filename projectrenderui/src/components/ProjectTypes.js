import * as React from 'react';
import { Paper,  Grid, Button, CardActions, Card, CardContent, Typography, CardMedia} from '@mui/material';
import { Link } from "react-router-dom";

export default function ProjectTypes() {
  return (
    <Grid container spacing={2} 
        direction="row"
        p={2}
        justifyContent="center"
        backgroundColor="lightgrey"
        alignItems="center">
      
        <Grid item md={3} sm={6} xs={12} >
        <Link to="showproject/WebDev">
          <Paper elevation={9}>
              <Card>
              <CardMedia
                component="img"
                height="250"
                image="/static/WebDev.jpg"
                alt="green iguana"
              />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Web Development
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
          </Paper>
        </Link>
        </Grid>
        <Grid item md={3} sm={6} xs={12}>
        <Link to="showproject/AppDev">
          <Paper elevation={9}>
                <Card>
                <CardMedia
            component="img"
            height="250"
            image="/static/AppDev.jpg"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              App Development
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
          </Paper>
          </Link>
        </Grid>
        <Grid item md={3} sm={6} xs={12}>
        <Link to="showproject/ML">
          <Paper elevation={9}>
                {/* <Box p={5} textAlign="center">1</Box> */}
                <Card>
                <CardMedia
            component="img"
            height="250"
            image="/static/ML.jpg"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Machine Learning
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
          </Paper>
          </Link>
        </Grid>
        <Grid item md={3} sm={6} xs={12}>
        <Link to="showproject/Others">
          <Paper elevation={9}>
                {/* <Box p={5} textAlign="center">1</Box> */}
                <Card>
                <CardMedia
            component="img"
            height="250"
            image="/static/others.png"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Others
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
          </Paper>
          </Link>
        </Grid>
    </Grid>
  );
}
