class Cinema {
    constructor(cinemaName, currency) {
        this.cinema = cinemaName;
        this.curr = currency;
        this.movieList = [];
    }

    intro() {
        console.log(`Welcome to "${this.cinema}" cinema theater!`);
    }

    addMovie(movieName, moviePrice, ticketPrice) {
        this.movieList.push({
            title: movieName,
            cost: moviePrice,
            price: ticketPrice,
            soldTickets: 0,
            available: true,
            profit: 0
        });
        console.log(`You can watch "${movieName}" movie for ${ticketPrice} ${this.curr}, now!`);
    }

    sellTickets(movieIndex, ticketsCount) {
        for (let i = 0; i < this.movieList.length; i++) {
            const movie = this.movieList[i];

            if (i === movieIndex &&
                !movie.available) {
                console.log(`Sorry, you can no longer buy tickets to movie "${movie.title}".`);
                break;
            } else if (i === movieIndex) {
                movie.soldTickets += ticketsCount;
                movie.profit += ticketsCount * movie.price;
                break;
            }
        }
    }

    profit() {
        let info = [];
        for (let i = 0; i < this.movieList.length; i++) {
            const movie = this.movieList[i];
            //console.log(this.movieList[i]);
            //info.push(`${i + 1}. "${movie.title}":\n    paid: ${movie.cost} ${this.curr};\n    profit: ${movie.profit} ${this.curr};\n    net profit: ${movie.profit - movie.cost} ${this.curr};`)
            if (i > 0) {
                info.push(`---------------\n${i + 1}. "${movie.title}":\n    paid: ${movie.cost} ${this.curr};\n    profit: ${movie.profit} ${this.curr};\n    net profit: ${movie.profit - movie.cost} ${this.curr};`)
            } else {
                info.push(`${i + 1}. "${movie.title}":\n    paid: ${movie.cost} ${this.curr};\n    profit: ${movie.profit} ${this.curr};\n    net profit: ${movie.profit - movie.cost} ${this.curr};`)
            }
        }
        console.log(`===============`);
        console.log(`"${this.cinema}" profit:`);
        console.log(`===============`);
        console.log(info.join('\n'));
        console.log(`===============`);
    }

    updateMoviePrice(movieIndex, newPrice) {
        for (let i = 0; i < this.movieList.length; i++) {
            const movie = this.movieList[i];
            if (i === movieIndex) {
                movie.price = newPrice;
                console.log(`You can watch "${movie.title} movie for ${newPrice} ${this.curr}, now!`);
            }
        }
    }

    removeMovie(movieIndex) {
        for (let i = 0; i < this.movieList.length; i++) {
            const movie = this.movieList[i];
            if (i === movieIndex) {
                movie.available = false;
                console.log(`No more "${this.movieList[movieIndex].title}" :(`);
            }
        }
    }
}

module.exports = Cinema;