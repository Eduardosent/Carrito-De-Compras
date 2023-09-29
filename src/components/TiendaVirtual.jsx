import React,{useState} from 'react'
import Producto from './Producto';
import '../assets/style.css'
import Favorito from './Favorito';

//import Producto from './Producto';


export default function TiendaVirtual() {

  let productos = [
    {id: 1, name:"television",marca:"" ,imagen:"./img/televisor.jpg", precio:500, description: "",fav:false},
    {id: 2, name:"DVD",marca:"", imagen:"./img/dvd.jpg", precio:50, description: "",fav:false},
    {id: 3, name:"celular",marca:"SAMSUNG", imagen:"./img/celular.jpg", precio:150, description: "",fav:false},
    {id: 4, name:"Cocina electrica",marca:"", imagen:"./img/cocina.jpg", precio:300, description: "",fav:false},
    {id: 5, name:"lavadora",marca:"", imagen:"./img/lavadora.jpg", precio:400, description: "",fav:false},
    {id: 6, name:"impresora",marca:"", imagen:"./img/impresora.jpg", precio:200, description: "",fav:false},
    {id: 7, name:"celular",marca:"Iphone", imagen:"./img/celular.jpg", precio:210, description: "",fav:false},
];

    const [total , setTotal ] = useState(0);
    const [product, setProduct] = useState(productos);
    const [favoritos, setFavoritos] = useState([]);
    const [pagina, setPagina] = useState(0);
    const [busqueda, setBusqueda] = useState("");
    const resultados = productos.filter(product => product.name.toLowerCase() == busqueda);
    //const [result, setResult] = useState(resultados);

    
   const buscar = (e) => {
    setBusqueda(e.target.value.toLowerCase());
   }
   const resetTodos = () => {
    setPagina(0);
    setTotal(0);
   }
   const resetFavoritos = () => {
    setPagina(1);
    setTotal(0);
   }
return (
  <div className='contenedor'>
    <input onChange={buscar} type="text" name="" id="" placeholder='Busca tu Producto'/>
    <button>su total es ${total}</button>
    <button onClick={resetTodos}>Todos</button>
    <button onClick={resetFavoritos}>Favoritos</button>
    {
      resultados.length === 0 ? "" :
        <div className='busqueda'>
          <h2 style={{color:'white',textAlign:'center'}}>Resultados:</h2>
          <div className='grid'>
            {
              resultados.map((producto)=>(
                <Producto key={producto.id} producto={producto} total={total} setTotal={setTotal}  setearFavorito={setFavoritos} favoritos={favoritos} setProduct={setProduct} product={product}/>))
            }
        </div>
        </div>
      
    }
    
    <div className='grid' >
  {
    pagina == 0 ?
    productos.map((producto)=>(
      <Producto key={producto.id} producto={producto} total={total} setTotal={setTotal}  setearFavorito={setFavoritos} favoritos={favoritos} setProduct={setProduct} product={product}/>
    ))
    :
    favoritos.map((favorito)=>(
      <Favorito key={favorito.id} favorito={favorito} setearFavorito={setFavoritos} favoritos={favoritos} total={total} setTotal={setTotal}/>
    ))
  }
  
  </div>
  </div>
)
}
