import React from 'react'
import styled from 'styled-components'

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
    white-space: normal
`

function Message(props) {
    return (
        <StyledMessage>
            {props.test}
        </StyledMessage>
    )
}

export default Message
