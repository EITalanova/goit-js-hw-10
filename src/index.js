import './css/styles.css';
import debounce from 'lodash.debounce';
import CountryInfoApiService from './fetchCountries';

const input = document.querySelector('#search-box');
const countryList = document.querySelector('.country-list');
const countryName = document.querySelector('.country-name');
const DEBOUNCE_DELAY = 1300;

const countryInfoApiService = new CountryInfoApiService();

function onSearch(evt) {
  evt.preventDefault();
  clearContainer();

  countryInfoApiService.query = evt.target.value.trim();
  countryInfoApiService.fetchCountries();
}

function clearContainer() {
  countryList.innerHTML = '';
}

function styleForList() {
countryName.hasAttribute("class", )
}

input.addEventListener('input', debounce(onSearch, DEBOUNCE_DELAY));