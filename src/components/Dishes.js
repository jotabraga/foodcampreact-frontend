export default function Dishes(props){

    {title, image, description, price} = props;

    return(
        <div class="opcoes pratos">
          <div class="opcao prato-frango" onclick="selecionarPrato('.prato-frango', 'Frango Yin Yang', 14.90)">
            <img src={image} />
            <div class="titulo">{title}</div>
            <div class="descricao">{description}</div>
            <div class="preco">R$ {price}</div>
            <div class="check">
              <ion-icon name="checkmark-circle"></ion-icon>
            </div>
          </div>
        </div>
    );
}