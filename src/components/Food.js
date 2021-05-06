export default function Food(props){

    console.log(props.item);

    const {title, description, price, image} = props.item;

    return(
        <div class="opcao" onclick="selecionarPrato('.prato-frango', 'Frango Yin Yang', 14.90)">
            <img src={image} />
            <div class="titulo">{title}</div>
            <div class="descricao">{description}</div>
            <div class="preco">R$ {price}</div>
            <div class="check">
                <ion-icon name="checkmark-circle"></ion-icon>
            </div>
        </div>        
    );
}