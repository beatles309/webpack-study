
function outer () {
    const id = 5
    function inner () {
        return id
    }
    return inner
}
export const test = outer()



function movie (movie_name) {
    return {
        get_movie: function () {
            return movie_name
        },
        set_movie: function (_new_name) {
            movie_name = _new_name
        }
    }
}

export const horror = movie('컨저링')
export const action = movie('어벤져스')
export const ero = movie('애마부인')

