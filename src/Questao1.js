function formatacao(objeto){
  let lista = []
  produtos = JSON.parse(produtosJSON);
  for (i of produtos.itens){
    lista.push(`${i.nome.toUpperCase()} - R$ ${i.preco} (Categoria: ${i.categoria})`);
  }
  return lista
}

const produtosJSON = `{
 "itens": [
 {
 "id": 1,
 "nome": "Notebook Gamer",
 "preco": 2999.99,
 "categoria": "eletronicos",
 "tags": ["tecnologia", "computacao", "gamer"]
 },
 {
 "id": 2, 
 "nome": "Mesa Escritório",
 "preco": 450.50,
 "categoria": "moveis",
 "tags": ["escritorio", "madeira", "profissional"]
 }
 ]
}`;

console.log(formatacao(produtosJSON));
