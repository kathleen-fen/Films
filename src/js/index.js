// import './../css/bootstrap.min.css'
require("./../../node_modules/bootstrap/dist/css/bootstrap.min.css");
import './../css/style.css'
import MovieList from './components/movie/movie-list'
import moviesService from './movie-service'
const input = document.querySelector('.search-input');
const movieList = document.querySelector('.movies');
const list = new MovieList();
const filters = document.querySelector('.filters');
input.addEventListener('input',e=>{
    
    const searchText = e.target.value;
    if (!searchText) {
        list.clearList(movieList);
        // movieList.innerHTML = '';
        return;
    };
    // console.log(searchText);
    moviesService.getVideoByText(searchText)
    
    .then(data=>{
        list.init(data);
        list.renderMovies(data.results);
        // const list = new MovieList(result);
        list.DrawToDom(movieList);
    })

});

filters.addEventListener('click',(e)=>{
    e.preventDefault();
    // debugger;
    const target=e.target;
    const dataAttr = target.getAttribute('data-filter');
    if (!dataAttr) {
        return;
    }
    list.sort(dataAttr);

});