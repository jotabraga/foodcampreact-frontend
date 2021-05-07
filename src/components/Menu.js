import Food from "./Food";

export default function Menu(props){  

    return (
        <div class="menu">

          <div class="secao">
            <div class="titulo">Primeiro, seu prato</div>
            <div class="opcoes pratos">              

            {props.dishes.map(item => <Food item={item} SetTheChoice={props.SetTheChoice} SetTheAmount={props.SetTheAmount}/>)}              

            </div>
          </div>



          <div class="secao">
            <div class="titulo">Agora, sua bebida</div>
            <div class="opcoes bebidas">

            {props.drinks.map(item => <Food item={item} SetTheChoice={props.SetTheChoice} SetTheAmount={props.SetTheAmount}/>)}

            </div>
          </div>
          


          <div class="secao">
            <div class="titulo">Por fim, sua sobremesa</div>
            <div class="opcoes sobremesas">

            {props.desserts.map(item => <Food item={item} SetTheChoice={props.SetTheChoice} SetTheAmount={props.SetTheAmount}/>)}

            </div>
          </div>
          
      </div>
    );
}