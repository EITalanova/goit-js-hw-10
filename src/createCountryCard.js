export function createOneCountryCard(countries) {
  return countries.map(
    ({ name, capital, population, languages, flags }) =>
      `<li class="country-ell-one">
                <img class="county-flag" src=${flags.svg} width="40""></img>
  <span class="country-name-one">${name.official}</span>
  <ul class="country-info no-marker">
    <li class="info-list">
      <span class='info-title'>Capital:</span>
      <span class="info">${capital}</span>
    </li>
    <li class="info-list">
      <span class='info-title'>Population:</span>
        <span class="info">${population}</span>
    </li>
    <li class="info-list">
      <span class='info-title'>Languages:</span>
        <span class="info">${Object.values(languages).join(', ')}</span>
    </li>  
  </ul>
</li>`
  );
}

export function createManyCountryCard(countries) {
  return countries
    .map(
      ({ name, flags }) =>
        `<li class="country-ell">
            <img class="county-flag" src=${flags.svg} width="30""></img>
            <span class="country-name">${name.official}</span>
        </li>`
    )
    .join('');
}
