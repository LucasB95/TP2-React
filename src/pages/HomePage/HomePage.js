import React from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import {OnePieceLogoUrl} from './constants';
//import {SearchBar} from './SearchBar'; 


export const HomePage = ({setOnePiece}) =>{
  
    const [input, setInput] = React.useState();
    const history = useHistory();

    function handleSearchClick(){
      setOnePiece(input);
        //setOnePiece(input.toLowerCase());
        history.replace("/info");
    }

    function handleInputChange(event){
      setInput(event.target.value);
    }

    function handleSearchClickAzar(){
      const random = Math.floor(Math.random()*35);
      setOnePiece(random);
      history.replace("/info");
    }

    return(
        <Home>                       
        <Wrapper>        
          <OnePieceLogo src={OnePieceLogoUrl} alt="logo One Piece"/>
          <Search
          placeholder= "Buscar el personaje"
          value={input}
          onChange={handleInputChange}
          type="search"          
          />      
            <ButtonsWrapper>
          <button onClick={handleSearchClick}>Buscar</button>
         <button onClick={handleSearchClickAzar} >¡Azar!</button>
         </ButtonsWrapper>
        </Wrapper>
      </Home> 
    )
}

const Home = styled.div`
width:100vw;
height:100vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-image : url('https://wallpapercave.com/wp/wp8300034.jpg')
`
const Wrapper = styled.div`
width:50%;
display: flex;
flex-direction: column;
justify-content: center;
`
const OnePieceLogo = styled.img`
width:100%;
padding-bottom: 20px;
border-radius: 6px;
width:500px;
justify-content: center;
border: 'none',
`

const Search = styled.input`
width: 100%;
margin-bottom: 10px;
padding : 10px;
border: none;
border-Radius: 6px;
   
`

const ButtonsWrapper = styled.div`
display: flex; 
gap: 20px;

button {
  cursor: pointer;
  color: yellow;
  padding: 10px; 
  font-weight : 700;
  background-color:red;
  border: none;
  border-radius: 6px;
  transition: all ease-out 0.3;

  &:hover{
  filter: brightness(0.8);
  transform: translateY(-4px);
  }

  &:first-child{
    width:70%;
  }
  &:last-child{
    width:30%;
  }
}

`;