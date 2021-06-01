import React from 'react';
import{Link} from 'react-router-dom';


export const PaginaError = () => {

    var errorGif = [
        "https://media.giphy.com/media/3o6Zt6ML6BklcajjsA/giphy.gif",
        "https://media.giphy.com/media/xTiN0L7EW5trfOvEk0/giphy.gif",
        "https://media.giphy.com/media/nVTa8D8zJUc2A/giphy.gif",
         "https://media.giphy.com/media/8L0Pky6C83SzkzU55a/giphy.gif"
   ]
   
   var randomGif = errorGif[Math.floor(Math.random()*errorGif.length)];
   console.log(randomGif);
//const error404 = () => {
   return (

       <div className="col-12 text-center m-8">
           <div>
               <img src={randomGif} alt="Error"/>
               <h1>Lo sentimos</h1>
               <p>La pagina solicitada no se encuentra</p>
               <Link to="/">Clickea para volver al Inicio</Link>
           </div>
   
   
       </div>
   );
   
   
  // };

 //export  default PaginaError;
}

