const texto = "JavaScript é uma linguagem de programação. JavaScript é versátil e JavaScript é poderoso.";
function analisarTexto(texto) {
  let objeto = {};
  // totalPalavras: X,
  let palavras = texto.replaceAll(".","").split(" ");
  objeto.totalPalavras = palavras.length;
  // frequenciaPalavras: [{palavra: "JavaScript", frequencia: 3}]
  let frequenciaPalavras = {};
  let frequenciaFinal = [];
  for (let palavra of palavras){
    if (frequenciaPalavras[palavra]){
      frequenciaPalavras[palavra] +=1;
    }else{
      frequenciaPalavras[palavra] = 1;
    }
  }
  let mediaPalavras = 0;
  for (let palavra in frequenciaPalavras){
    frequenciaFinal.push({palavra: palavra, frequencia: frequenciaPalavras[palavra]});
    // tamanhoMedioPalavras: X.X
    mediaPalavras += palavra.length;
  }  
  objeto.frequenciaPalavras = frequenciaFinal;
  mediaPalavras = mediaPalavras/objeto.totalPalavras;
  objeto.tamanhoMedioPalavras = parseInt(mediaPalavras);
  return objeto;
}

console.log(analisarTexto(texto))
