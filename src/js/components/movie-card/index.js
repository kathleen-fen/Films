import config from './../../config'
const listWrapper =document.querySelector('.list-wrapper');
const movieWrapper =document.querySelector('.movie-wrapper');
function renderMovie(data) {
    
    const mapingData = mapData(data);
    const html = `
    <a class="back">BACK</a> 

    <a href='${data.id}' class="movie-link">
        <h2>${mapingData.name}</h2>
        <date>${mapingData.date}</date>
        <date>${mapingData.realiseDate}</date>
        <div>${mapingData.country}</div>
        <div class="picture"><img src = '${mapingData.imgSrc}'></div>
        <div>${mapingData.language}</div>
        <div>${mapingData.overview}</div>
        <div>${mapingData.popularity}</div>
        <div>${mapingData.episodesCount}</div>
        <div>${mapingData.seasonsCount}</div>
        <div>${mapingData.homepageUrl}</div>

    </a>`;
    render(html);

}

function mapData(data){
    return {
        name: data.title || data.name || 'Unknown',
        date: data.release_date || data.release_date ||'Unknown',
        realiseDate: data.release_date || data.release_date ||'Unknown',
        country: data.origin_country || 'Unknown',
        // imgSrc: config.imgSrc+data.poster_path,
        imgSrc: getPictureUrl(data),
        homepageUrl: data.homepage || 'Unknown',
        language: data.original_language || 'Unknown',
        episodesCount: data.number_of_episodes || 'Unknown',
        seasonsCount: data.number_of_seasons || 'Unknown',
        overview: data.overview || 'Unknown',
        popularity: data.popularity || 'Unknown'

    }

}

function getPictureUrl(data) {
    const url = data.poster_path;
    if(url) {
        return config.imgSrc+url;
    } else {
        return config.noImgSrc;
    }

}

function render(html) {
    const element = document.createElement('article');
    
    

    element.classList.add('movie');
    element.innerHTML = html;
    movieWrapper.style.display='block';
    listWrapper.style.display='none';
    movieWrapper.innerHTML= '';
    movieWrapper.appendChild(element);

    const backButton = document.querySelector('.back');
    backButton.addEventListener('click',back);
}

function back(){
    listWrapper.style.display='block';
    movieWrapper.style.display='none';

}

export default {
    renderMovie,
    back
}