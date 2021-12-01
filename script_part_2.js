const searchForm = document.querySelector('#searchForm');
const movie = document.getElementById('movies');


function apiSearch(event) {
    event.preventDefault();
    const searchText = document.querySelector('.form-control').value;
    const server = 'https://api.themoviedb.org/3/search/multi?api_key=815608f57b90d92461c07f9abcdb54d9&language=ru&query=' + searchText;
    movie.innerHTML = 'Загрузка';
    requestApi(server).then(function(result){

        const output = JSON.parse(result);

        let inner = '';

        output.results.forEach(function(item){
            let nameItem = item.name || item.title;
            let dateItem = item.release_date || item.first_air_date;
            console.log(nameItem);
            inner += '<div class="cool-12 col-md-4 col-xl-3">' + nameItem + ' дата: ' + dateItem + '</div>'
        });
        
        movie.innerHTML = inner;

    })
    .catch(function(reason){
        movie.innerHTML = 'Упс. что-то пошло не так!';
        console.log('error: ' + request.status);
    })
    ;
}

searchForm.addEventListener('submit', apiSearch);

function requestApi(url){
    return new Promise (function (resolve, reject) {
        const request = new XMLHttpRequest();
        
        request.open('GET', url);
        request.addEventListener('load', function(){
            if(request.status !==200) {
                reject({status: request.status});
                return;
            }

            resolve(request.response);

        });
        request.addEventListener('error', function(){
            reject({status: request.status});
        });
        request.send();
    });
    
   // request.addEventListener('readystatechange', function() {
   //     if(request.readyState !== 4) {
   //         movie.innerHTML = 'Загрузка';
   //         return;
    //    }
    //    if(request.status !== 200){
   //         movie.innerHTML = 'Упс. что-то пошло не так!'
    //     console.log('error: ' + request.status);
    //     return;
    //    }
 //
   //     console.log(output);
    //});
}