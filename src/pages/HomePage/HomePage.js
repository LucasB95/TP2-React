import React from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import background from '../../img/back2.jpg';
import logo from '../../img/logoFuturama.png';



export const HomePage = ({setFuturama}) =>{
  
    const [input, setInput] = React.useState();
    const history = useHistory("/home");

    function handleSearchClick(){
        setFuturama(input);
        history.replace("/info");
    }
    
    function handleInputChange(event){
      setInput(event.target.value);
    }

    function handleSearchClickAzar(){
      const random = Math.floor(Math.random()*35);
      setFuturama(random);
      history.replace("/info");
    }

    return(
        <Home>                       
        <Wrapper>        
          <FuturamaLogo src={logo} alt="Logo Futurama"/>
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
border: none;
border-radius: 6px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;
background-Image: url(${background});
//background-image : url('https://wallpapercave.com/wp/wp8300034.jpg')
`
const Wrapper = styled.div`
width:50%;
display: flex;
flex-direction: column;
justify-content: center;
`
const FuturamaLogo = styled.img`
width:100%;
padding-bottom: 5px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;

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