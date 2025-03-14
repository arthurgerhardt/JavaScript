// Tipos de dados

// Template literals (Template strings, interpolação de strings)
let username = "Arthur"
let email = "arthur@email.com"

// Concatenar strings
let message = "Olá, " + username + ", seu e-mail é " + email
console.log(message)

// Template literals
console.log(`Olá, ${username}. Você conectou seu e-mail  ${email}.`)
console.log("Login efetuado com sucesso.")
// ----------------------------------------------------------------------------------------

// Number

// Inteiro positivo.
console.log(typeof 5)

console.log(5)

// Inteiro negativo.
console.log(-5)

// Números reais ou float
console.log(127.50)

// Not a Number NaN
console.log(12.5 / "Arthur")

// ----------------------------------------------------------------------------------------
// Boolean

let isLoading = true
console.log(true)
console.log(false)
console.log(isLoading)

// ----------------------------------------------------------------------------------------
// Undefined e Null
let empytiness
console.log("O valor é: ", empytiness)

let empty = null
console.log("O valor é: ", empty)

// ----------------------------------------------------------------------------------------
// Conversão de tipos e coersão de tipos

let value = "9"
console.log("9")
console.log(typeof "9")
console.log(Number("9"))
console.log(typeof Number("9"))

let age = 18
console.log(typeof age)
console.log(String(age))
console.log(typeof String(age))

let option = 1
console.log(option)
console.log(typeof option)
console.log(Boolean(option))
console.log(typeof Boolean(option))