import * as React from 'react';
import { Paper, Box, Grid, Typography} from '@mui/material';

const styles = {
    paperContainer: {
        height: 390,
        backgroundImage: `url(${"static/ProjectManage.jpg"})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        // backgroundColor: 'rgba(0,0,255,0.9)',
      },
    titleHeading:{
      color:'black',
      fontFamily: "Times New Roman",
      textShadow: "2px 2px 7px #000000",
      fontWeight: "bold",
    }
  };

export default function TopPortion() {
  return (
    <Paper  elevation={9}>
    <Grid container spacing={4}>
        <Grid item lg={12} md={12} sm={12} xs={12}>
          <Box style={styles.paperContainer} p={4} textAlign="center">
            <Typography variant="h3" style={styles.titleHeading}>
              Project Renderer
            </Typography>
          </Box>
        </Grid>
    </Grid>
    </Paper>
  );
}
