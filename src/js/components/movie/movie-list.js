import movie from './index';

export default class MovieList {
    init(data) {
        this.data = data;
    }

    DrawToDom(selector){
        this.clearList(selector);
        selector.appendChild(this.fragment);

    }

    renderMovies(data) {
        // this.data = data;
        this.fragment = document.createDocumentFragment();
        console.log(this.data);
        data.forEach(data => {
            const article = document.createElement('article');
            article.classList.add('movie');
            article.innerHTML = movie(data);
            this.fragment.appendChild(article);
        });


    }

    clearList(selector){
        selector.innerHTML = '';
    }

    sort(filter) {
       
        const data = [...this.data.results];
        if (filter === 'rating-max') {
            this.sortByMaxRating(data);

        }

        if (filter === 'rating-min') {
            this.sortByMinRating(data);

        }

        if (filter === 'date-new') {
            this.sortByNew(data);
        }

        if (filter === 'date-old') {
            this.sortByOld(data);
        }

    }

    sortByMaxRating(data) {

        data.sort((a,b)=>{
            if (a.popularity<b.popularity) {
                return 1;
            }

            if (a.popularity>=b.popularity) {
                return -1;
            }
            

        })
        this.renderMovies(data);
        this.DrawToDom(document.querySelector('.movies'));
    }

    sortByMinRating(data) {

        data.sort((a,b)=>{
            if (a.popularity>b.popularity) {
                return 1;
            }

            if (a.popularity<=b.popularity) {
                return -1;
            }

        })
        this.renderMovies(data);
        this.DrawToDom(document.querySelector('.movies'));

    }
    sortByNew(data) {

        data.sort((a,b)=>{
            if (new Date(a.release_date)<new Date(b.release_date)) {
                return 1;
            }

            if (new Date(a.release_date)>=new Date(b.release_date)) {
                return -1;
            }
            

        })
        this.renderMovies(data);
        this.DrawToDom(document.querySelector('.movies'));
    }

    sortByOld(data) {

        data.sort((a,b)=>{
            if (new Date(a.release_date)>new Date(b.release_date)) {
                return 1;
            }

            if (new Date(a.release_date)<=new Date(b.release_date)) {
                return -1;
            }

        })
        this.renderMovies(data);
        this.DrawToDom(document.querySelector('.movies'));

    }
}