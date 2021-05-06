// This function loads the data and sends it to the updateHtml function
function loadMovieData(id) {
    // Generate API Url
    let url = 'https://api.themoviedb.org/3/movie/' + id; // first part of the url
    // add API key to url
    url += '?api_key=08b6d2e553fa09f76f47bf59ab566dd9';

    console.log(url);
    fetch(url)
        .then(response => response.json())
        .then(data => updateMovieHtml(data));
}

// This function inserts the data into the HTML
function updateMovieHtml(data) {
    console.log('received this:', data);
    // title
    const title = document.querySelector('.movie__title');
    title.textContent = data.title;

    // description
    const description = document.querySelector('.movie__description');
    description.textContent = data.overview;

    //
    const rating = document.querySelector('.movie__rating');
    rating.textContent = data.vote_average;

}



/* CREDITS DATA */
// This function loads the data and sends it to the updateHtml function
function loadCreditsData(id) {
    // Generate API Url
    let url = 'https://api.themoviedb.org/3/movie/' + id + '/credits'; // first part of the url
    // add API key to url
    url += '?api_key=08b6d2e553fa09f76f47bf59ab566dd9';

    console.log(url);
    fetch(url)
        .then(response => response.json())
        .then(data => updateCreditsHtml(data));
}


// This function inserts the data into the HTML
function updateCreditsHtml(data) {
    console.log('received this:', data);
    const directorDOM = document.querySelector('.movie__director');
    // loop through all crew data to find the one that matches 'director'
    data.crew.forEach(person => {
        console.log(person.job);
        if (person.job === 'Director') {
            directorDOM.textContent = person.name;
        }
    });

    const writer = document.querySelector('.movie__writer');
    writer.textContent = data.crew[7].name;


}



// Calling the functions
loadMovieData(580175);
loadCreditsData(580175);
