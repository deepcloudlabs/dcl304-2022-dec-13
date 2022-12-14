class GameViewModel {
    constructor(updateView) {
        this.secret = this.createSecret();
        this.guess = 50;
        this.moves = [];
        this.numberOfMoves = 0;
        this.counter = 60;
        this.updateView = updateView;
        setInterval(this.countDown, 1_000);
    }
    initGame = (wins=false) => {
        let message = "You have lost the game!";
        if (wins)
            message = "You have won the game!";
        let move = new Move(this.secret, message);
        this.guess = 50;
        this.secret= this.createSecret();
        this.numberOfMoves = 0;
        this.counter = 60;
        this.moves = [];
        this.moves.push(move);
        this.updateView({
            counter: this.counter, moves: this.moves, numberOfMoves: this.numberOfMoves})
    }
    countDown = () => {
        this.counter--;
        this.updateView({counter: this.counter});
        if (this.counter <= 0){
            this.initGame(false);
        }
    }
    createSecret = () => {
        return Math.floor(100 * Math.random()) + 1;
    }
    createMessage = () => {
        return this.guess < this.secret ?
               "Pick larger number." : "Pick smaller number.";
    }

    play = () => {
        this.numberOfMoves++;
        if (this.guess === this.secret){
            this.initGame(true);
        } else {
          if (this.numberOfMoves >= 7){
            this.initGame(false);
          } else {
            this.moves.push(new Move(this.guess,this.createMessage()));
            this.updateView({numberOfMoves: this.numberOfMoves, moves: this.moves});
          }
        }
    }
}