import React,{useState} from 'react'
import Producto from './Producto';
import '../assets/style.css'

//import Producto from './Producto';


export default function TiendaVirtual() {

  let productos = [
    {id: 1, name:"television", imagen:"./img/televisor.jpg", precio:500, description: ""},
    {id: 2, name:"DVD", imagen:"./img/dvd.jpg", precio:50, description: ""},
    {id: 3, name:"celular", imagen:"./img/celular.jpg", precio:150, description: ""},
    {id: 4, name:"Cocina electrica", imagen:"./img/cocina.jpg", precio:300, description: ""},
    {id: 5, name:"lavadora", imagen:"./img/lavadora.jpg", precio:400, description: ""},
    {id: 6, name:"impresora", imagen:"./img/impresora.jpg", precio:200, description: ""},
]

    const [total , setTotal ] = useState(0);
    const [carrito, setCarrito] = useState([]);

return (
  <div className='contenedor'>
  <button>su total es ${total}</button>
  <div className='grid'>
  {
    productos.map((producto)=>(
      <Producto key={producto.id} productName={producto.name} precio={producto.precio} total={total} setTotal={setTotal} imagen={producto.imagen}/>
    ))
  }
  </div>
  </div>
)
}
