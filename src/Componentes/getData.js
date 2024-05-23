export const getMovies = async(movie) =>{
    let res = await fetch(`https://search.imdbot.workers.dev/?q={movie}`)
    let data = await res.json()
    console.log(data.description)
    let movies = data.description
    movies.sort((a,b)=>{
        const movieA = a["#YEAR"];
        const movieB = b["#YEAR"];
        return movieB - movieA;
    })
    movies.forEach(val =>{
        console.log(val["#YEAR"])
    }) 
    return data;
}

export const getMoviesYearSort = async(movie) =>{
    let res = await fetch(`https://search.imdbot.workers.dev/?q={movie}`)
    let data = await res.json()
    console.log(data.description)
    let movies = data.description
    movies.sort((a,b)=>{
        const movieA = a["#YEAR"];
        const movieB = b["#YEAR"];
        return movieB - movieA;
    })
    movies.forEach(val =>{
        console.log(val["#YEAR"])
    }) 
    return data;
}

export const getMoviesForActor = async(movie) =>{
    let res = await fetch(`https://search.imdbot.workers.dev/?q={movie}`)
    let data = await res.json()
    console.log(data.description)
    let movies = data.description
    return data;
}
export const getMoviesForIMDBranking = async(movie) =>{
    let res = await fetch(`https://search.imdbot.workers.dev/?q={movie}`)
    let data = await res.json()
    console.log(data.description)
    let movies = data.description
    movies.sort((a,b)=>{
        const movieA = a["#YEAR"];
        const movieB = b["#YEAR"];
        return movieB - movieA;
    })
    movies.forEach(val =>{
        console.log(val["#YEAR"])
    }) 
    return data;
}
export const getMoviesAllMovies = async(movie) =>{
    let res = await fetch(`https://search.imdbot.workers.dev/?q={movie}`)
    let data = await res.json()
    console.log(data.description)
    let movies = data.description
    movies.sort((a,b)=>{
        const movieA = a["#YEAR"];
        const movieB = b["#YEAR"];
        return movieB - movieA;
    })
    movies.forEach(val =>{
        console.log(val["#YEAR"])
    }) 
    return data;
}

export const getMoviesAllMoviesAndID = async(movie) =>{
    let res = await fetch(`https://search.imdbot.workers.dev/?q={movie}`)
    let data = await res.json()
    console.log(data.description)
    let movies = data.description
    movies.sort((a,b)=>{
        const movieA = a["#RANK"];
        const movieB = b["#RANK"];
        return movieB - movieA;
    })
    return data;
}