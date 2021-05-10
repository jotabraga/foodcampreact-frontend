import ItemSelected from "./ItemSelected.js";
import ConfirmOrder from "./ConfirmOrder.js";

export default function Overlay(props){

    const {overlay, setToOverlay, dishesData, drinksData, dessertsData, name, adress} = props

    const selectedDishes = dishesData.filter(item => item.selected === true); //filtro para filtrar todas as opções escolhidas
    const selectedDrinks = drinksData.filter(item => item.selected === true);
    const selectedDesserts = dessertsData.filter(item => item.selected === true);
        
    const dishPrice = selectedDishes.reduce((elem, current) => { return elem + (current.price * current.amount) },0).toFixed(2);    
    const drinkPrice = selectedDrinks.reduce((elem, current) => { return elem + (current.price * current.amount) },0).toFixed(2);
    const dessertPrice = selectedDesserts.reduce((elem, current) => { return elem + (current.price * current.amount) },0).toFixed(2);

    const total = (parseFloat(dishPrice) + parseFloat(drinkPrice) + parseFloat(dessertPrice)).toFixed(2);

    return (
        <div class={overlay}>
        <div class="confirmar-pedido">
            <div class="titulo">Confirme seu pedido</div>

            <ul>           
                {selectedDishes.map(item => <ItemSelected title={item.title} amount={item.amount} price={item.price} />)}

                {selectedDrinks.map(item => <ItemSelected title={item.title} amount={item.amount} price={item.price} />)}
            
                {selectedDesserts.map(item => <ItemSelected title={item.title} amount={item.amount} price={item.price} />)}      

                <li class="total">
                    <div>Total</div>
                    <div>R$ {total}</div>
                </li>

                <li class="client">
                    <div class="nome">Nome: {name}</div>                               
                </li>

                <li class="adress">
                    <div class="nome">Endereço: {adress}</div> 
                </li>

            </ul>

            <ConfirmOrder selectedDishes={selectedDishes} selectedDrinks={selectedDrinks} selectedDesserts={selectedDesserts} total={total} name={name} adress={adress}/>
            <button class="cancelar" onClick={() => setToOverlay("overlay escondido")}>Cancelar</button>
        </div>
        </div>
    );
}