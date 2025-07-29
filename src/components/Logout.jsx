import axios from 'axios';
import React, { useEffect } from 'react'
import { BASE_URL } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { removeUser } from '../utils/userSlice';
import { useNavigate } from 'react-router-dom';

const Logout = () => {

 const dispatch = useDispatch();
 const navigate = useNavigate();

 const logoutUser = async () => {
    try{
      await axios.post(BASE_URL + '/logout', {}, {withCredentials: true});
      dispatch(removeUser(null));
      navigate('/login');
    }
    catch(err){
        
    }
 }

//   useEffect(()=>{
//     logoutUser();
//   },[]);


  return (
    <div>
        <div>Logout</div>
        <p>Are you sure you wanted to logout ??</p>
        <button className='border-black' onClick={logoutUser}>Yes !!</button>
    </div>
  )
}

export default Logout