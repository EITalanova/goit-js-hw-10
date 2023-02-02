import './css/styles.css';
// import fetchCountries from "./fetchCountries.js"

import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';
import CountryInfoApiService from './fetchCountries';

const input = document.querySelector('#search-box');
const countryList = document.querySelector('.country-list');
const DEBOUNCE_DELAY = 1300;



const countryInfoApiService = new CountryInfoApiService();

function onSearch(evt) {
  evt.preventDefault();

  countryInfoApiService.query = evt.target.value.trim();
    console.log(countryInfoApiService.query);
    
    countryInfoApiService.fetchCountries();
//   
}
input.addEventListener('input', debounce(onSearch, DEBOUNCE_DELAY));

// function markupOneCountry() {
// countryList.innerHTML = 

//  };
// function markupManyCountry() { };
