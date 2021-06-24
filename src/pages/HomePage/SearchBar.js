import React from 'react';

export const SearchBar = ({handleSubmit}) =>{

const [futurama,setfuturama] =  React.useState("");
const [futuramaData,setfuturamaData] = React.useState();

React.useEffect(() => { 
    if(futurama)
    fetch(`https://apifuturama.herokuapp.com/api/character/${futurama}`).then((response) => 
        response.json().then((data) => setfuturamaData(data)));
},[futurama])

function handleSubmit(event){
    event.preventDefault();
    setfuturama(event.target.futurama.value);
}

return(
    <div>
        <form onSubmit={handleSubmit}>
            <label>
                <input 
                id = "futurama"
                style={{marginBottom: '10px',padding : '10px',border: 'none',borderRadius: '6px'}} 
                type="text"
                 />
            </label>
            <button>Buscar</button>
        </form>

        {futuramaData &&(
            <img src={futuramaData.image} alt="Imagen del personaje" />             
        )}

    </div>
)


}

