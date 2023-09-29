import React,{useState} from 'react'

export default function Favorito({favorito, setearFavorito, favoritos,total,setTotal}) {

  const [count,setCount] = useState(0);

    const quitarFavorito = () => {
        const fav = favoritos.filter(x=> x.id != favorito.id);
        const favo = favoritos.filter(x=> x.id == favorito.id);
        setearFavorito(fav);
        setTotal(total - favo[0].precio*count)
    }
    const sumar = () => {
      if(count>=10){
      }else{
        setCount(count + 1)
        setTotal(total + favorito.precio)
      };
    }
    const restar = () => {
      if(count<=0){
      }else{
        setCount(count - 1)
        setTotal(total - favorito.precio)
      };
    }
  return (
    <div className='center producto' style={{backgroundColor: 'black'}} key={favorito.id}>
    <p onClick={quitarFavorito} className='favorito' style={{color: 'yellow'}}>★</p>
    <img className='producto-imagen' src={favorito.imagen} alt="" />
    <h2>{favorito.nombre} {favorito.marca}</h2>
    <h3>precio:${favorito.precio}</h3>
    <div>
      <button onClick={sumar}  className='btn-verde'>+</button>
      <button>{count}</button>
      <button onClick={restar} className='btn-rojo'>-</button>
    </div>
  </div>
  )
}
