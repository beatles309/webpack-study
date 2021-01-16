
function outer () {
  const id = 5
  function inner () {
    return id
  }
  return inner
}
export const test = outer()

function movie (movieName) {
  return {
    get_movie: function () {
      return movieName
    },
    set_movie: function (newName) {
      movieName = newName
    }
  }
}

export const horror = movie('컨저링')
export const action = movie('어벤져스')
export const ero = movie('애마부인')
