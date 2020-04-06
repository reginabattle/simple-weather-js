const form = document.querySelector('.location')
const card = document.querySelector('.weather-card')

const updateUI = data => {
    const city = data.city
    const weather = data.weather

    // update weather details
    document.querySelector('.weather-city').innerHTML = city.EnglishName
    document.querySelector('.weather-temp').innerHTML = weather.Temperature.Imperial.Value

    // show card
    card.hidden = false
}

// update city
const updateCity = async (city) => {
    const details = await getCity(city) // search for city 
    const weather = await getWeather(details.Key) // get weather using city key

    return {
        city: details,
        weather: weather
    }
}

// submit form
form.addEventListener('submit', e => {
    e.preventDefault()

    // get city
    const city = form.city.value.trim()
    form.reset()

    // update ui with new city
    updateCity(city)
        .then(data => {
            console.log('data:', data)
            updateUI(data)
        })
        .catch(err => {
            console.log(err)
        })
})