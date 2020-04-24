class Forecast {
    constructor() {
        this.key = 'lZK0HGTAh9TYdy967ccZsVWUT4gQ9Alu'
        this.weatherURI = 'http://dataservice.accuweather.com/currentconditions/v1/'
        this.cityURI = 'http://dataservice.accuweather.com/locations/v1/cities/search'
    }

    // update city
   async updateCity(city) {
        const details = await this.getCity(city) // search for city 
        const weather = await this.getWeather(details.Key) // get weather using city key

        return { city: details, weather: weather }
    }

    // get city
    async getCity(city) {
        const query = `?apikey=${this.key}&q=${city}`
        const response = await fetch(this.cityURI + query)
        const data = await response.json()

        return data[0] // get first item 
    }

    // get weather
    async getWeather(id) {
        const query = `${id}?apikey=${this.key}`
        const response = await fetch(this.weatherURI + query)
        const data = await response.json()

        return data[0] //return object rather than an array
    }
}