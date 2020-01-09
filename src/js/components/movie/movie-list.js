import movie from './index';

export default class MovieList {
    constructor(data){
        this.data = data.results;
        // console.log(this.data);
        this.renderMovies();
    }

    DrawToDom(selector){
        this.clearList(selector);
        selector.appendChild(this.fragment);

    }

    renderMovies() {
        this.fragment = document.createDocumentFragment();
        console.log(this.data);
        this.data.forEach(data => {
            const article = document.createElement('article');
            article.classList.add('movie');
            article.innerHTML = movie(data);
            this.fragment.appendChild(article);
        });


    }

    clearList(selector){
        selector.innerHTML = '';
    }
}