const removeButton = document.getElementById("remove-game")

const removeGame = () => {
	alert('Removing one game');
	removeButton.removeEventListener("click", removeGame)
	removeButton.innerText="Game removed"
  } 

  removeButton.addEventListener("click", removeGame)

  // we can also remove event listeners
  