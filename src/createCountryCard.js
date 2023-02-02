export function createOneCountryCard(countries) {
  return countries.map(
    ({ altSpellings, capital, population, languages, flags }) =>
      `<li class="country-ell-one">
                <img class="county-flag" src=${flags.svg} width="40""></img>
  <span class="country-name-one">${altSpellings[1]}</span>
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
      ({ altSpellings, flags }) =>
        `<li class="country-ell">
            <img class="county-flag" src=${flags.svg} width="30""></img>
            <span class="country-name">${altSpellings[1]}</span>
        </li>`
    )
    .join('');
}
