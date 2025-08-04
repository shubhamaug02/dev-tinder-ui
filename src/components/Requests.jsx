import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { BASE_URL } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { addRequests, removeRequest } from '../utils/requestSlice';

const Requests = () => {

    const dispatch = useDispatch();
    const requests = useSelector(store => store.requests);
    const [showToast, setShowToast] = useState(false);
    let status = '';

    const getConnectionRequests = async () => {
        try {
            const res = await axios.get(BASE_URL + '/user/requests/received', { withCredentials: true });
            dispatch(addRequests(res.data.data));
        }
        catch (err) {
            console.log(err);
        }
    }

    const respondToRequest = async (id, response) => {
        try {
            const res = await axios.post(BASE_URL + '/request/review/' + response + '/' + id, {}, { withCredentials: true });
            dispatch(removeRequest(id));
        }
        catch (err) {

        }
    }

    useEffect(() => {
        getConnectionRequests();
    }, []);

    if (!requests || !requests.length) {
        return <div className='flex justify-center my-10'>No Connections Request Pending !!</div>
    }

    return requests && (
        <div>
            {/* {showToast && <div className="alert alert-success">
                <span>{`Connection Request ${status} `}</span>
            </div>} */}
            <div className='text-center text-2xl my-5 font-bold'>Requests</div>
            <div className='flex flex-row justify-center'>
                <div className='min-h-screen'>
                    {
                        requests.map(request =>
                            <div className='flex border border-base-300 my-10 p-5 w-full mx-auto rounded-lg' key={request._id}>
                                <img className='h-20 w-20 rounded-full' src={request.fromUserId.imageUrl} alt={request.fromUserId.firstName} />
                                <div className='flex flex-col mx-5 align-middle'>
                                    <h2 className='font-bold text-2xl my-2'>{request.fromUserId.firstName + " " + request.fromUserId.lastName}</h2>
                                    {request.fromUserId.age && request.fromUserId.gender && <h3 className='my-2'>{request.fromUserId.age + ", " + request.fromUserId.gender}</h3>}
                                    <p>{request.fromUserId.about}</p>
                                    <div className='my-5'>
                                        <button className="btn btn-soft btn-primary mx-5 bg-base-300" onClick={() => respondToRequest(request._id, 'rejected',)}>Ignore</button>
                                        <button className="btn btn-soft btn-secondary bg-base-300" onClick={() => respondToRequest(request._id, 'accepted')}>Accepted</button>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Requests