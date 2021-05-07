import Header from "./components/Header";
import Menu from "./components/Menu";
import Overlay from "./components/Overlay";
import Footer from "./components/Footer";
import React,{useState} from "react";

export default function App() {

  const dishesOptions = [
    {id: 0,title: "Frango Yin Yang",image: "img/frango_yin_yang.png", description: "Um pouco de batata, um pouco de salada",price: "14,90"},
    {id: 1,title: "Bife à cavalo",image: "img/bifeacavalo.jpg", description: "Bife mignon com ovo frito",price: "17,90"},
    {id: 2,title: "Vegetariano",image: "img/vegetariano.jpg", description: "Salada de alface tomate e cenoura" ,price: "16,90"}
]

  const drinksOptions = [
      {id: 3,title: "Coquinha gelada",image: "img/coquinha_gelada.png", description: "Coquinha trincando c/ limão",price: "14,90"},
      {id: 4,title: "Chopp gelado",image: "img/chopp.jpg", description: "Chopp gelado Heineken",price: "14,90"},
      {id: 5,title: "Suco natural",image: "img/suco.jpg", description: "Suco natural feito na hora",price: "14,90"}
  ]

  const dessertsOptions = [
      {id: 6,title: "Pudim",image: "img/pudim.png", description: "Pudim caseiro de leite moça",price: "14,90"},
      {id: 7,title: "Sorvete",image: "img/sorvete.jpg", description: "Sorvete gelato com duas bolas",price: "14,90"},
      {id: 8,title: "Torta",image: "img/torta.jpg", description: "Torta de limão ou morango",price: "14,90"},
  ]  

  const [dishesSelected, setDishesSelected] = useState([false,false,false]);
  const [drinksSelected, setDrinksSelected] = useState([false,false,false]);
  const [dessertsSelected, setDessertsSelected] = useState([false,false,false]);

  const [dishesAmount, setDishesAmount] = useState([0,0,0]);
  const [drinksAmount, setDrinksAmount] = useState([0,0,0]);
  const [dessertsAmount, setDessertsAmount] = useState([0,0,0]);

  const dishesData = dishesOptions.map((item, index) => ({...item, selected:dishesSelected[index], amount:dishesAmount[index]})); //adicionando selected e amount de forma mais simples
  const drinksData = dishesOptions.map((item, index) => ({...item, selected:drinksSelected[index], amount:drinksAmount[index]})); //ao inves de add direto em todas as arrays
  const dessertsData = dishesOptions.map((item, index) => ({...item, selected:dishesSelected[index], amount:dessertsAmount[index]}));

  function SetTheChoice(element, parameter){
    const e = (element.id)%3; //o "e" vai assumir os valores 0, 1, 2 de forma ciclica
    
    if(e < 3){      
      const newArray = [...dishesSelected];
      newArray[e]=parameter;  //o parametro pode ser falso ou verdadeiro para selecionar ou retirar a seleção    
      setDishesSelected(newArray);   
            
    }else if(e < 6){
      const newArray = [...drinksSelected];
      newArray[e]=parameter;      
      setDrinksSelected(newArray);   

    }else{
      const newArray = [...dessertsSelected];
      newArray[e]=parameter;      
      setDessertsSelected(newArray); 
    }
  }

  function SetTheAmount(element, amount){
    const e = (element.id)%3; //o "e" vai assumir os valores 0, 1, 2 de forma ciclica
    
    if(e < 3){      
      const newArray = [...dishesAmount];
      newArray[e]=amount;      //amount é igual ao count mostrado indicando a quantidade de cada item
      setDishesAmount(newArray);   
            
    }else if(e < 6){
      const newArray = [...drinksAmount];
      newArray[e]=amount;      
      setDrinksAmount(newArray); 

    }else{
      const newArray = [...dessertsAmount];
      newArray[e]=amount;      
      setDessertsAmount(newArray); 
    }
  }

  function verifyTheOrder(){
    const isDishChoosed = dishesData.filter(item => {
      return item.includes(true);
    });
    const isDrinkChoosed = drinksData.filter(item => {
      return item.includes(true);
    });
    const isDessertChoosed = dessertsData.filter(item => {
      return item.includes(true);
    });
    if(isDishChoosed && isDrinkChoosed && isDessertChoosed){
      return true;
    }
  }

  return (
    <div>
      <Header />
      <Menu dishes={dishesData} drinks={drinksData} desserts={dessertsData} SetTheChoice={SetTheChoice} SetTheAmount={SetTheAmount} verifyTheOrder={verifyTheOrder}/> 
      <Overlay />  
      <Footer dishes={dishesData} drinks={drinksData} desserts={dessertsData} verifyTheOrder={verifyTheOrder} />     
    </div>
  );
}