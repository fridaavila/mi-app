import Item from "../Item/Item";

const ItemList = ({ items }) => {
  
    return (
        <div style={ {
            display: "flex",
            width: "100%",
            minHeight: "100vh",
            justifyContent: "space-evenly",
            alignItems: "center"
        }

        }>
            {
                items.map((element)=>{
                    return <Item key={element.id} element={element} />
                } )
            }
        </div>
    )

};

export default ItemList;
