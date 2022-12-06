// 1
const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
console.log(numberOfFilms);

// 2
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

//3
const a = prompt('Один из последних просмотренных фильмов?', ''),
    b = prompt('На сколько оцените его?', ''),
    c = prompt('Один из последних просмотренных фильмов?', ''),
    d = prompt('На сколько оцените его?', '');

// personalMovieDB.movies.a = b; // синтаксис нужно передавать через квадратные скобки(чтобы значения выводило корректно)
// personalMovieDB.movies.c = d;
personalMovieDB.movies[a] = b; 
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);