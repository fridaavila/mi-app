import {useEffect, useState} from "react"

const ItemCount = ({stock, initial=1, onAdd}) => {

    const [contador , setContador] = useState (initial); // ---> []

    useEffect(()=>{
        setContador(initial)
    }, [initial])

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
        <h2>Quantity: {contador}</h2>
        <button onClick={restar}>  -  </button>
        <button onClick={ ()=> onAdd(contador)}>add to cart</button>
        <button onClick={sumar}>  +  </button>
    </div>
  )
}

export default ItemCount