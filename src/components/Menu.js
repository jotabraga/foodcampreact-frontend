
import Food from "./Food";

export default function Menu(){

    const dishesOptions = [
        {title: "Frango Yin Yang",image: "img/frango_yin_yang.png", description: "Um pouco de batata, um pouco de salada",price: "14,90"},
        {title: "Bife à cavalo",image: "img/bifeacavalo.jpg", description: "Bife mignon com ovo frito",price: "17,90"},
        {title: "Vegetariano",image: "img/vegetariano.jpg", description: "Salada de alface tomate e cenoura" ,price: "16,90"}
    ]

    const drinksOptions = [
        {title: "Coquinha gelada",image: "img/coquinha_gelada.png", description: "Coquinha trincando c/ limão",price: "14,90"},
        {title: "Chopp gelado",image: "img/chopp.jpg", description: "Chopp gelado Heineken",price: "14,90"},
        {title: "Suco natural",image: "img/suco.jpg", description: "Suco natural feito na hora",price: "14,90"}
    ]

    const dessertsOptions = [
        {title: "Pudim",image: "img/pudim.png", description: "Pudim caseiro de leite moça",price: "14,90"},
        {title: "Sorvete",image: "img/sorvete.jpg", description: "Sorvete gelato com duas bolas",price: "14,90"},
        {title: "Torta",image: "img/torta.jpg", description: "Torta de limão ou morango",price: "14,90"},
    ]  

     const dishesData = dishesOptions.map(item => ({...item, selected:false, amount:0})); //adicionando selected e amount de forma mais simples
     const drinksData = dishesOptions.map(item => ({...item, selected:false, amount:0})); //ao inves de add direto em todas as arrays
     const dessertsData = dishesOptions.map(item => ({...item, selected:false, amount:0}));
    
  

    return (
        <div class="menu">

          <div class="secao">
            <div class="titulo">Primeiro, seu prato</div>
            <div class="opcoes pratos">              

            {dishesData.map(item => <Food item={item}/>)}              

            </div>
          </div>



          <div class="secao">
            <div class="titulo">Agora, sua bebida</div>
            <div class="opcoes bebidas">

            {drinksData.map(item => <Food item={item}/>)}

            </div>
          </div>
          


          <div class="secao">
            <div class="titulo">Por fim, sua sobremesa</div>
            <div class="opcoes sobremesas">

            {dessertsData.map(item => <Food item={item}/>)}

            </div>
          </div>
          
      </div>
    );
}