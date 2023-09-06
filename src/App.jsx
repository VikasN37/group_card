import React from "react";
import {

  Typography,
  Button,
  Box,
  Card,
  CardContent,
  CardMedia,
  CardActions,

} from "@mui/material";

import { useStyles } from "./style";

function App() {
  const classes = useStyles();

  function handleClick() {

  }

  return (
    <>
      <Box className={classes.mainboxstyling}
      >
        <Card>
          <CardMedia
            component='img'
            height='335'
            width='610px'

            image='https://source.unsplash.com/random'
          />

          <CardContent sx={{ backgroundColor: '#0B1018' }}>


            <Typography gutterBottom width='373px' height='46px' top='357px' left='20px' className={classes.heading}>Group Name</Typography>


            <Typography gutterBottom width='394px' height='23px' left='20px' className={classes.content} >This is a awesome group because som is created it af...</Typography>
          </CardContent>

          <Box width='512px'
            height='69px'
            top='493px'
            left='2px'
            bgcolor='black'
            padding='0px'
          >
            <CardActions>
              <Button variant="contained" className={classes.play} onClick={handleClick}>Play Now</Button>

            </CardActions>
          </Box>
        </Card>

      </Box>
    </>
  );
}

export default App;
