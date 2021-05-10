import Header from "./components/Header";
import Menu from "./components/Menu";
import Overlay from "./components/Overlay";
import Footer from "./components/Footer";
import React,{useState} from "react";

export default function App() {

  const dishesOptions = [
    {id: 0,title: "Frango Yin Yang",image: "img/frango_yin_yang.png", description: "Um pouco de batata, um pouco de salada",price: "15.00"},
    {id: 1,title: "Bife à cavalo",image: "img/bifeacavalo.jpg", description: "Bife mignon com ovo frito",price: "18.00"},
    {id: 2,title: "Vegetariano",image: "img/vegetariano.jpg", description: "Salada de alface tomate e cenoura" ,price: "17.00"}
]

  const drinksOptions = [
      {id: 3,title: "Coquinha gelada",image: "img/coquinha_gelada.png", description: "Coquinha trincando c/ limão",price: "13.00"},
      {id: 4,title: "Chopp gelado",image: "img/chopp.jpg", description: "Chopp gelado Heineken",price: "10.00"},
      {id: 5,title: "Suco natural",image: "img/suco.jpg", description: "Suco natural feito na hora",price: "8.00"}
  ]

  const dessertsOptions = [
      {id: 6,title: "Pudim",image: "img/pudim.png", description: "Pudim caseiro de leite moça",price: "11.00"},
      {id: 7,title: "Sorvete",image: "img/sorvete.jpg", description: "Sorvete gelato com duas bolas",price: "15.00"},
      {id: 8,title: "Torta",image: "img/torta.jpg", description: "Torta de limão ou morango",price: "12.00"},
  ]  

  const [dishesSelected, setDishesSelected] = useState([false,false,false]);
  const [drinksSelected, setDrinksSelected] = useState([false,false,false]);
  const [dessertsSelected, setDessertsSelected] = useState([false,false,false]);

  const [dishesAmount, setDishesAmount] = useState([0,0,0]);
  const [drinksAmount, setDrinksAmount] = useState([0,0,0]);
  const [dessertsAmount, setDessertsAmount] = useState([0,0,0]);

  const dishesData = dishesOptions.map((item, index) => ({...item, selected:dishesSelected[index], amount:dishesAmount[index]})); //adicionando selected e amount de forma mais simples
  const drinksData = drinksOptions.map((item, index) => ({...item, selected:drinksSelected[index], amount:drinksAmount[index]})); //ao inves de add direto em todas as arrays
  const dessertsData = dessertsOptions.map((item, index) => ({...item, selected:dessertsSelected[index], amount:dessertsAmount[index]}));
 
  const [orderButton, setOrderButton] = useState("Selecione os 3 itens para fechar o pedido"); //botão de fechar pedido do footer
  const [styleOfOrderButton, setStyleOfOrderButton] = useState("fazer-pedido");
  const [overlay, setOverlay] = useState("overlay escondido");

  const [name, setName] = useState("Fulano de tal");
  const [adress, setAdress] = useState("Rua bananal, 500");

     
  function SetTheChoice(element, parameter){

    let realtimeselector;
          
    const id = element.id;
    const e = (element.id)%3; //o "e" vai assumir os valores 0, 1, 2 de forma ciclica
    
    if(id < 3){      
      const newArray = [...dishesSelected];
      newArray[e]=parameter;  //o parametro pode ser falso ou verdadeiro para selecionar ou retirar a seleção atribuindo na posição "e" que vai de 0 a 2   
      setDishesSelected(newArray);   
      realtimeselector = "dish";  

    }else if(id < 6){
      const newArray = [...drinksSelected];
      newArray[e]=parameter;      
      setDrinksSelected(newArray);  
      realtimeselector = "drink"; 

    }else{
      const newArray = [...dessertsSelected];
      newArray[e]=parameter;      
      setDessertsSelected(newArray); 
      realtimeselector = "dessert";
    }
    verifyTheOrder(realtimeselector); //verifica a cada click de seleção se pode fechar o pedido
  }
     

  function SetTheAmount(element, amount){
    const id = element.id;
    const e = (element.id)%3; //o "e" vai assumir os valores 0, 1, 2 de forma ciclica
    
    if(id < 3){      
      const newArray = [...dishesAmount];
      newArray[e]=amount;      //amount é igual ao count mostrado indicando a quantidade de cada item
      setDishesAmount(newArray);   
            
    }else if(id < 6){
      const newArray = [...drinksAmount];
      newArray[e]=amount;      
      setDrinksAmount(newArray); 

    }else{
      const newArray = [...dessertsAmount];
      newArray[e]=amount;      
      setDessertsAmount(newArray); 
    }
  }

  function verifyTheOrder(realtimeselector){     

    if((dishesSelected.includes(true) && drinksSelected.includes(true) && realtimeselector==="dessert") ||
       (dishesSelected.includes(true) && dessertsSelected.includes(true) && realtimeselector==="drink") ||
       (drinksSelected.includes(true) && dessertsSelected.includes(true) && realtimeselector==="dish")) 
    {
      changeOrderButton();
    }
  }

  function changeOrderButton(){   
    
    setOrderButton("Tudo certo, fazer pedido!"); 
    setStyleOfOrderButton("fazer-pedido ativo");
  }   
    
  function setToOverlay(overlayed){

    if(overlayed === "overlay"){  //pergunta o nome somente se for fechar o pedido
    setName(prompt("Informe seu nome: "));
    setAdress(prompt("Informe seu endereço: "));
    }
    setOverlay(overlayed);
  }
    
  return (
    <div>
      <Header />
      <Menu dishes={dishesData} drinks={drinksData} desserts={dessertsData} SetTheChoice={SetTheChoice} SetTheAmount={SetTheAmount} verifyTheOrder={verifyTheOrder}/> 
      <Overlay setToOverlay={setToOverlay} overlay={overlay} dishesData={dishesData} drinksData={drinksData} dessertsData={dessertsData} name={name} adress={adress}/>  
      <Footer orderButton={orderButton} styleOfOrderButton={styleOfOrderButton} setToOverlay={setToOverlay} />     
    </div>
  );
}