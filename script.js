const searchForm = document.querySelector('#searchForm');
const movie = document.getElementById('movies');


function apiSearch(event) {
    event.preventDefault();
    const searchText = document.querySelector('.form-control').value,
    server = 'https://api.themoviedb.org/3/search/multi?api_key=815608f57b90d92461c07f9abcdb54d9&language=ru&query=' + searchText;
    requestApi('GET', server);
    
}

searchForm.addEventListener('submit', apiSearch);

function requestApi(method, url){
    const request = new XMLHttpRequest();
    request.open(method, url);
    request.send();

    request.addEventListener('readystatechange', function() {
        if(request.readyState !== 4) return;

        if(request.status !== 200){
         console.log('error: ' + request.status);
         return;
        }


        const output = JSON.parse(request.responseText);

        let inner = '';

        output.results.forEach(function(item){
            let nameItem = item.name || item.title;
            let dateItem = item.release_date || item.first_air_date;
            console.log(nameItem);
            inner += '<div class="cool-12 col-md-4 col-xl-3">' + nameItem + ' дата: ' + dateItem + '</div>'
        });
        
        movie.innerHTML = inner;

        console.log(output);
    });
}