import axios from 'axios';
import React, { useEffect } from 'react'
import { BASE_URL } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { removeUser } from '../utils/userSlice';
import { removeFeed } from '../utils/FeedSlice';
import { useNavigate } from 'react-router-dom';

const Logout = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutUser = async () => {
    try {
      await axios.post(BASE_URL + '/logout', {}, { withCredentials: true });
      dispatch(removeUser());
      dispatch(removeFeed());
      navigate('/login');
    }
    catch (err) {

    }
  }

  //   useEffect(()=>{
  //     logoutUser();
  //   },[]);


  return (
    <div className='flex flex-col justify-center bg-base-300 p-10 m-10 items-center w-[25%]'>
      <h1 className='text-bold'>Logout</h1>
      <p>Are you sure you wanted to logout ??</p>
      <button className='bg-green-700 px-5 my-5 border-round-sm' onClick={logoutUser}>Confirm</button>
    </div>
  )
}

export default Logout