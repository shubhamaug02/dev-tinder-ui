import axios from 'axios'
import React from 'react'
import { BASE_URL } from '../utils/constants';

const Premium = () => {

    const onClickBuyHandler = async (type) => {
        try {
            const orderResponse = await axios.post(BASE_URL + "/payment/order", {
                type
            }, { withCredentials: true });

            console.log(orderResponse.data);

            const orderData = orderResponse.data;
            const { amount, currency, orderId, notes, key } = orderData;

            const options = {
                key, // Replace with your Razorpay key_id
                amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
                currency,
                name: 'Tinder Dev',
                description: 'Developer community for better connections',
                order_id: orderId, // This is the order_id created in the backend
                prefill: {
                    name: notes.firstName + " " + notes.className,
                    email: notes.emailId,
                    contact: '9999999999'
                },
                theme: {
                    color: '#F37254'
                },
            };

            const rzp = new window.Razorpay(options);
            rzp.open();
        }

        catch (err) {
            console.log(err);
        }
    }

    return (
        <div className='py-10'>
            <div className="flex w-full flex-col lg:flex-row">
                <div className="card bg-base-300 rounded-box grid h-60 grow place-items-center">
                    <h2 className='font-bold text-2xl'>Silver Membership</h2>
                    <div>
                        <ol>
                            <li> Gives 300 likes per day</li>
                            <li> Verified Blue Tick</li>
                            <li> Unlimited Messaging feature</li>
                        </ol>
                    </div>
                    <button className='btn btn-secondary' onClick={() => onClickBuyHandler('silver')}>Buy Silver</button>
                </div>
                <div className="divider lg:divider-horizontal">OR</div>
                <div className="card bg-base-300 rounded-box grid h-60 grow place-items-center">
                    <h2 className='font-bold text-2xl'>Gold Membership</h2>
                    <div>
                        <ol>
                            <li>Unlimited likes per day</li>
                            <li>Verified Blue Tick</li>
                            <li>Unlimited Messaging feature</li>
                            <li>10 Mock interviews Per Month</li>
                        </ol>
                    </div>
                    <button className='btn btn-primary' onClick={() => onClickBuyHandler('gold')}>Buy Gold</button>
                </div>
            </div>
        </div>
    )
}

export default Premium