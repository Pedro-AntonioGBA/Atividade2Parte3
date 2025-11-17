const queryString = "categoria=eletronicos&preco=500&marca=samsung&avaliacao=4.5";
function parseQueryString(query) {
  let separacaoQuery = query.split("&")
  let json = {}
  for (let i of separacaoQuery){
    let chaves = i.split("=")
    json[chaves[0]] = chaves[1]
    }
  return json
  }
 // Retorne: {
 // categoria: "eletronicos",
 // preco: 500.00,
 // marca: "samsung"],
 // avaliacao: 4.5
 // }


console.log(parseQueryString(queryString))
