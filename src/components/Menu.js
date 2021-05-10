import Food from "./Food";

export default function Menu(props){  

  const {drinks, dishes, desserts} = props;

  return (
      <div className="menu">

        <div className="secao">
          <div className="titulo">Primeiro, seu prato</div>
          <div className="opcoes pratos">              

          {dishes.map(item => <Food item={item} SetTheChoice={props.SetTheChoice} SetTheAmount={props.SetTheAmount} verifyTheOrder={props.verifyTheOrder}/>)}              

          </div>
        </div>

        <div className="secao">
          <div className="titulo">Agora, sua bebida</div>
          <div className="opcoes bebidas">

          {drinks.map(item => <Food item={item} SetTheChoice={props.SetTheChoice} SetTheAmount={props.SetTheAmount} verifyTheOrder={props.verifyTheOrder}/>)}

          </div>
        </div>

        <div className="secao">
          <div className="titulo">Por fim, sua sobremesa</div>
          <div className="opcoes sobremesas">

          {desserts.map(item => <Food item={item} SetTheChoice={props.SetTheChoice} SetTheAmount={props.SetTheAmount} verifyTheOrder={props.verifyTheOrder} />)}

          </div>
        </div>
        
      </div>
  );
}