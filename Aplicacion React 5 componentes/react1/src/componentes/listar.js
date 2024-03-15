import { useState } from "react";

export default function Elemento({ item, onUpdate, onDelete }){    
    const [iseditar,setIsEditar] = useState(false);

    function FormEdit(){

        const [nuevoValor, setNuevoValor] = useState(item.titulo);

        function handleSubmit(e){
            e.preventDefault();
        }

        function handleChange(e){

            const value = e.target.value;
            setNuevoValor(value);
        }

        function handleClick(){
            onUpdate(item.id, nuevoValor);
            setIsEditar(false)
        }

        return (<form className="actualizarForm" onSubmit={handleSubmit}>
            <input type="text" className="porHacerEntry" onChange={handleChange} value={nuevoValor}/>
            <button className="btn" onClick={handleClick}>Actualizar</button>
        </form>)
    }

    function PorHacer () {
        return (
            <div className="info">
                <span className="todoTitle">{item.titulo}</span>
                <button className="btn" onClick={()=>setIsEditar(true)}>Editar</button> 
                <button className="btnDelete" onClick={(e) => onDelete(item.id)}>Eliminar</button>
            </div>
        )
    }

    return (
        <div className="todo">
            {iseditar ? <FormEdit /> : <PorHacer/> } 
        </div>
    
    );
}