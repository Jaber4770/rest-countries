const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
    .then(rest = data())
    .then(data => displayCountry(data))
}

const displayCountry = countries => {
    console.log(countries);
}