import Grid from '@mui/material/Unstable_Grid2'; 
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Item from '../Item/Item';

function Box() {
  return (
    <ThemeProvider
      theme={createTheme({
        breakpoints: {
          values: {
            laptop: 1024,
            tablet: 640,
            mobile: 0,
            desktop: 1280,
          },
        },
      })}
    >
      <Grid container spacing={{ mobile: 1, tablet: 2, laptop: 3 }}>
        {Array.from(Array(4)).map((_, index) => (
          <Grid mobile={6} tablet={4} laptop={3} key={index}>
            <div>{index + 1}</div>
            <Grid container spacing={3} sx={{ flexGrow: 1 }}>
  <Grid xs={6} xsOffset={3} md={2} mdOffset={0}>
    <Item>1</Item>
  </Grid>
  <Grid xs={4} md={2} mdOffset="auto">
    <Item>2</Item>
  </Grid>
  <Grid xs={4} xsOffset={4} md={2} mdOffset={0}>
    <Item>3</Item>
  </Grid>
  <Grid xs md={6} mdOffset={2}>
    <Item>4</Item>
  </Grid>
</Grid>
          </Grid>
        ))}
      </Grid>
    </ThemeProvider>
  );
}

export default Box;
