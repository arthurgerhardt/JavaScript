// If (Se) Else (Senão) Else If (Senão Se)

let hour = new Date().getHours() // Pega a hora atual do sistema
let minutes = new Date().getMinutes() // Pega os minutos atuais do sistema
console.log(hour + ":" + minutes) // Exibe a hora atual no console

if (hour <= 12) {
    console.log("Bom dia")
    console.log(`São ${hour}:${minutes} `)
}
else if (hour > 12 && hour <= 18) {
    console.log("Boa tarde")
    console.log(`São ${hour}:${minutes} `)
    }
else  {
    console.log("Boa noite")
    console.log(`São ${hour}:${minutes}`)
}
// Switch Case
let option = 1
switch (option) {
    case 1:
        console.log("Consultar pedido.")
        break
    case 2:
        console.log("Falar com atendente.")
        break
    case 3:
        console.log("Sair")
        break
    default:
        console.log("Opção inválida")
}