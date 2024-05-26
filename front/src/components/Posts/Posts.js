import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { v4 as uuid } from 'uuid'

import Post from './Post/Post';
import useStyles from './styles';

const Posts = () => {
  const posts = useSelector((state) => state.posts);
  const classes = useStyles();

  if (!posts) {
    return <CircularProgress />;
  }
  return (
    // If post has data it will never enter if you leave the !== condition.
   (posts && posts.length === 0) ? <CircularProgress /> : (
      <Grid className={classes.container} container alignItems="stretch" spacing={3}>
        {posts.map((post) => (
          // I had to add uuid because it was bringing children with the same ids, however you should check because it is duplicating the info, I think the info that is coming is not from the database but from the one generated as TEST.
          <Grid key={uuid()} item xs={12} sm={6} md={6}>
            <Post post={post}  />
          </Grid>
        ))}
      </Grid>
    )
  );
};

export default Posts;

 