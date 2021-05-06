import React from "react";

export default function Footer(){

    const [orderButton, setOrderButton] = React.useState("Selecione os 3 itens para fechar o pedido");

    function changeButton(){
        // if (verifyAllItens){
        //     setOrderButton("Fechar pedido");
        // }
    }

    

    return (
        <div class="footer">
            <a href="#" class="fazer-pedido">
            {orderButton}
            </a>
        </div>
    );
}