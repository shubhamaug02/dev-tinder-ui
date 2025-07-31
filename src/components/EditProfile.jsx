import React, { useState } from 'react'
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import UserCard from './UserCard';
import { addUser } from '../utils/userSlice';
import { BASE_URL } from '../utils/constants';

const EditProfile = ({ user }) => {
    const dispatch = useDispatch();

    const [firstName, setFirstName] = useState(user.firstName);
    const [lastName, setLastName] = useState(user.lastName);
    const [age, setAge] = useState(user.age);
    const [gender, setGender] = useState(user.gender);
    const [about, setAbout] = useState(user.about);
    const [imageUrl, setImageUrl] = useState(user.imageUrl);
    const [error, setError] = useState(null);
    const [showToast, setShowToast] = useState(false);


    const handleSave = async () => {
        try {
            const res = await axios.patch(BASE_URL + '/profile/edit', {
                firstName, lastName, age, gender, about, imageUrl
            }, { withCredentials: true });

            dispatch(addUser(res.data.data));
            setShowToast(true);
            setTimeout(() => {
                setShowToast(false);
            }, 3000);
        }
        catch (err) {
            setError(err.response.data);
        }
    }

    return (
        <div>
            {showToast && <div className="toast toast-top toast-center">
                <div className="alert alert-success">
                    <span>Profile saved successfully !!</span>
                </div>
            </div>}
            <div className='flex justify-center my-10'>
                <div className='flex justify-center mx-5'>
                    <div className="card card-border bg-base-300 w-96">
                        <div className="card-body">
                            <h2 className="card-title justify-center">Profile details</h2>
                            <fieldset className="fieldset">
                                <label className="fieldset-legend">FirstName</label>
                                <input type="text" className="input" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                            </fieldset>
                            <fieldset className="fieldset">
                                <label className="fieldset-legend">LastName </label>
                                <input type="text" className="input" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                            </fieldset>
                            <fieldset className="fieldset">
                                <label className="fieldset-legend">Age </label>
                                <input type="text" className="input" value={age} onChange={(e) => setAge(e.target.value)} />
                            </fieldset>
                            <fieldset className="fieldset">
                                <label className="fieldset-legend">Gender</label>
                                <input type="text" className="input" value={gender} onChange={(e) => setGender(e.target.value)} />
                            </fieldset>
                            <fieldset className="fieldset">
                                <label className="fieldset-legend">Image Url </label>
                                <input type="text" className="input" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} />
                            </fieldset>
                            <fieldset className="fieldset">
                                <label className="fieldset-legend">About </label>
                                <input type="text" className="input" value={about} onChange={(e) => setAbout(e.target.value)} />
                            </fieldset>
                            {error && <div className='text-red-500'>{error}</div>}
                            <div className="card-actions justify-center p-2">
                                <button className="btn btn-primary" onClick={handleSave} >Save Details</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='my-5'>
                    <UserCard user={{ firstName, lastName, age, gender, about, imageUrl }} />
                </div>
            </div>
        </div>
    )
}

export default EditProfile;