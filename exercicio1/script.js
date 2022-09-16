const objeto = {
    nome: "astrodev",
    profissao: "Dev das estrelas",
    username: "astrodev_labenu",
    senha: "melhorDeTodos"
}


// Crie duas funcões que recebem como parâmetro um objeto.



// 1. A primeira deve retornar o objeto, alterando as propriedades dele para que fiquem em CAIXA ALTA.

const funcao1 = (maiuscula) => {
    return {
    Nome: maiuscula.nome.toUpperCase(),
    Profissao: maiuscula.profissao.toUpperCase(),
    Usarname: maiuscula.username.toUpperCase(),
    Senha: maiuscula.senha.toUpperCase(),
    }

}
console.log(funcao1(objeto));




// 2. A segunda deve retornar os valores do objeto como texto corrido.

const textoCorrido = (corr) => {
    let corrido =(`${corr.nome}, ${corr.profissao}, ${corr.usarname}, ${corr.senha}`)
    return corrido
}
console.log(textoCorrido(objeto))

// 3. Em seguida, crie uma funcão que recebe um objeto e um callback como parâmetros. 
//A funcão deve passar o objeto como argumento da funcão de callback, e em seguida 
//imprimir o valor retornado.

// Chame a funcão 3, passando como argumentos o objeto passado no arquivo `script.js`, e a funcão 1.
// Repita o processo para a funcão 2

const funcao3 = (objeto, callback) => {
    console.log (callback(objeto))
}
funcao3(objeto,funcao1) //chamar primeira variavel
funcao3(objeto, textoCorrido) //chamar segunda variável