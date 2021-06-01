import React from 'react';
//import styled from 'styled-components';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import {Character,HomePage} from '../pages';
import  {PaginaError} from './PaginaError'


export const Router = () =>{
    const [onepiece,setOnePiece] = React.useState("");

    console.log(onepiece);

    function handleSetOnePiece(onepiece){
        setOnePiece(onepiece);
    }

    return(
        <BrowserRouter>
      <Switch>
  
      <Route path="/info">
          <Character  onepiece = {onepiece} />
        </Route>
        <Route path="/home">
          <HomePage setOnePiece={handleSetOnePiece}/>
        </Route>
        <Route path="/">
        <PaginaError/>
        </Route>           
      </Switch>  
    </BrowserRouter>

    )
}

// const hola = styled.div`
// flex-direction: column;
// justify-content: center;
// align-items: center;
// background-image : url('https://wallpapercave.com/wp/wp8300034.jpg')

// `