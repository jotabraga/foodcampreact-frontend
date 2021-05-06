import SelectFood from "./SelectFood";
import React from "react";


export default function Food(props){
    console.log(props);
    console.log(props.item);

    const {title, description, price, image} = props.item;

    const [count, setCount] = React.useState(0);

    

    function SelectItem(item){
    SelectFood(this);
    }

    function deductItem(){
      if(count>0){
        setCount(count - 1);
      }        
    }

    function addItem(){
        setCount(count + 1);
    }

    return(
        
        <div class="opcao" onclick={() => SelectItem({props})}>
            <img src={image} />
            <div class="titulo">{title}</div>
            <div class="descricao">{description}</div>
            <div class="preco">R$ {price}</div>
            <div class="check">
                <div className="counter">
                    <button onClick={() => deductItem()}>-</button>{count}<button onClick={() => addItem()}>+</button>
                </div>
            </div>
        </div>     
    );
}