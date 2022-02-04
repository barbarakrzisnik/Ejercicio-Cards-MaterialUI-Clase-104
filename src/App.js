import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import Rating from "@mui/material/Rating";
import { useState } from "react";
import Divider from "@mui/material/Divider";

import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import ShareIcon from "@mui/icons-material/Share";
import FavoriteIcon from "@mui/icons-material/Favorite";
import BookmarkIcon from "@mui/icons-material/Bookmark";

const App = () => {
  const [value, setValue] = useState(2);
  return (
    <div className="body">
      <h1>Practica de cards // Material UI</h1>
      <h2>Tarjeta 1</h2>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Word of the Day
          </Typography>
          <Typography variant="h5" component="div">
            be - nev - o - lent
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            adjective
          </Typography>
          <Typography variant="body2">
            well meaning and kindly.
            <br />
            {'"a benevolent smile"'}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="secondary">
            Learn More
          </Button>
        </CardActions>
      </Card>

      <h2>Tarjeta 2</h2>

      <Card sx={{ maxWidth: 375 }}>
        <CardMedia
          component="img"
          height="150"
          image="http://placekitten.com/200/300"
          alt="kitten"
        />
        <CardContent>
          <Typography variant="h6">Our Changing Planet</Typography>
          <Typography variant="body2" color="text.secondary" gutterBottom>
            by Kurt Wagner
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Visit ten places on our planet that are undergoing the biggest
            changes today.
          </Typography>
        </CardContent>
        <CardActions>
          <Button color="secondary">READ</Button>
          <Button color="secondary">BOOKMARK</Button>
          <IconButton aria-label="delete">
            <DeleteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Card>

      <h2>Tarjeta 3</h2>

      <Card>
        <div className="flex-row">
          <CardContent>
            <CardMedia
              component="img"
              height="300"
              image="http://placekitten.com/200/300"
              alt="kitten"
            />
          </CardContent>

          <CardActions>
            <div className="flex-column">
              <IconButton aria-label="delete">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="share">
                <BookmarkIcon />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
            </div>
          </CardActions>
        </div>
      </Card>

      <h2>Tarjeta 4</h2>

      <Card sx={{ maxWidth: 475 }}>
        <CardMedia
          component="img"
          height="250"
          image="http://placekitten.com/200/300"
          alt="kitten"
        />
        <CardContent>
          <Typography variant="h5">Cafe Badilico</Typography>
          <Rating name="read-only" value={value} size="small" readOnly />
          <Typography variant="caption" color="text.secondary">
            4.5 (413)
          </Typography>
          <Typography variant="body2" gutterBottom>
            $ - Italian, Cafe
          </Typography>
          <Typography variant="body2" color="text.secondary" gutterBottom>
            Small plates, salads & sandwiches an intimate setting with 12 indoor
            seats plus patio seating.
          </Typography>
          <Divider sx={{ m: 3 }} variant="middle" />
          <Typography variant="h5">Tonight's availability</Typography>
        </CardContent>

        <CardActions>
          <Button sx={{ m: 1 }} disableElevation variant="outlined">
            5:30PM
          </Button>
          <Button sx={{ m: 1 }} disableElevation variant="contained">
            7:30PM
          </Button>
          <Button sx={{ m: 1 }} disableElevation variant="outlined">
            8:00PM
          </Button>
          <Button sx={{ m: 1 }} disableElevation variant="outlined">
            9:00PM
          </Button>
        </CardActions>

        <CardActions>
          <Button color="secondary">RESERVE</Button>
        </CardActions>

      </Card>
    </div>
  );
};

export default App;
