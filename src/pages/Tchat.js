import React, { useState } from 'react';
import Message from '../components/MessageBox'

const Tchat = () => {
    const [msg, setMsg] = useState([]);
    return (
        <div className="tChat">
            <div className="header">
                <h1 className="username">Poyi Social</h1>
                <span className="userImage">
                    <img
                        src="../../../Images/Yopi Profile/162abd893638dfc57e239b8de48df93d.png"
                        alt=""
                    />
                </span>
            </div>
            <div className="messages">
                {msg.map((item) => {
                    return(<Message message={item} />)
                })}
            </div>
            <form action="post" className="sendMessage" onSubmit={(event) => {
                event.preventDefault()
                console.log(event);
                console.log(event.target[0].value);
                if (event.target[0].value.trim().length <= 0) {
                    event.target[0].value = '0'
                } else {
                    setMsg(msg.push(event.target[0].value))
                    event.target[0].value = ''
                }
            }}>
                <input type="text" name="message" id="message" className="messageBar" placeholder="Message" />
                <label className="submit">
                    {/* <svg src='../assets/icons/arrow-forward-circle-outline.svg'></svg> */}
                    {/* <iframe
                        title='sibmit'
                        src="../assets/icons/arrow-forward-circle-outline.svg"
                        frameBorder="0"
                        className="sendSvg"
                    ></iframe> */}
                    <input type="submit" value=" " className="messageSubmit" />
                </label>
            </form>
        </div>
    );
};

export default Tchat;