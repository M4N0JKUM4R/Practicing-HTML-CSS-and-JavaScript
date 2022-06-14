const API_URL = "https://api.themoviedb.org/3/movie/popular?api_key=f82723cbb0e48a5c744a993878854d57&language=en-US&page=1"
const containerMovies = document.querySelector(".container .movies")
const IMG_PATH = "https://image.tmdb.org/t/p/w500"
let searchAPI = "https://api.themoviedb.org/3/search/movie?api_key=f82723cbb0e48a5c744a993878854d57&language=en-US&page=1&include_adult=false&query="
const searchEl = document.querySelector(".movie-search")
const form = document.querySelector("form")

async function getMovies(url) {

    containerMovies.innerHTML = ""
    const response = await fetch(url)
    const jsonData = await response.json()

    const results = jsonData.results
    
    console.log({results})

    showMovies(results)
    toDelete()
}

getMovies(API_URL)

function showMovies(results) {
    results.forEach((result, index) => {
        const {poster_path,title,overview,vote_average} = result;
        containerMovies.innerHTML += 
        `<div class="movie-card">
            <div class="image-container">
                <img src="${IMG_PATH}${checkImage(poster_path, index)}" class="movie-image" />
            </div>
            <div class="movie-content">
                <div class="movie-title">${title}</div>
                <div class="movie-desc">${truncated(overview)}</div>
                <div class="movie-votes ${getClassByVotes(vote_average)}">${vote_average}</div>
                </div>
        </div>`

        
    })
}

function getClassByVotes(num) {
    if(num > 8) {
        return "green"
    } else if(num < 8 && num > 5) {
        return "orange"
    } else if(num <= 5) {
        return "red"
    }
}

function truncated(str) {
    if(str.length >= 200) {
       return str.slice(0,200) + `... <a href="read-more">Read more</a>`
    } else return str
}

let toBeDeleted = []

function checkImage(image, number) {
    
    if(image == null) {
        toBeDeleted.push(number)
    }
    else {
        return image
    }
    console.log(toBeDeleted)
}

function toDelete() {
    let movieCards = document.querySelectorAll(".movie-card")
    console.log(movieCards)

        for(i = 0; i < toBeDeleted.length; i++) {
            movieCards[toBeDeleted[i]].classList.add("no-show")
        }
   
}

form.addEventListener("submit", (e) => {
    e.preventDefault()
    searchValue = searchAPI + searchEl.value;
    getMovies(searchValue)
    // showMovies()
})

