import {useState} from "react"

const ItemCount = ({stock, initial=1, onAdd}) => {

    const [contador , setContador] = useState (initial); // ---> []

    const sumar = ()=> {
        if (contador < stock) {
            setContador(contador + 1)
        }
        
    };

    const restar = ()=> {
        if (contador > 1 ){
            setContador(contador - 1 )
        }
    }

  return (
    <div>
        <h1>estoy en el itemCount</h1>
        <h2>{contador}</h2>
        <button onClick={sumar}>sumar</button>
        <button onClick={restar}>restar</button>
        <button onClick={ ()=> onAdd(contador)}>agregar al carrito</button>
    </div>
  )
}

export default ItemCount