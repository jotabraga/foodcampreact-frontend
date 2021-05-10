export default function ItemSelected(props){

    const {title, price, amount} = props;

    return(
        <li class="prato">
            <div class="nome">{title}</div>
            <div class="preco">R$ {price} ({amount}x)</div>
        </li>
    );
}