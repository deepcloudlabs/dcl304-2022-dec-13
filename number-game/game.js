class GameViewModel {
    constructor() {
        this.secret = this.createSecret();
        this.guess = 123;
        this.moves = [];
        this.numberOfMoves = 0;
        this.counter = 60;
        setInterval(this.countDown, 1_000);
    }

    countDown = () => {
        this.counter--;
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
          }
        }
    }
}