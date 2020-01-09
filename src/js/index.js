// import './../css/bootstrap.min.css'
require("./../../node_modules/bootstrap/dist/css/bootstrap.min.css");
import './../css/style.css'
import MovieList from './components/movie/movie-list'
import moviesService from './movie-service'
const input = document.querySelector('.search-input');
const movieList = document.querySelector('.movies');
input.addEventListener('input',e=>{
    
    const searchText = e.target.value;
    if (!searchText) {
        movieList.innerHTML = '';
        return;
    };
    // console.log(searchText);
    moviesService.getVideoByText(searchText)
    
    .then(result=>{
        
        const list = new MovieList(result);
        list.DrawToDom(movieList);
    })

});