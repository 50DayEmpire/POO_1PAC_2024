import { useState } from "react";
import Elemento from "./listar";

import './lista.css';

export default function ListaTareas(){
    const [titulo, setTitulo] = useState("");
    const [el, setEl] = useState([]);
    const [isEditar,setIsEditar] = useState(false);

    function handleClick(e){
        e.preventDefault();
    }

    function handleChange(event){
        const value = event.target.value;

        setTitulo(value);
    }

    function handleSubmit(e){
        e.preventDefault();

        const nuevoEl = {
            id: crypto.randomUUID(),
            titulo: titulo,
            completado: false
        }
        const temp = [...el];
        temp.unshift(nuevoEl);
        setEl(temp);

        setTitulo("");
    }

    function handleUpdate(id, valor){
        const temp = [...el];
        const item = temp.find(item => item.id === id );
        item.titulo = valor;
        setEl(temp);
    }

    function handleDelete(id){
        const temp = el.filter(item => item.id !== id);
        setEl(temp);

    }



    return(
        <div className="contenedorPrincipal">
            <form className="formulario" onSubmit={handleSubmit}>
                <input onChange={handleChange} className="cajaTexto" value={titulo}/>
                <input onClick={handleSubmit} type="submit" value="Añadir Tarea" className="btnAñadir"></input>        
            </form>
            <div className="elContenedor">
                {el.map((item) => (
                    <Elemento key={item.id} item={item} onUpdate={handleUpdate} onDelete={handleDelete} />
                ))}
            </div>
        </div>
       
    )
        
}