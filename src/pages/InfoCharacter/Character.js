import React from 'react';
import { useHistory } from "react-router";
import  {PaginaError} from '../../app/PaginaError'
import styled from 'styled-components';
import background from '../../img/back2.jpg';


export const Character = ({futurama}) =>{
  //const [futurama, setOnePiece] = React.useState("11");//
  const [futuramaData, setfuturamaData] = React.useState();
  const [status, setStatus] = React.useState("id");
  
  const history = useHistory();
  
  React.useEffect(() => { 
    setStatus("loading");
    fetch(`https://futuramaapi.herokuapp.com/api/v2/characters?search=${futurama}`).then((response) => response.json().then((data) => setfuturamaData(data)))
    .catch((error) => setStatus("error"))
    .finally(setStatus("id"));
  },[futurama])
  
 
    console.log(status);
     console.log(futuramaData);
  
     if(futuramaData) {
         if(futurama === undefined){
                return (
                    <Notfound>
                    
                    <button onClick={() => history.push("./")}>Volver a Home</button>
                    <h1>"No se encuentra ese personaje en la base de datos"</h1>;
                    
                   <PaginaError/>                
                   
                    </Notfound>                   
                );
          }
        
       }
     
 
     if (status === "id") {
        return (
        
          <Pirate>
            <button onClick={() => history.push("./")}>Volver a Home</button>
            { futuramaData &&(                 
                       
                    <div>
                        <div> 
                            <img src={futuramaData.slice(0,1).map((elem) => elem.PicUrl )     } alt="Imagen del personaje" /> 
                        </div>

                        <div>                    
                        <h1>{futuramaData.slice(0,1).map((elem) => elem.Name)}</h1>            
                        <h2>Edad : {futuramaData.slice(0,1).map((elem) => elem.Age)}</h2>
                        <h2>Primera Aparición : {futuramaData.slice(0,1).map((elem) => elem.FirstAppearance)} </h2>
                        <h2>Planeta : {futuramaData.slice(0,1).map((elem) => elem.Planet)} </h2>
                        <h2>Profesión : {futuramaData.slice(0,1).map((elem) => elem.Profession)}</h2>
                        <h2>Familiares : {futuramaData.slice(0,1).map((elem) => elem.Relatives)}</h2>
                        <h2>Especie : {futuramaData.slice(0,1).map((elem) => elem.Species)}</h2>
                        <h2>Estado : {futuramaData.slice(0,1).map((elem) => elem.Status)}</h2>
                        <h2>Interpretado por : {futuramaData.slice(0,1).map((elem) => elem.VoicedBy)}</h2>
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
          
            <button onClick={() => history.push("./")}>Volver a Home</button>
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

    