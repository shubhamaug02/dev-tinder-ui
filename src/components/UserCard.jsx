import axios from 'axios';
import React from 'react'
import { BASE_URL } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { removeUserFromFeed } from '../utils/feedSlice';

const UserCard = ({ user }) => {
    const { _id, firstName, lastName, about, age, gender, skills, imageUrl } = user;
    const dispatch = useDispatch();

    const handleSendRequest = async (status, userId) => {
        try {
            await axios.post(BASE_URL + '/request/send/' + status + '/' + userId, {}, { withCredentials: true });
            dispatch(removeUserFromFeed(userId));
        }
        catch (err) {
            console.log(err);
        }
    }

    return (
        <div className='flex justify-center my-5'>
            <div className="card bg-base-300 w-96 shadow-sm">
                <figure className="px-10 pt-10">
                    <img
                        src={imageUrl}
                        alt="User Image"
                        className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{firstName}</h2>
                    <p>{age && gender && (age + ", " + gender)}</p>
                    <p>{about}</p>
                    <div className="card-actions my-4 flex justify-end">
                        <button className="btn btn-primary" onClick={() => handleSendRequest('ignored', _id)}>Ignore</button>
                        <button className="btn btn-secondary" onClick={() => handleSendRequest('interested', _id)}>Interested</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserCard