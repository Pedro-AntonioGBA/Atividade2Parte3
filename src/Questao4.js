const dadosSensiveis = {
 usuarios: [
 {
 cpf: "123.456.789-00",
 cartaoCredito: "5555-6666-7777-8888",
 telefone: "(11) 99999-9999",
 nome: "Fulano de Tal"
 }
 ],
 metadata: {
 ip: "192.168.1.100",
 token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9"
 }
};
function sanitizarDados(dados) {
 // Mascare: CPF (***.***.***-00), cartão (****-****-****-8888), telefone ((11) *****-9999), token (primeiros 10 chars + ...)
    for (i of dados.usuarios){
        i.cpf = `***.***.***-${i.cpf.slice(-2)}`
        i.cartaoCredito = `****-****-****-${i.cartaoCredito.slice(-4)}`
        i.telefone = `${i.telefone.slice(0,4)} ****-${i.telefone.slice(-4)}`
    }
    dados.metadata.token = `${dados.metadata.token.slice(0,10)}...`
    return dados
}

console.log(sanitizarDados(dadosSensiveis));
