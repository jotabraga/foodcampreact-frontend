import React,{useState} from "react";

export default function Food(props){
    
    const {title, description, price, image} = props.item;
    const {SetTheAmount, SetTheChoice, item} = props;
    const [count, setCount] = useState(0);
    const [selection, setSelection] = useState("opcao"); 

    function selectItem(item, parameter){
        if(count === 0){            
            addItem(item);
            setSelection(selection + " selecionado");
            SetTheChoice(item,parameter); //função que esta no app que muda pra true a variavel de selected do prato
        }    
    }

    function deductItem(item,parameter){
        let nextCount = count - 1;
        SetTheAmount(item, nextCount);

        if (nextCount === 0){
            setCount(count - 1);
            SetTheChoice(item,parameter); //função que esta no app e muda pra false a variavel selected do prato
            setSelection("opcao");  //desaparece com o botão de reduzir e desativa a classe selecionado
        }else{
            setCount(count - 1);
        }             
    }
    
    function addItem(item){
        let nextCount = count + 1;
        setCount(nextCount);
        SetTheAmount(item, nextCount);
    }

    return(
        
        <div className={selection} onClick={() => selectItem(item, true)}>
            <img src={image} />
            <div className="titulo">{title}</div>
            <div className="descricao">{description}</div>
            <div className="preco">R$ {price}</div>
            <div className="check">
                <div className="counter">
                    <button onClick={() => deductItem(item, false)}>-</button>{count}<button onClick={() => addItem(item)}>+</button>
                </div>
            </div>
        </div>     
    );
}