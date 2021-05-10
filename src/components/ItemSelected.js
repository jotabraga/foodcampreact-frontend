export default function ItemSelected(props){

    const {title, price, amount} = props;

    return(
        <li className="prato">
            <div className="nome">{title}</div>
            <div className="preco">R$ {price} ({amount}x)</div>
        </li>
    );
}