import React, {useState} from 'react'
import styled from 'styled-components';
import SendIcon from '@material-ui/icons/Send';

function ChatInput({ sendMessage }) {

    const[input, setInput] = useState("");
    console.log(input.value);
    const send = (e) => {
        e.preventDefault();
        if(!input) return;
        sendMessage(input)
        setInput("")
        
    }
    
    
    return (
        <Container>
            <InputContainer>
                <form action="">
                    <input 
                        onChange={(e) => setInput(e.target.value)}
                        type="text" 
                        value={input}
                        placeholder="Message here..."/>
                    <SendButton 
                        type="submit"
                        onClick={send}>
                        <Send/>
                    </SendButton>
                </form>
            </InputContainer>
        </Container>
    )
}

const Container = styled.div`
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 24px;
`
const InputContainer = styled.div`
    border: 1px solid #8D8D8E;
    border-radius: 4px;

    form {
        display: flex;
        height: 42px;
        align-items: center;
        padding-left: 10px;
        input{
            flex: 1;
            border: none;
            font-size: 13px;
            background: inherit;
        }
        input:focus {
            outline: none;
        }
    }
`
const SendButton = styled.button`
    background: #007a5a;
    border-radius: 2px;
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 5px;
    cursor: pointer;
    border: none;
    .MuiSvgIcon-root {
        width: 18px;
    }

    :hover{
        background: #1485671
    }
`
const Send = styled(SendIcon)`
    color: #D9D9D9;
    
`
export default ChatInput;