

export default function Food(props){

    const {image,title,description,price} = props;

    return(
        <div class="opcao" onClick="selecionarPrato('.prato-frango', 'Frango Yin Yang', 14.90)">
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