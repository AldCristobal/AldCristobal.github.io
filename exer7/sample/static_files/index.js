const title = document.getElementById("title")
console.log(title)

console.log(title.innerText)
title.innerText = 'Capcom Games'

const games = document.getElementsByClassName("game")
console.log(games)
for(let i =0;i<games.length;i++){
	console.log(games[i].getAttribute("id"));
	games[i].innerHTML = "<h3>" + games[i].innerText +"</h3>";
	games[i].style = "color: blue";
}
games[1].removeAttribute("style");

const gamesList = document.getElementById("games-list")
gamesList.removeChild(games[2])

const mhw = document.getElementById("mh")
mhw.parentNode.removeChild(mhw)

gamesList.appendChild(mhw)

const newElement = document.createElement("h1")
newElement.innerText = "Hello!"
document.getElementsByTagName('body')[0].appendChild(newElement)

const gamesByTag = document.getElementsByTagName("li")
console.log(gamesByTag)