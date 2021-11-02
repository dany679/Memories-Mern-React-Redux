import useStyles from './Form.styled';
import { Button, Paper, TextField, Typography } from '@material-ui/core';
import { useEffect, useState } from 'react';
import FileBase from 'react-file-base64';
import { useDispatch, useSelector } from 'react-redux';
import { createPosts, updatePosts } from '../../actions/post';
const Form = ({ currentId, setCurrentId }) => {
  // prettier-ignore
  const initialPostData = {creator: '',title: '',message: '',tags: '',selectedFile: '',};
  const post = useSelector((state) =>
    currentId ? state.posts.find((p) => p._id === currentId) : null,
  );
  useEffect(() => {
    if (post) setPostData(post);
  }, [currentId, post]);
  const dispatch = useDispatch();
  const classes = useStyles();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(postData, 'postData');
    console.log(currentId, 'currentId');
    if (currentId) {
      dispatch(updatePosts(postData));
    } else {
      dispatch(createPosts(postData));
    }
    clear();
  };

  const clear = () => {
    setPostData(initialPostData);
    setCurrentId(null);
  };
  const [postData, setPostData] = useState(initialPostData);
  return (
    // prettier-ignore
    <Paper className={`${classes.paper} ${classes.root}`}>
    <form autoComplete={'off'} noValidate className={classes.form} onSubmit={handleSubmit}>
      <Typography variant='h6'>Creating Memory</Typography>
      <TextField name='creator' label='Creator' variant='outlined' fullWidth value={postData.creator} onChange={(e)=>{setPostData({...postData, creator:e.target.value})}}/>
      <TextField name='title' label='Title' variant='outlined' fullWidth value={postData.title} onChange={(e)=>{setPostData({...postData, title:e.target.value})}}/>
      <TextField name='message' label='Message' variant='outlined' fullWidth value={postData.message} onChange={(e)=>{setPostData({...postData, message:e.target.value})}}/>
      <TextField name='tags' label='Tags' variant='outlined' fullWidth value={postData.tags} onChange={(e)=>{setPostData({...postData, tags:e.target.value.split(',')})}}/>
      <div className={classes.fileInput}><FileBase type='file' multiple={false} onDone={({base64})=>{setPostData({...postData, selectedFile:base64})}} ></FileBase></div>
      <Button className={classes.buttonSubmit} variant='contained' type='submit'size='large' fullWidth color='primary'>Submit</Button>
      <Button variant='contained' size='small' fullWidth color='secondary' onClick={clear}>Clear</Button>
    </form>
  </Paper>
  );
};

export default Form;
