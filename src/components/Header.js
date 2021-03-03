import React from 'react';
import styled from 'styled-components'
import AccessTimeIcon from '@material-ui/icons/AccessTime'
import HelpOutlineIcon from '@material-ui/icons/HelpOutline'

function Header({ user, signOut, toggleTheme}){
    return (
        <Container>
            
            <Switch onChange={toggleTheme}>
                <span>Light</span>  
                <input type="checkbox" id="switch"/>
                <label for="switch" htmlFor="switch"></label>
                <span>Dark</span> 
                
            </Switch>
            <Main>
                <AccessTimeIcon/>
                <SearchContainer>
                    <Search>
                         <input type='text' placeholder="Search..."/>
                    </Search>
                </SearchContainer>
                <HelpOutlineIcon/>

            </Main>
            <UserContainer>
                <Name>
                    {user.name}
                </Name>
                <UserImage onClick={signOut}>
                    <img src={user.photo ? user.photo : "https://i.imgur.com/6VBx3io.png"} alt=""/>
                </UserImage>
            </UserContainer>
        </Container>
    )
}

export default Header;

const Container = styled.div `
    background: #140b33;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    box-shadow: 0 1px 0 0 rgb(255 255 255/10%);
`

const Main = styled.div `
    display: flex;
    margin-left: 16px;
    margin-right: 16px;
    position: relative;
`

const Switch = styled.div` 
    position: relative;
    right: 500px; 
    
    input[type=checkbox]{
        height: 0;
        width: 0;
        visibility: hidden;
    }
    
    label {
        cursor: pointer;
        width: 70px;
        height: 25px;
        display: block;
        border-radius: 100px;
        top: -4px;
        position: relative;
        border: 2px solid white;
    }
    
    label:after {
        content: '';
        position: absolute;
        top: 2px;
        left: 3px;
        width: 20px;
        height: 20px;
        background: #fff;
        border-radius: 90px;
        transition: 1s;
    }
    
    input:checked + label:after {
        left: calc(100% - 5px);
        transform: translateX(-80%);
    }
    
    label:active:after {
        width: 80px;
    }

    span:first-of-type{
        position:relative;
        right: 43px;
        top: 20px;
    }
    
    span:last-of-type{
        position:relative;
        left: 80px;
        top: -28px;
    }

`

const SearchContainer = styled.div `
    min-wdith: 400px;
    margin-left: 16px;
    margin-right: 16px;
`
const Search = styled.div `
    box-shadow: inset 0 0 0 1px rgb(104 74 104);
    width: 100%;
    border-radius: 6px;
    display: flex;
    align-items: center;

    input {
        background-color: transparent;
        border: none;
        color: white;
        padding: 4px 8px;
    }

    input:focus {
        outline: none;
    }
`

const UserContainer = styled.div `
    display: flex;
    align-items: center;
    padding-right: 16px;
    position: absolute;
    right: 0;
`
const Name = styled.div `
    padding-right: 16px;
`

const UserImage = styled.div `
    width: 28px;
    height: 28px;
    border: 2px solid white;
    border-radius: 3px;
    cursor: pointer;
    img{
        width: 100%;
    }
`


