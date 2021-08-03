const fetch_data = require('../utils/fetchData')
const API = 'https://rickandmortyapi.com/api/character/'

const anotherFunction = async (url_api) => {
    try {
        const data = await fetch_data(url_api)
        const character = await fetch_data(`${API}${data.results[0].id}`)
        const origin = await fetch_data(character.origin.url)

        console.log(data.info.count)
        console.log(character.name)
        console.log(origin.dimension)
    } catch (error) {
        console.error(error)
    }
}

console.log('Before')
anotherFunction(API)
console.log('After')