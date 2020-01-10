import movie from './index';

export default class MovieList {
    

    DrawToDom(selector){
        this.clearList(selector);
        selector.appendChild(this.fragment);

    }

    renderMovies(data) {
        this.data = data.results;
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