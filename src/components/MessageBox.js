import React from 'react';

const Message = ({ message = "Je suis un message" }) => {
    return (
        <div className="messageBox">
            <div className="left">
                <img src="../assets/images/op" alt="" className="userImage" />
            </div>
            <div className="right">
                <div className='userProfil'>
                    <p className="userName">Yopi</p>
                    <p className="userTag">@y0pi</p>
                </div>
                <p className="textMessage">{message}</p>
                <div className="parameters"></div>
            </div>
        </div>
    );
};

export default Message;