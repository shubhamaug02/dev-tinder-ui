import axios from 'axios';
import React, { useEffect } from 'react';
import { BASE_URL } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { addFeed } from '../utils/feedSlice';
import UserCard from './UserCard';

const Feed = () => {
  const dispatch = useDispatch();
  const feed = useSelector(store => store.feed);

  const getFeed = async () => {
    try {
      const res = await axios.get(BASE_URL + '/feed', { withCredentials: true });
      dispatch(addFeed(res.data));
    }
    catch (err) {
      console.log(err.message);
    }

  }

  useEffect(() => {
    if (!feed) {
      getFeed();
    }
  }, []);

  return (
    <div>
      {feed && <UserCard user={feed[0]} />}
    </div>
  )
}

export default Feed