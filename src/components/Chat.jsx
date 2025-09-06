import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { createSocketConnection } from '../utils/socket';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { BASE_URL } from '../utils/constants';

const Chat = () => {
    const { targetUserId } = useParams();
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');
    const user = useSelector(store => store.user);
    const userId = user?._id;

    const fetchChats = async () => {
        const chat = await axios.get(BASE_URL + '/chat/' + userId, { withCredentials: true });
        console.log(chat.data.messages);

        setMessages(chat.data.messages.map(message => {
            return {
                firstName: message.senderId.firstName,
                lastName: message.senderId.lastName,
                imageUrl: message.senderId.imageUrl,
                text: message.text
            }
        }));
    }

    useEffect(() => {
        fetchChats();
    }, []);

    useEffect(() => {
        const socket = createSocketConnection();

        if (!user)
            return;

        socket.emit("joinChat", { firstName: user.firstName, userId, targetUserId });

        socket.on("messageReceived", ({ firstName, text, imageUrl, lastName }) => {
            setMessages(prev => [...prev, { firstName, text, imageUrl, lastName }]);
        });

        return () => {
            socket.disconnect();
        };
    }, []);


    const sendMessage = () => {
        const socket = createSocketConnection();
        socket.emit("sendMessage", { firstName: user.firstName, userId, targetUserId, text: newMessage, imageUrl: user.imageUrl, lastName: user.lastName });
        setNewMessage('');
    }

    return (
        <div className='flex flex-col border border-gray-600 w-1/2 m-5 mx-auto h-[70vh]'>
            <h1 className='p-5 border-b border-gray-600 ' >Chat</h1>
            <div className='flex-1 overflow-scroll p-5'>
                {
                    messages.map((message, ind) => {
                        return (<div key={ind} className={`chat ${message.firstName === user.firstName ? "chat-end" : "chat-start"}`}>
                            <div className="chat-image avatar">
                                <div className="w-10 rounded-full">
                                    <img
                                        alt="Tailwind CSS chat bubble component"
                                        src={message?.imageUrl}
                                    />
                                </div>
                            </div>
                            <div className="chat-header">
                                {message?.firstName + " " + message?.lastName}
                                <time className="text-xs opacity-50">12:45</time>
                            </div>
                            <div className="chat-bubble">{message.text}</div>
                            <div className="chat-footer opacity-50">Delivered</div>
                        </div>)
                    })
                }
            </div>
            <div className='p-5 border-t border-gray-600 flex items-center gap-2'>
                <input type="text" className='flex-1 border border-gray-500 text-white rounded p-2'
                    value={newMessage}
                    onChange={e => setNewMessage(e.target.value)}
                >
                </input>
                <button className='btn btn-secondary' onClick={sendMessage}>Send</button>
            </div>
        </div>
    )
}

export default Chat