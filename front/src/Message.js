import React from 'react'
import styled from 'styled-components';
import axios from 'axios';

const StyledMessage = styled.button`
    max-width: 300px;
    max-height: 400px;
    border-style: none;
    border-radius: 25px;
    background-color: green;
    text-align: left;
    display: block;
    margin-top: 5px;
    margin-bottom: 5px;

    padding-right: 10px;
    padding-left: 10px;
    padding-top: 10px;
    padding-bottom: 10px;

    word-wrap: break-word;
    white-space: normal;
`;

function Message(props) {

    function handleClick(event) {
        // event.preventDefault();
        window.location.reload();
        axios.delete(`http://localhost:4001/api/messages/${props.id}`, {})
        .then((res) => console.log(res.data));
    }

    // console.log(props.mongoData)

    return (
        <StyledMessage onClick={handleClick} id={props.id}>
            {props.message}
        </StyledMessage>
    )
}

export default Message;
