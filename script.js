const searchForm = document.querySelector('#searchForm');
const movie = document.getElementById('movies');
const urlPoster = 'https://image.tmdb.org/t/p/w500';

function apiSearch(event) {
    event.preventDefault();
    const searchText = document.querySelector('.form-control').value;
    if(searchText.trim().length === 0) {
        movie.innerHTML = '<h2 class="cool-12 text-center text-danger">Ничего не найдено<h2>';
        return;
    }
    const server = 'https://api.themoviedb.org/3/search/multi?api_key=815608f57b90d92461c07f9abcdb54d9&language=ru&query=' + searchText;
    const movieserver = 'https://api1638625672.synchroncode.com/embed/movie/';
    movie.innerHTML = '<div class="spinner"></div>';

    fetch(server)
.then(function(value){

    if(value.status !== 200) {
        return Promise.reject('ошибка');
    }
    return value.json();

})
.then(function(output){
    
    let inner = '';
    if(output.results.length === 0) {
        inner = '<h2 class="cool-12 text-center text-info">по вашему запросу ничего не найдено<h2> ';
    }

    output.results.forEach(function(item){
       
        let nameItem = item.name || item.title;
        let dateItem = item.release_date || item.first_air_date;
        const poster = item.poster_path ? urlPoster + item.poster_path : './img/noPoster.png';
        let dataInfo = '';
        if(item.media_type !== 'person') dataInfo = `data-id="${item.id}" data-type="${item.media_type}"`; 
        inner += `<div class="cool-12 col-md-6 col-xl-3 item">
        <img src="${poster}" class="img_poster" alt="${nameItem}" ${dataInfo}">
         <h5>${nameItem}</h5>
        </div>
        `;
    });
    movie.innerHTML = inner;

    addEventListener();
})
.catch(function(reason){
    movie.innerHTML = 'Упс. что-то пошло не так!';
    console.log('error: ' + reason);
})
;
}

function addEventListener(){
    const media = movie.querySelectorAll('img[data-id]');
    media.forEach(function(elem){
        elem.style.cursor  = 'pointer';
        elem.addEventListener('click', showFullInfo);
    });
}

searchForm.addEventListener('submit', apiSearch);

function showFullInfo(){
    let url = '';
    console.log('check1: ', this.dataset.type, this.dataset.id);
    if(this.dataset.type ==='movie')
        url = 'https://api.themoviedb.org/3/movie/' +
        this.dataset.id +'?api_key=815608f57b90d92461c07f9abcdb54d9&language=ru';
        else if(this.dataset.type === 'tv')
        url = 'https://api.themoviedb.org/3/tv/'+ this.dataset.id +'?api_key=815608f57b90d92461c07f9abcdb54d9&language=ru';
        else {
            movie.innerHTML = '<h2 class="col-12 text-center text-info">Произошла ошибка! повторите позже.</h2>'
        }
    
        
 const valueType = this.dataset.type;
 const valueId = this.dataset.id;
        fetch(url)
.then(function(value){

    if(value.status !== 200) {
        return Promise.reject('ошибка');
    }
    return value.json();

})
.then(function(output){
    console.log('output: ', output);
    movie.innerHTML = `<h4 class="col-12 text-center text-info">${output.name || output.title}</h4>
             <div class="col-4">
             <img src="${urlPoster  +  output.poster_path}" alt ="${output.name || output.title}">

             ${output.homepage ? `<p class='text-center'> <a href = "${output.homepage} target="_blank">Офи1иальная страни1а</a> </p>
             `:``
             }
             ${output.homepage ? `<p class='text-center'> <a href = "https://imdb.com/title/${output.imdb_id}" target="_blank">IMDB страни1а</a> </p>
             `:``
             }
             </div>
             <div class="col-8">
             <p>Рейтинг: ${output.vote_average}</p>
             <p>Статус: ${output.status}</p


             <p><p>Премьера: ${(output.first_air_date) || (output.release_date)}</p></p>

             ${output.last_episode_to_air ? `<p>${output.last_episode_to_air.season_number} сезона ${output.last_episode_to_air.episode_number} серий </p>` : ``}


             <p>Описание: <br> ${output.overview}</p>
             </div>

             <div class="youtube">
                
             </div>
    `;

    getVideo( valueType, valueId);

 
})
.catch(function(reason){
    movie.innerHTML = 'Упс. что-то пошло не так!';
    console.log('error: ' + reason);
});
}


document.addEventListener('DOMContentLoaded', function(){
    fetch('https://api.themoviedb.org/3/trending/all/week?api_key=815608f57b90d92461c07f9abcdb54d9&language=ru')
    .then(function(value){
    
        if(value.status !== 200) {
            return Promise.reject('ошибка');
        }
        return value.json();
    
    })
    .then(function(output){
        console.log('output: ', output);
        let inner = '<h4 class="cool-12 text-center">популярные за неделю</h4>';
        if(output.results.length === 0) {
            inner = '<h2 class="cool-12 text-center text-info">по вашему запросу ничего не найдено</h2> ';
        }
    
        output.results.forEach(function(item){
           
            let nameItem = item.name || item.title;
            let mediaType = item.title ? 'movie' : 'tv';
            let dateItem = item.release_date || item.first_air_date;
            const poster = item.poster_path ? urlPoster + item.poster_path : './img/noPoster.png';
            let dataInfo = `data-id="${item.id}" data-type="${mediaType}"`;
            inner += `<div class="cool-12 col-md-6 col-xl-3 item">
            <img src="${poster}" class="img_poster" alt="${nameItem}" ${dataInfo}">
             <h5>${nameItem}</h5>
            </div>
            `;
        });
        movie.innerHTML = inner;
    
        addEventListener();
    })
    .catch(function(reason){
        movie.innerHTML = 'Упс. что-то пошло не так!';
        console.log('error: ' + reason);
    });
})

function getVideo(type, id){
   let youtube = movie.querySelector('.youtube');

    fetch(`https:api.themoviedb.org/3/${type}/${id}/videos?api_key=815608f57b90d92461c07f9abcdb54d9&language=ru`)
    .then((value) => {
    
        if(value.status !== 200) {
            return Promise.reject('ошибка');
        }
        return value.json();
    
    })
    .then((output) => {
        console.log(output);
        let videoFrame ='<h5 class="col-12 text-info">трейлеры</h5>';
        
        if(output.results.length === 0) 
        videoFrame = '<h5 class="col-12 text-info">трейлеры отсутствуют</h5>';

        output.results.forEach((item) => {
            videoFrame += '<iframe width="560" height="315" src="https://www.youtube.com/embed/'+ item.key + '" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
        });
        youtube.innerHTML = videoFrame;
    })
    .catch((reason) => {
        youtube.innerHTML = "видео отсутствует!";
        console.error(reason || reason.status);
    });

}