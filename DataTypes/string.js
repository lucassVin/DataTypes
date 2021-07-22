/*
    String --> Cadeia de caracteres

    "" --> Aspas Duplas
    '' --> Aspas Simples
    `` --> Template literal ou template strings

*/

//-----------------------//

console.log("Bom'dia!")
/* Se por acaso a String presente no console.log tiver Aspas Simples
dentro dela, a mesma será fechada por Aspas Duplas (Isso Respectivamente) */

//-----------------------//

console.log(`Bom dia`)
/* Se por acas a String presente no console.log for fechado por Aspas Estranhas
ela podera ser MultiLinhas, armazenar os outros tipos de Aspas e fazer a
Interpolação(A colocação de expressões)*/

//---- Exemplos ---- //
console.log(`

Bom dia

`) //MultiLinhas//

console.log(`Bo"m'dia!'`) //Armazena as Aspas Duplas e Simples//

console.log(`Bom dia: ${1+1}`) /* As expressões são estrturadas
atraves do Cifrão($) e a abertura de Chaves({}), assim podendo realizar
cauculos*/