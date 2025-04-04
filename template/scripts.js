const newGuest = document.createElement("li")
const guestName = document.createElement("span")

guestName.textContent = "Diego"

const newName = document.createElement("span")
newName.textContent = "Fernandes"

// Adiciona após o último filho
newGuest.appendChild(guestName)
newGuest.appendChild(newName)

console.log(newGuest)