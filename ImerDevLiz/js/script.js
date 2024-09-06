function buscar() {
    // Função responsável por buscar e exibir os resultados da pesquisa.
    // Itera sobre um array de objetos (gatinho) e cria elementos HTML para cada item.
  
    let section = document.getElementById("resultados-pesquisa");
    // Obtém a seção onde os resultados serão exibidos.

    function limparCampoBusca() {
      document.getElementById("campo-busca").value = "";
    }

    let campoBuscar = document.getElementById("campo-busca").value;
    console.log (campoBuscar);

    if (!campoBuscar){
      section.innerHTML = `<div class = "campo-limpo" ><p>Favor digite no campo acima o que procura!</p></div>`
      return
    }

    campoBuscar = campoBuscar.toLowerCase()

    let result = "";
    let titulo = "";
    let caracteristica = "";
    let curiosidade = "";
    let tags = "";
    // String que armazenará o HTML gerado.

    for (let gato of gatinho) {

      titulo = gato.titulo.toLowerCase()
      caracteristica = gato.caracteristica.toLowerCase()
      curiosidade = gato.curiosidade.toLowerCase()
      tags = gato.tags.toLowerCase()

      if(gato.titulo.includes(campoBuscar) || gato.caracteristica.includes(campoBuscar) || gato.curiosidade.includes(campoBuscar) || gato.tags.includes(campoBuscar)){
        result += `
        <div class="item-resultado">
          <h2>
            <a href="#" target="_blank">${gato.titulo}</a>
          </h2>
          <p class="descricao-meta">${gato.caracteristica}</p>
          <p class="descricao-meta"> ${gato.curiosidade}</p>
          <a href= ${gato.link} target="_blank">Saiba mais!</a>
        </div> `;

        limparCampoBusca();
      }
     
    }

    if(!result){
      result = `<div class = "nadaAmostrar"><p>Nada foi encontrado!</p></div>`
    }
  
    section.innerHTML = result;
    // Insere o HTML gerado na seção.
  }