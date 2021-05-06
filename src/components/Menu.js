import Dishes from "./Dishes";

export default function Menu(){

    const dishesOptions = [
        {titulo: "Frango Yin Yang",image: "img/frango_yin_yang.png", description: "Um pouco de batata, um pouco de salada",price: "14,90"},
        {titulo: "Bife à cavalo",image: "img/bifeacavalo.jpg", description: "Bife mignon com ovo frito",price: "17,90"},
        {titulo: "Vegetariano",image: "img/vegetariano.jpg", description: "Salada de alface tomate e cenoura" ,price: "16,90"}
    ]

    const drinksOptions = [
        {titulo: "Coquinha gelada",image: "img/coquinha_gelada.png", description: "Coquinha trincando c/ limão",price: "14,90"},
        {titulo: "Chopp gelado",image: "img/chopp.jpg", description: "Chopp gelado Heineken",price: "14,90"},
        {titulo: "Suco natural",image: "img/suco.jpg", description: "Suco natural feito na hora",price: "14,90"}
    ]

    const dessertsOptions = [
        {titulo: "Pudim",image: "img/pudim.png", description: "Pudim caseiro de leite moça",price: "14,90"},
        {titulo: "Sorvete",image: "img/sorvete.jpg", description: "Sorvete gelato com duas bolas",price: "14,90"},
        {titulo: "Torta",image: "img/torta.jpg", description: "Torta de limão ou morango",price: "14,90"},
    ]

    return (
        <div class="menu">
      <div class="secao">
        <div class="titulo">Primeiro, seu prato</div>

        {dishesOptions.map(item => <Dishes title={item.titulo} image={item.image} description={item.description} price={item.price}/>)}
        
      </div>

      <div class="secao">
        <div class="titulo">Agora, sua bebida</div>
        
      </div>

      <div class="secao">
        <div class="titulo">Por fim, sua sobremesa</div>
        
      </div>
    </div>
    );
}