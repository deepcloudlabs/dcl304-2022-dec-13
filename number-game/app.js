let run = () => {
    const playButton = document.querySelector("#play");
    const guessInputText = document.querySelector("#guess");
    const numberOfMoves = document.querySelector("#numberOfMoves");
    const counter = document.querySelector("#counter");
    const movesBody = document.querySelector("#moves");
    const updateView = (model) => {
        for (let key in model){
            switch (key){
                case "counter":
                    counter.innerText = model.counter;
                    break;
                case "numberOfMoves":
                    numberOfMoves.innerText = model.numberOfMoves;
                    break;
                case "moves":
                    emptyElement(movesBody);
                    model.moves.forEach((move, index) => {
                        let tr = movesBody.insertRow();
                        let tdIndex = tr.insertCell(0);
                        let tdGuess = tr.insertCell(1);
                        let tdMessage = tr.insertCell(2);
                        tdIndex.appendChild(document.createTextNode(index + 1));
                        tdGuess.appendChild(document.createTextNode(move.guess));
                        tdMessage.appendChild(document.createTextNode(move.message));
                    });
                break;
            }
        }
    };
    const gameViewModel = new GameViewModel(updateView);
    playButton.addEventListener("click", (event) => {
        gameViewModel.play();
    });
    guessInputText.addEventListener("change", (event) => {
        gameViewModel.guess = parseInt(event.target.value);
    });
}

window.onload = run
