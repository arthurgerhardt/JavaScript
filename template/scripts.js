const guests = document.querySelector("ul")

const newGuest = document.createElement("li")
newGuest.classList.add("guest")

const guestName = document.createElement("span")

guestName.textContent = "Diego"

const guestSurname = document.createElement("span")
guestSurnameName.textContent = "Fernandes"

// // Adiciona após o último filho
// newGuest.append(guestName, guestSurname)

// // Adiciona antes do primeiro filho
// newGuest.prepend(guestSurnameName)

// É mais simples o append e aceita apenas um argumento
newGuest.appendChild(guestName)

guests.append(newGuest)

