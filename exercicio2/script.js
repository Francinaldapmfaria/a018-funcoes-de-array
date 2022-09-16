// # Exercício 2
// Crie um array de números que contenha 8 números.

const numeros = [2, 8, 10, 15, 21, 30,3, 9]

// Depois disso, utilize este array para criar duas funcões de array `map()`:


// 1. A primeira deve retornar um novo array contendo os números múltiplicados por 3, 
// Crie uma `const triplos`, e guarde o valor do array nesta const;
const triplos = numeros.map((item, index, array) =>{
    return item*3
})
console.log(triplos)

// 2. A segunda deve retornar um novo array contendo os números divididos por 2. 
// Crie uma `const metades`, e guarde o valor do array nesta const;

const metades = numeros.map(item => item/2)
console.log(metades)