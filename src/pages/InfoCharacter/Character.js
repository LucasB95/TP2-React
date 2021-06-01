import React from 'react';
import { useHistory } from "react-router";
import  {PaginaError} from '../../app/PaginaError'
import styled from 'styled-components';
import background from '../../img/background.jpg';


export const Character = ({onepiece}) =>{
    //const [onepiece, setOnePiece] = React.useState("11");//
    const [onepieceData, setOnePieceData] = React.useState();
    const [status, setStatus] = React.useState("id");

    const history = useHistory();

    React.useEffect(() => { 
        setStatus("loading");
        fetch(`https://apionepiece.herokuapp.com/api/character/${onepiece}`).then((response) => response.json().then((data) => setOnePieceData(data)))
        .catch((error) => setStatus("error"))
        .finally(setStatus("id"));
    },[onepiece])


     console.log(onepieceData);
  
     if(onepieceData) {
         if(onepieceData.detail === "No encontrado."){
                return (
                    <Notfound>
                    
                    <button onClick={() => history.push("./home")}>Volver a Home</button>
                    <h1>"No se encuentra ese personaje en la base de datos"</h1>;
                    
                   <PaginaError/>                
                   
                    </Notfound>                   
                );
          }
        
       }
     
 
     if (status === "id") {
        return (
        
          <Pirate>
            <button onClick={() => history.push("./home")}>Volver a Home</button>
            { onepieceData &&(                 
                            
                     <div>
                        <div> 
                            <img src={onepieceData.image} alt="Imagen del personaje" /> 
                     
                  </div>
                    <div>                    
                    <h1>{onepieceData.name}</h1>            
                    <h2>Edad : {onepieceData.age}</h2>
                    <h2>Genero : {onepieceData.gender} </h2>
                    <h2>Recompensa : {onepieceData.reward}</h2>
                    <h2>Fruta del diablo : {onepieceData.fruit_name}</h2>
                    <h2>Tipo de Fruta : {onepieceData.fruit_type}</h2>
                    <h2>Raza : {onepieceData.race}</h2>
                    <h2>Rango : {onepieceData.rank}</h2>
                    <h2>Estado : {onepieceData.status}</h2>
                    <h2>Origen : {onepieceData.origin}</h2>
                    <h2>Ocupacion : {onepieceData.occupation}</h2>
                    <h2>Descripcion : {onepieceData.description}</h2>
                        </div>

                       </div>   
                    )}
       </Pirate>
             
        );
      } else if (status === "loading") {
        return "Cargando...";
      }else if (status === "error" ) { 
        return (
            <Notfound>
          
            <button onClick={() => history.push("./home")}>Volver a Home</button>
            <h1>"No se encuentra ese personaje en la base de datos"</h1>;
            
            <PaginaError/>          
        </Notfound>
        );
      } 

                   
    };

    const Pirate = styled.div`
    color: lime;
    
    width:100vw;
    height:100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-Image: url(${background});
    //background-image : url('https://wallpapercave.com/wp/wp8300034.jpg')
    `

    const Notfound = styled.div`
    width:100vw;
    height:100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: skyblue;

`;

    