async function start() {
    const weatherPromis = await fetch("https://api.weather.gov/gridpoints/MPX/46,130/forecast");
    const weatherData = await weatherPromis.json();
    const ourTemperature = weatherData.properties.periods[0].temperature
    document.querySelector("#temperature-output").textContent = ourTemperature
}

start()