import './css/styles.css';

const DEBOUNCE_DELAY = 300;

function fetchCountries() {
    return fetch('https://restcountries.com/v3.1/name/ukraine').then(
        response => response.json())
        .then(console.log());
}
fetchCountries();