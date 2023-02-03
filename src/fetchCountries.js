import Notiflix from 'notiflix';
import { createOneCountryCard } from './createCountryCard';
import { createManyCountryCard } from './createCountryCard';
export default class CountryInfoApiService {
  constructor() {
    this.searchCountry = '';
  }

  fetchCountries() {
    const url = `https://restcountries.com/v3.1/name/${this.searchCountry}?fields=name,capital,population,flags,languages`;
    const countryList = document.querySelector('.country-list');

    fetch(url)
      .then(response => response.json())
      .then(response => {
        if (response.length >= 10) {
          Notiflix.Notify.info('Too many matches found. Please enter a more specific name.');
          return;
        } else if (response.length >= 2 && response.length < 10) {
          countryList.innerHTML = createManyCountryCard(response);
          return;
        } else if (response.length >= 1 && response.length < 2) {
          countryList.innerHTML = createOneCountryCard(response);
          return;
        }
        throw new Error(
          Notiflix.Notify.failure('Oops, there is no country with that name')
        );
      });
  }

  get query() {
    return this.searchCountry;
  }

  set query(newQuery) {
    this.searchCountry = newQuery;
  }
}
