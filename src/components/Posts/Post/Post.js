import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@material-ui/core';
import useStyles from './Post.styled';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { deletePosts, likePosts } from '../../../actions/post';
const Post = ({ post, setCurrentId }) => {
  const dispatch = useDispatch();

  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        title={post?.title}
        image={post.selectedFile}
      />
      <div className={classes.overlay}>
        <Typography variant='h6'> {post?.creator}</Typography>

        <Typography variant='body2'>
          {' '}
          {moment(post.createdAt).fromNow()}
        </Typography>
      </div>
      <div className={classes.overlay2}>
        <Button
          style={{ color: 'white-smoke' }}
          size={'small'}
          onClick={() => {
            setCurrentId(post._id);
            console.log(post._id);
          }}
        >
          <MoreHorizIcon style={{ color: 'white' }} />
        </Button>
      </div>
      <div className={classes.details}>
        <Typography variant='body2' color='textSecondary'>
          {post?.tags?.map((tag) => `#${tag}`)}
        </Typography>
      </div>
      <Typography
        className={classes.title}
        gutterBottom
        variant='h5'
        component='h2'
      >
        {post.title}
      </Typography>
      <CardContent>
        <Typography component='p' variant='body2'>
          {post?.message}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button
          fontSize='small'
          variant='text'
          onClick={(e) => {
            e.preventDefault();
            dispatch(likePosts(post._id));
            // console.log('excluir', post._id);
          }}
        >
          <ThumbUpAltIcon fontSize='small' />
          &nbsp;Like&nbsp;
          {post?.likeCount}
        </Button>
        <Button
          fontSize='small'
          variant='text'
          onClick={(e) => {
            e.preventDefault();
            dispatch(deletePosts(post._id));
            // console.log('excluir', post._id);
          }}
        >
          <DeleteIcon fontSize='small' />
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default Post;
