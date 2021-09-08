import React from 'react';
import './messges.css';

const messeges = () => {
    return (
        <div className='messeges'>
            <div className='main-chat'>
                <div className='main-container'>
                    <input placeholder="search" className="main-chat-input"/>
                </div>
            </div>
            <div className="chat-box">
                <div className='chat-box-container'>

                </div>

            </div>
        </div>
    );
};

export default messeges;