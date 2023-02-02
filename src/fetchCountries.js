import Notiflix from 'notiflix';
export default class CountryInfoApiService {
  constructor() {
    this.searchCountry = '';
  }

  fetchCountries() {
    const url = `https://restcountries.com/v3.1/name/${this.searchCountry}?fields=name.official,capital,population,flags.svg,languages`;

    fetch(url)
      .then(response => response.json())
      .then(array => {
        if (array.length >= 10) {
          console.log('many');
          Notiflix.Notify.info(
            'Too many matches found. Please enter a more specific name.'
          );
          return;
        } else if (array.length >= 2 && array.length < 10) {
          console.log('object');
          return;
        } else if (array.length >= 1 && array.length < 2) {
          console.log('object2');
         return;
        }
        throw new Error(Notiflix.Notify.failure('Oops, there is no country with that name'))
      })
  }

  get query() {
    return this.searchCountry;
  }

  set query(newQuery) {
    this.searchCountry = newQuery;
  }
}
