"use strict";

const numberOfFilms = +prompt('Сколько фильмов Вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

const lastFilm1 = prompt('Назовите один из последних просмотренных фильмов.', ''),
      lastFilmCost1 = prompt('На сколько оцените его?', ''),
      lastFilm2 = prompt('Назовите один из последних просмотренных фильмов.', ''),
      lastFilmCost2 = prompt('На сколько оцените его?', '');

personalMovieDB.movies [lastFilm1] = lastFilmCost1;
personalMovieDB.movies [lastFilm2] = lastFilmCost2;

console.log(personalMovieDB);