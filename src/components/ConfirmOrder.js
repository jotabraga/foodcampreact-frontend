import React from 'react';

export default function ConfirmOrder (props) {
    const {selectedDishes, selectedDrinks, selectedDesserts, total, name, adress} = props;
    let main = "";
    let beverage = "";
    let dessert = "";

    selectedDishes.forEach(element => {
        main += element.title + "/ ";        
    });

    selectedDrinks.forEach(element => {
        beverage += element.title + "/ ";        
    });

    selectedDesserts.forEach(element => {
        dessert += element.title + "/ ";        
    });
    

    const confirm = (selectedDishes, selectedDrinks, selectedDesserts, total, name, adress) => {
		
		const text = `Olá, gostaria de fazer o pedido:
			- Prato: ${main}
			- Bebida: ${beverage}
			- Sobremesa: ${dessert}
			Total: R$ ${total}
			Nome: ${name}
			Endereço: ${adress}`;

		const urlText = encodeURI(text);
		const url = `https://wa.me/5512988231388/?text=${urlText}`;
		window.location.href = url;
	};

	return (
		<button class="confirmar" onClick={() => confirm(selectedDishes, selectedDrinks, selectedDesserts, total, name, adress)}>
			Tudo certo, pode pedir!
		</button>
	);
};
