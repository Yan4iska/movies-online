const searchForm = document.querySelector('#searchForm');
const movie = document.getElementById('movies');
const urlPoster = 'https://image.tmdb.org/t/p/w500';

function apiSearch(event) {
    event.preventDefault();
    const searchText = document.querySelector('.form-control').value;
    const server = 'https://api.themoviedb.org/3/search/multi?api_key=815608f57b90d92461c07f9abcdb54d9&language=ru&query=' + searchText;
    movie.innerHTML = 'Загрузка';

    fetch(server)
.then(function(value){

    if(value.status !== 200) {
        return Promise.reject('ошибка');
    }
    return value.json();

})
.then(function(output){
    console.log(output);
    let inner = '';

    output.results.forEach(function(item){
        let nameItem = item.name || item.title;
        let dateItem = item.release_date || item.first_air_date;
        let path_img = urlPoster + item.poster_path;
        checkImgSrc(path_img);
        console.log(nameItem);
        inner += `
        <div class="cool-12 col-md-4 col-xl-3 item">
        <img src="${path_img}" alt="${nameItem}">
         <h5>${nameItem}</h5>
        </div>
        `;
        //inner += '<div class="cool-12 col-md-4 col-xl-3">' + nameItem + ' дата: ' + dateItem + '</div>'
    });
    
    movie.innerHTML = inner;
})
.catch(function(reason){
    movie.innerHTML = 'Упс. что-то пошло не так!';
    console.log('error: ' + reason);
})
;
}

searchForm.addEventListener('submit', apiSearch);

var checkImgSrc = src => {
    const img = new Image();
    img.onload = function () { console.log(`valid src: ${src}`); }
    img.onerror = function () { console.log(`unvalid src: ${src}`); }
    img.src = src;
  }