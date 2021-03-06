import config from './../../config'
export default function movie(data) {
    
    const mapingData = mapData(data);
    const html = `

    <a href='${data.id}' class="movie-link">
        <h2>${mapingData.name}</h2>
        <date>${mapingData.date}</date>
        <date>${mapingData.realiseDate}</date>
        <div>${mapingData.country}</div>
        <div class="picture"><img src = '${mapingData.imgSrc}'></div>
        <div>${mapingData.language}</div>
        <div>${mapingData.overview}</div>
        <div>${mapingData.popularity}</div>

    </a>`;
    return html;

}

function mapData(data){
    return {
        name: data.title || data.name || 'Unknown',
        date: data.release_date || data.release_date ||'Unknown',
        realiseDate: data.release_date || data.release_date ||'Unknown',
        country: data.origin_country || 'Unknown',
        // imgSrc: config.imgSrc+data.poster_path,
        imgSrc: getPictureUrl(data),
        homepageUrl: data.profile_path || 'Unknown',
        language: data.original_language || 'Unknown',
        numberofEpisdes: data.vote_count || 'Unknown',
        number_of_seasons: data.vote_count || 'Unknown',
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


