const form = document.querySelector('.location')
const card = document.querySelector('.weather-card')
const image = document.querySelector('.weather-img')
const icon = document.querySelector('.weather-icon img')

const updateUI = data => {
    const { city, weather } = data

    // update city and temperature
    document.querySelector('.weather-city').innerHTML = city.EnglishName
    document.querySelector('.weather-temp').innerHTML = weather.Temperature.Imperial.Value
    document.querySelector('.weather-desc').innerHTML = weather.WeatherText

    // update image
    let imageUrl = weather.IsDayTime ? 'img/day.svg': 'img/night.svg'
    image.setAttribute('src', imageUrl)

    // update icon 
    let iconUrl = `img/icons/${weather.WeatherIcon}.svg`
    icon.setAttribute('src', iconUrl)


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