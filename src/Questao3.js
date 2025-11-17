const usuariosJSON = `[
 {"nome": " carlos silva ", "email": "CARLOS@EMAIL.COM", "idade": "25"}
,
 {"nome": "MARIA", "email": "maria@email.com", "idade": "30"},
 {"nome": "João Santos", "email": "joao@email.com", "idade": "17"}
]`;
function normalizarUsuarios(json) {
    let objeto = JSON.parse(json);
    for (let dados of objeto){
        // - Email em minúsculo
        let formatacaoEmail = dados.email.toLowerCase();
        if (formatacaoEmail.slice(-10) != "@email.com"){
            console.log("Email inválido!");
        }else{
            dados.email = dados.email.toLowerCase();
        }
        // - Converter idade para number e verificar se é maior de 18 (adicione mais um campo no json).
        let conversao = parseInt(dados.idade);
        console.log(conversao)
        if (conversao >= 18){
            dados.deMaior = "Sim"
        }else{
            dados.deMaior = "Não"
        }
        // - Trim nos nomes e capitalize
        let formatacao = dados.nome.trim();
        formatacao = formatacao.toLowerCase().split(" ");
        let novoNome = [];
        for (let palavra of formatacao){
            nomeFormatado = (palavra[0].toUpperCase() + palavra.slice(1,palavra.length))
            novoNome.push(nomeFormatado);
        }
        dados.nome = novoNome.join(" ");
    }
 // - Retornar os dados normalizados.
    return objeto
}

console.log(normalizarUsuarios(usuariosJSON))
