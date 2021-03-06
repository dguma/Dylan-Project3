import React, {useState ,useEffect} from 'react'
import styled from 'styled-components'


import Message from './Message'

// import Logo from './Logo'

const StyledContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

const StyledChatRooms = styled.div`
    width: 25%;
    height: 700px;
    background-color: #6085A6;
    display: inline-block;
    border-radius: 0px 25px 25px 0px;
`

const StyledChat = styled.div`
    width: 70%;
    height: 700px;
    background-color: #6085A6;
    border-radius: 25px 0px 0px 25px;
`

const StyledChatContainer = styled.div`
    height: 60px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

const StyledChatRoom = styled.button`
    width: 65%;
    height: 80%;
    border-radius: 0px 30px 30px 0px;
    border-style: none;
    background-color: rgba(230,230,230,.75);
    font-size: 15px;
`

const StyledSelect = styled.button`
    width: 80px;
    height: 80%;
    border-radius: 30px;
    border-style: none;
    background-color: #012340;
    margin-right: 15px;
    font-size: 15px;
    color: white;
`

const StyledTextContainer = styled.form`
    margin-left: auto;
    height: 60px;
    width: 95%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

`


const StyledInput = styled.input`
    width: 85%;
    height: 80%;
    border-radius: 20px;
    border-style: none;
    background-color: rgba(230,230,230,.75);
    padding-left: 15px;
    display: inline-block;
    font-size: 18px;
    :focus{
        outline: none;
    }

    
`

const StyledMessagesContainer = styled.div`
    margin-left: auto;
    height: 640px;
    width: 95%;
    display: block;

    button:nth-child(odd) {
        background-color: antiquewhite;
    }
`

const StyledSend = styled.button`
    width: 100px;
    height: 80%;
    border-radius: 30px;
    border-style: none;
    background-color: #012340;
    margin-right: 10px;
    font-size: 15px;
    color: white;

    display: inline-block;
`

const HeaderContainer = styled.div`
    background-color: rgba(230,230,230,.75);
    border-radius: 0 2em 2em 0;
    padding: 0.5em;
    margin-bottom: 20px;
    margin-top: 10px;
    width: 92%;
    h1{
        font-size: 2.5em;
        margin: 0;
        color: black;
    }
    
    display: flex;
    flex-direction: row;
    
`;




function Chat({message, messages, setMessage, sendMessage, submitHandler, mongoMessages}) {
    

console.log(messages)

    return (
        <StyledContainer>
            {/* sidebar with chats */}
            <StyledChatRooms>
                <HeaderContainer>
                    {/* <Logo /> */}
                    <h1>chats</h1>
                </HeaderContainer>

                {/* The following is one chat */}
                <StyledChatContainer>
                    <StyledChatRoom>
                        Chat room 1
                    </StyledChatRoom>

                    <StyledSelect>

                        Select
                    </StyledSelect>

                </StyledChatContainer>



                <StyledChatContainer>
                    <StyledChatRoom>
                        Chat room 2
                    </StyledChatRoom>

                    <StyledSelect>

                        Select
                    </StyledSelect>

                </StyledChatContainer>








            </StyledChatRooms>

            {/* Main chat selected, with messages */}
            <StyledChat>
                <StyledMessagesContainer>
                    {/* {test.map(msg => <Message test={msg} />)} */}
                    {/* {(test !== undefined) ? test.map(msg => <Message test={msg.message} id={msg._id} />) : null} */}
                    {mongoMessages.map((msg, i) => <Message key={i} message={msg.message} id={msg._id} />)}
                    {/* {props.mongoMessages.map(msg => <Message test={msg.map(item => item.message)} />)} */}
                    {/* {props.mongoMessages.map(msg => msg.map(item => <Message mongoData={item.message} test={test} id={item._id} />))} */}
                </StyledMessagesContainer>
               

                    
                    
                    <StyledTextContainer id='messageForm' action='' onSubmit={event => submitHandler(event)}>
            
                            <StyledInput  
                             type='text' 
                             name='message'
                             placeholder="Type a message..."
                             
                             value={message}
                             onChange={({ target: { value } }) => setMessage(value)}
                            />
                            <StyledSend
                                // onClick={ event => sendMessage(event) }
                            >
                                Send
                            </StyledSend>
                        
                    </StyledTextContainer>

                    

            </StyledChat>

        </StyledContainer>
    )
}

export default Chat
