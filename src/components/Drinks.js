export default function Drinks(){
    return(
        <div class="opcoes bebidas">
          <div class="opcao bebida-coca" onclick="selecionarBebida('.bebida-coca', 'Coquinha gelada', 6.90)">
            <img src="img/coquinha_gelada.png" />
            <div class="titulo">Coquinha gelada</div>
            <div class="descricao">Lata 350ml</div>
            <div class="preco">R$ 6,90</div>
            <div class="check">
              <ion-icon name="checkmark-circle"></ion-icon>
            </div>
          </div>

          <div class="opcao bebida-guarana" onclick="selecionarBebida('.bebida-guarana', 'Guaraná gelado', 4.90)">
            <img src="img/coquinha_gelada.png" />
            <div class="titulo">Guaraná gelado</div>
            <div class="descricao">Lata 350ml</div>
            <div class="preco">R$ 4,90</div>
            <div class="check">
              <ion-icon name="checkmark-circle"></ion-icon>
            </div>
          </div>

          <div class="opcao bebida-suco" onclick="selecionarBebida('.bebida-suco', 'Suquinho gelado', 7.90)">
            <img src="img/coquinha_gelada.png" />
            <div class="titulo">Suquinho gelado</div>
            <div class="descricao">500ml</div>
            <div class="preco">R$ 7,90</div>
            <div class="check">
              <ion-icon name="checkmark-circle"></ion-icon>
            </div>
          </div>
        </div>
    );
}