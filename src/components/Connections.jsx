import axios from 'axios';
import React, { useEffect } from 'react'
import { BASE_URL } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { addConnections } from '../utils/connectionSlice';

const Connections = () => {
    const dispatch = useDispatch();
    const connections = useSelector(store => store.connections);

    const fetchConnections = async () => {
        try {
            const res = await axios.get(BASE_URL + '/user/connections', { withCredentials: true });
            dispatch(addConnections(res.data));
        }
        catch (err) {

        }
    }

    useEffect(() => {
        fetchConnections();
    }, []);

    if (!connections) {
        return <div>No Connections Found</div>
    }

    return connections && (
        <div>
            <div className='text-center text-2xl my-5 font-bold'>Connections</div>
            <div className='flex flex-row justify-center'>
                <div>
                    {
                        connections.map(connection =>
                            <div className='flex border border-base-300 my-10 p-10'>
                                <img className='h-20 w-20 rounded-full' src={connection.imageUrl} alt={connection.firstName} />
                                <div className='flex flex-col mx-5 align-middle'>
                                    <h2 className='font-bold text-2xl my-2'>{connection.firstName + " " + connection.lastName}</h2>
                                    <p>{connection.about}</p>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Connections