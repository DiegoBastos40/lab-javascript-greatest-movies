// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?


const movies = require('./data.js');

function getAllDirectors(movies) {
  const directorsArray = movies.map((film) => {
    return film.director;
  });
  return directorsArray;
  
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  const dramaSS = movies.filter((dram) => {
    
      return dram.genre.includes('Drama') && dram.director === 'Steven Spielberg';
    
    });
  return dramaSS.length;
};

 
// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  
  
  let scoreAvg = movies.reduce((acc,value)=>{
    return acc + value.score},0);
    if(scoreAvg === 0){
      return scoreAvg;
    }
    
    return Number((scoreAvg/movies.length).toFixed(2));

  
};
console.log(scoresAverage(movies));

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
  let scoreMovieDrama = movies.reduce((acc,value)=>{
    return acc + value.genre.includes('Drama') && acc+ value.score},0);

    return Number((scoreMovieDrama/movies.length).toFixed(2));
};
/* A PONTUAÇÃO DE ALGUM DEVE ESTAR ERRADA , PORQUE ERA SUPOSTO O RESULTADO DAR 7,5 E DEU 8*/ 

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movie) {
  const newArray = [...movie];
  newArray.sort((a, b) => {
    
    return a.year - b.year;
  });
  return newArray;

}

console.log(orderByYear(movies))

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movie) {
  const orderAlpha = [...movie];
  orderAlpha.sort((a, b) => {
    
    return a.title.slice(0,19) - b.title.slice(0,19);
  });
  return newArray;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}


