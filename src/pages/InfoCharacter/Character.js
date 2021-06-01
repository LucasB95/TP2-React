import React from 'react';
import { useHistory } from "react-router";
import  {PaginaError} from '../../app/PaginaError'
// import styled from 'styled-components';


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
     
 
     if (status === "id") {
        return (
        <>
         
            <button onClick={() => history.push("./home")}>Volver a la Home</button>
            { onepieceData &&(                 
                
                <div>
                        <div> 
                            <img src={onepieceData.image} alt="Imagen del personaje" /> 
                     
                  </div>
                    <div  >
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
       
          </>    
        );
      } else if (status === "loading") {
        return "Cargando...";
      }else if (status === "error") {
        return (
            
          <>
            <button onClick={() => history.push("./home")}>Volver a la Home</button>
            <div>"No se encuentra ese personaje en la base de datos"</div>
            
            <PaginaError/>
           
          </>
        
        );
      } 
    };


    // const diseño = styled.div`
    // display: flex;
    // flex-direction: column;
    // justify-content: center;
    // align-items: center;
    // color: red;
    // background-color: red;
    // `

