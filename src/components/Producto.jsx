import React,{useState} from 'react'
import '../assets/style.css'

export default function Producto({precio, productName, setTotal, total ,imagen}) {

  const colors = ["red", "blue", "green","gray","violet", "orange"];
  const color = colors[Math.floor(Math.random() * colors.length)];

  const [count, setCount] = useState(0);
  const [colour, setColour] = useState(color);
  const [colorFavorito, setColorFavorito] = useState('white');

  const sumar = () => {
    if(count>=10){
  }else{
    setCount(count + 1)
      setTotal(total + precio)};
      if(count >=0){
        setColour('black');
      }
  }
  const restar = () => {
    if(count<=0){
    }else{
      setCount(count - 1)
      setTotal(total - precio)};
      if(count ==1){
        setColour(color)};
  }

  const agregarFavorito = () => {
    if(colorFavorito == 'white'){
      setColorFavorito('yellow');
    }else{
      setColorFavorito('white');
    }
  }
return (
  <div className='center producto' style={{backgroundColor: colour}}>
    <p onClick={agregarFavorito} className='favorito' style={{color: colorFavorito}}>★</p>
    <img className='producto-imagen' src={imagen} alt="" />
    <h2>{productName}</h2>
    <h3>precio:${precio}</h3>
    <div>
      <button onClick={sumar} >+</button>
      <button>{count}</button>
      <button onClick={restar}>-</button>
    </div>
  </div>
  
)
}
