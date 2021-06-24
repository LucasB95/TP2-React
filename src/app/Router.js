import React from 'react';
//import styled from 'styled-components';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import {Character,HomePage} from '../pages';
import  {PaginaError} from './PaginaError'




export const Router = () =>{
    const [futurama,setFuturama] = React.useState("");

    console.log(futurama);

    function handleSetfuturama(futurama){
        setFuturama(futurama);
    }

    return(
        <BrowserRouter>
      <Switch>
      <Route path="/info">
          <Character  futurama = {futurama} />
        </Route>
        <Route path="/error">
        <PaginaError/>
        </Route>           
        <Route path="/">
          <HomePage setFuturama={handleSetfuturama}/>
        </Route>  
      </Switch>  
    </BrowserRouter>

    )
}

