import React from "react";


export default function Food(props){
    
    const {title, description, price, image} = props.item;

    const [count, setCount] = React.useState(0);
    const [selection, setSelection] = React.useState("opcao"); 

    

    function selectItem(item, parameter){
        if(count === 0){            
            addItem(item);
            setSelection(selection + " selecionado");
            props.SetTheChoice(item,parameter); //função que esta no app que muda pra true a variavel de selected do prato
            verifyFoodChoose();
        }    
    }

    function deductItem(item,parameter){
        let nextCount = count - 1;
        props.SetTheAmount(item, nextCount);
        console.log(item);

        if (nextCount === 0){
            setCount(count - 1);
            props.SetTheChoice(item,parameter); //função que esta no app e muda pra false a variavel selected do prato
            setSelection("opcao");  //desaparece com o botão de reduzir e desativa a classe selecionado
        }else{
            setCount(count - 1);
        }             
    }
    
    function addItem(item){
        let nextCount = count + 1;
        setCount(nextCount);
        props.SetTheAmount(item, nextCount);
    }

    return(
        
        <div className={selection} onClick={() => selectItem(props.item, true)}>
            <img src={image} />
            <div class="titulo">{title}</div>
            <div class="descricao">{description}</div>
            <div class="preco">R$ {price}</div>
            <div class="check">
                <div className="counter">
                    <button onClick={() => deductItem(props.item, false)}>-</button>{count}<button onClick={() => addItem(props.item)}>+</button>
                </div>
            </div>
        </div>     
    );
}