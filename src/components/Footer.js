
export default function Footer(){

    const chooseToOrder = "Selecione os 3 itens<br />para fechar o pedido";
    const closeTheOrder = "Fechar pedido";

    return (
        <div class="footer">
            <a href="#" class="fazer-pedido">
            {chooseToOrder}
            </a>
        </div>
    );
}