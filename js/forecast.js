const key = 'lZK0HGTAh9TYdy967ccZsVWUT4gQ9Alu'

// get weather
const getWeather = async (id) => {
    const base = 'http://dataservice.accuweather.com/currentconditions/v1/'
    const query = `${id}?apikey=${key}`

    const response = await fetch(base + query)
    const data = await response.json()

    return data[0] //return object rather than an array
}

// get city
const getCity = async (city) => {
    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search'
    const query = `?apikey=${key}&q=${city}`

    const response = await fetch(base + query)
    const data = await response.json()

    return data[0] // get first item 
}

// getCity('richmond')
// .then(data => {
//     return getWeather(data.Key)
// })
// .then(data => {
//     console.log(data)
// })
// .catch(error => {
//     console.log('error:', error)
// })