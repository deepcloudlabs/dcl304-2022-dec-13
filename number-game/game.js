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

    countDown = () => {
        this.counter--;
        this.updateView({counter: this.counter});
        if (this.counter <= 0){
            //TODO: Player loses
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
            //TODO: Player wins!
        } else {
          if (this.numberOfMoves >= 7){
            //TODO: Player loses!
          } else {
            this.moves.push(new Move(this.guess,this.createMessage()));
            this.updateView({numberOfMoves: this.numberOfMoves, moves: this.moves});
          }
        }
    }
}