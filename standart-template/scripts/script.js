let previousMovie;
let rating;
let numberOfFilms;

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	private: false,
};

for (let i = 0; i < 1; i++) {
	numberOfFilms = +prompt("Сколько фильмов вы посмотрели?");
	if (numberOfFilms == "") {
		i--;
	}
}

for (let i = 0; i < numberOfFilms; i++) {
	previousMovie = prompt('Один из последних фильмов?');
	rating = prompt('На сколько оцените его?');
	if (previousMovie == "" || rating == "") {
		i--;
	}
}

personalMovieDB.movies[previousMovie] = rating;
print(personalMovieDB);
