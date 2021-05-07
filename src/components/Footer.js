import React from "react";

export default function Footer(props){

    const {dishes, drinks, desserts} = props;

    const [orderButton, setOrderButton] = React.useState("Selecione os 3 itens para fechar o pedido");

    function changeButton(){
        
    }

    

    return (
        <div class="footer">
            <a href="#" class="fazer-pedido">
            {orderButton}
            </a>
        </div>
    );
}