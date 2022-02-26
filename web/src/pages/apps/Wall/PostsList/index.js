import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {onGetPostsList} from '../../../../redux/actions/Wall';
import AppList from '@crema/core/AppList';
import PostItem from './PostItem';

const PostsList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(onGetPostsList());
  }, [dispatch]);

  const postList = useSelector(({wall}) => wall.postList);
  const wallData = useSelector(({wall}) => wall.wallData);

  return (
    <AppList
      data={postList}
      renderRow={(post, index) => (
        <PostItem key={index} post={post} wallData={wallData} />
      )}
    />
  );
};

export default PostsList;
