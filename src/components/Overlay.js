
export default function Overlay(props){

    console.log(props);

    const selectedDishes = props.dishesData.filter(item => item.selected===true); //filtro para filtrar todas as opções escolhidas
    const selectedDrinks = props.drinksData.filter(item => item.selected===true);
    const selectedDesserts = props.dessertsData.filter(item => item.selected===true);

    console.log(selectedDesserts);

    const dishPrice = selectedDishes.map(item => item.price);
    const drinkPrice = selectedDrinks.map(item => item.price);
    const dessertPrice = selectedDesserts.map(item => item.price);

    

    const dishCost = dishPrice.reduce((accumulator, currentValue) => accumulator + currentValue);
    const drinkCost = drinkPrice.reduce((accumulator, currentValue) => accumulator + currentValue);
    const dessertCost = dessertPrice.reduce((accumulator, currentValue) => accumulator + currentValue);

    const total = (dishCost + drinkCost + dessertCost);

    return (
        <div class="overlay escondido">
        <div class="confirmar-pedido">
            <div class="titulo">Confirme seu pedido</div>

            <ul>
            {selectedDishes.map(item => {

                <li class="prato">
                    <div class="nome">{item.title}</div>
                    <div class="preco">{item.price}({item.amount}x)</div>
                </li>
            })
            };
            

            {selectedDrinks.map(item => {
            
                <li class="bebida">
                    <div class="nome">{item.title}</div>
                    <div class="preco">{item.price}({item.amount}x)</div>
                </li>
            })
            }

            {selectedDesserts.map(item => {

                <li class="sobremesa">
                    <div class="nome">{item.title}</div>
                    <div class="preco">{item.price}({item.amount}x)</div>
                </li>
            })
            } 

            <li class="total">
                <div>Total</div>
                <div>R$ {total}</div>
            </li>

            </ul>
            <button class="confirmar">Tudo certo, pode pedir!</button>
            <button class="cancelar">Cancelar</button>
        </div>
        </div>
    );
}