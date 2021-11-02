import { CircularProgress, Grid } from '@material-ui/core';
// import { useState } from 'react';
import { useSelector } from 'react-redux';
import Post from './Post/Post';

import useStyles from './Posts.styled';
const Posts = ({ setCurrentId }) => {
  // const [loading, setLoading] = useState(true);
  const classes = useStyles();
  const posts = useSelector((state) => state.posts);
  console.log('posts', posts);

  // return !posts && loading ? (

  return !posts ? (
    <CircularProgress />
  ) : (
    <Grid
      className={classes.mainContainer}
      container
      alignItems='stretch'
      spacing={3}
    >
      {posts.map((post) => (
        <Grid key={post._id} item zs={12} sm={6}>
          <Post post={post} setCurrentId={setCurrentId} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Posts;
