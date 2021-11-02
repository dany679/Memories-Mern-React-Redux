//components
import Form from '../Form/Form';
import Posts from '../Posts/Posts';
//style
import useStyles from './Memories.styles';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import memories from '../../images/memories.png';
//libs
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { getPosts } from '../../actions/post';
const Memories = () => {
  const [currentId, setCurrentId] = useState(null);
  const classes = useStyles();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);
  return (
    <Container maxWidth='lg'>
      <AppBar className={classes.appBar} position='static' color='inherit'>
        <Typography className={classes.heading} variant='h3' align='center'>
          Memories
        </Typography>
        <img
          className={classes.image}
          src={memories}
          alt='Memories'
          height='60'
        />
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            className={classes.mainContainer}
            container
            justifyContent='center'
            alignItems='stretch'
            spacing={3}
          >
            <Grid item xs={12} sm={7}>
              <Posts setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default Memories;
