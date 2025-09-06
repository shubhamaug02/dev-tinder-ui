import { Outlet, useNavigate } from 'react-router-dom';
import axios from 'axios';
import NavBar from "./NavBar";
import Footer from "./Footer";
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { BASE_URL } from '../utils/constants';

const Body = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(store => store.user);

  const getUser = async () => {
    try {
      const res = await axios.get(BASE_URL + '/profile/view', { withCredentials: true });
      dispatch(addUser(res.data));
    }
    catch (err) {
      // if (err.status === 401) {
      navigate('/login');
      // }
    }
  }

  useEffect(() => {
    if (!user) {
      getUser();
    }
  }, []);

  return (
    <div>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Body