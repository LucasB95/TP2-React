import React from 'react';
import{Link} from 'react-router-dom';
import styled from 'styled-components';
import background from '../img/background.jpg';


export const PaginaError = () => {

    var errorGif = [
        "https://media.giphy.com/media/3o6Zt6ML6BklcajjsA/giphy.gif",
        "https://media.giphy.com/media/xTiN0L7EW5trfOvEk0/giphy.gif",
        "https://media.giphy.com/media/nVTa8D8zJUc2A/giphy.gif",
         "https://media.giphy.com/media/8L0Pky6C83SzkzU55a/giphy.gif"
   ]
   
   var randomGif = errorGif[Math.floor(Math.random()*errorGif.length)];

   return (
           <Error>
       <div className="col-12 text-center m-8">
           <div>
               <img src={randomGif} alt="Error"/>
               <h1>Lo sentimos</h1>
               <p>La pagina solicitada no se encuentra</p>
               <button><Link to="/home">Clickea para volver al Inicio</Link></button>
           </div>  
       </div>
       </Error>
   );

}

const Error = styled.div`
color: white;
width:100vw;
height:100vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-Image: url(${background});
//background-image : url('https://wallpapercave.com/wp/wp8300034.jpg')
`