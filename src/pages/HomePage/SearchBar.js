import React from 'react';

export const SearchBar = ({handleSubmit}) =>{

const [onepiece,setOnePiece] =  React.useState("");
const [onepieceData,setOnePieceData] = React.useState();

React.useEffect(() => { 
    if(onepiece)
    fetch(`https://apionepiece.herokuapp.com/api/character/${onepiece}`).then((response) => 
        response.json().then((data) => setOnePieceData(data)));
},[onepiece])

function handleSubmit(event){
    event.preventDefault();
    setOnePiece(event.target.onepiece.value);
}

return(
    <div>
        <form onSubmit={handleSubmit}>
            <label>
                <input 
                id = "onepiece"
                style={{marginBottom: '10px',padding : '10px',border: 'none',borderRadius: '6px'}} 
                type="text"
                 />
            </label>
            <button>Buscar</button>
        </form>

        {onepieceData &&(
            <img src={onepieceData.image} alt="Imagen del personaje" />             
        )}

    </div>
)


}

