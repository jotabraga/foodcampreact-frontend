import React from 'react';

export default function ConfirmOrder (props) {
    const {selectedDishes, selectedDrinks, selectedDesserts, total, name, adress} = props;
    

    const confirm = (selectedDishes, selectedDrinks, selectedDesserts, total, name, adress) => {
		
		const text = `Olá, gostaria de fazer o pedido:
			- Prato: ${selectedDishes[0].title}
			- Bebida: ${selectedDrinks[0].title}
			- Sobremesa: ${selectedDesserts[0].title}
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
