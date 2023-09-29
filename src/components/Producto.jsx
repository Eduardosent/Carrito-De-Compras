import React,{useState} from 'react'
import '../assets/style.css'

export default function Producto({producto, setTotal, total , favoritos, setearFavorito, ver,setProduct, product }) {

  const colors = ["red", "blue", "green","purple","violet", "orange"];
  const color = colors[Math.floor(Math.random() * colors.length)];

  const favoritox = {id: producto.id,nombre:producto.name,marca:producto.marca,precio:producto.precio,imagen:producto.imagen};

  const [count, setCount] = useState(0);
  const [colour, setColour] = useState(color);
  const favorite = favoritos.filter(x=> x.id == favoritox.id);
  const [colorFavorito, setColorFavorito] = useState("white");

  const sumar = () => {
    if(count>=10){
    }else{
      setCount(count + 1)
      setTotal(total + producto.precio)};
      if(count ==0){
        setColour('black')};
  }
  const restar = () => {
    if(count<=0){
    }else{
      setCount(count - 1)
      setTotal(total - producto.precio)};
      if(count ==1){
        setColour(color)};
  }
  const agregarFavorito = () => {
    if(colorFavorito=='white' && favorite.length == 0){
      setearFavorito([...favoritos,favoritox]);
      setColorFavorito('yellow');
    }else {
      const fav = favoritos.filter(x=> x.id != favoritox.id);
      setearFavorito(fav);
    }
  }
  

return (
  <div key={product.id} className='center producto' style={{backgroundColor: colour,display: ver}}>
    <p onClick={agregarFavorito} className='favorito' style={{color: favorite.length == 0 ? "white" : "yellow"}}>★</p>
    <img className='producto-imagen' src={producto.imagen} alt={`imagen${producto.name+producto.marca}`} />
    <h2>{producto.name} {producto.marca}</h2>
    <h3>precio:${producto.precio}</h3>
    <div>
      <button onClick={sumar} className='btn-verde'>+</button>
      <button>{count}</button>
      <button onClick={restar} className='btn-rojo'>-</button>
    </div>
  </div>
  
)
  }
