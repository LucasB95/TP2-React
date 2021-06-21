import React from 'react';
//import styled from 'styled-components';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import {Character,HomePage} from '../pages';
import  {PaginaError} from './PaginaError'

export const Router = () =>{
    const [onepiece,setOnePiece] = React.useState("");

    console.log(onepiece); // Borrar log

    function handleSetOnePiece(onepiece){
        setOnePiece(onepiece);
    }

    return(
      <BrowserRouter>
        <Switch>
          <Route path="/info">
            <Character  onepiece={onepiece} />
          </Route>
          <Route path="/error">
            <PaginaError/>
          </Route>           
          <Route path="/">
            <HomePage setOnePiece={handleSetOnePiece}/>
          </Route>  
        </Switch>  
      </BrowserRouter>
    )
}

