const fetch_data = require('../utils/fetchData')
const API = 'https://rickandmortyapi.com/api/character/'

fetch_data(API)
    .then(data => {
        console.log(data.info.count) // prints count

        // makes return of a new petition
        // API ist concat with the id 
        // https://rickandmortyapi.com/api/character/1
        return fetch_data(`${API}${data.results[0].id}`) 
    })
    .then(data => {
        console.log(data.name) // prints name
        return fetch_data(data.origin.url)
    })
    .then(data => {
        console.log(data.dimension)
    })
    .catch(err => console.error(err))
