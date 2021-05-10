export default function Footer(props){
    
    const {styleOfOrderButton, orderButton, setToOverlay} = props;

    function verifyKeepTheOrder(button){
        if(button === "Tudo certo, fazer pedido!"){
            setToOverlay("overlay");
        }else{
            alert("Selecione os 3 itens para fechar o pedido");
        }
    }  

    return (
        <div className="footer">
            <button className={styleOfOrderButton} onClick={() => verifyKeepTheOrder(orderButton)}>
            {orderButton}
            </button>
        </div>
    );
}