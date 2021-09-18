const loadCountries = () => {
    fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(data => displayCountries(data));
}
loadCountries();

const displayCountries = counties => {
    const countriesDiv = document.getElementById('countries');
    // for (const country of counties) {
    //     console.log(country);
    // }
    counties.forEach(country => {
        const div = document.createElement('div');
        div.classList.add('country')
        div.innerHTML = `
            <h3>${country.name}</h3>
            <p>${country.capital}</p>
            <button onclick="loadCountryByName('${country.name}')">Details</button>
        `;
        countriesDiv.appendChild(div);
    });
}
// search country url e name paramater ta dynamic korlam.
// then oi specific country details fetch
// data[0] cz data er 0 index e details ache
const loadCountryByName = name => {
    const url = `https://restcountries.eu/rest/v2/name/${name}
    `;
    fetch(url)
        .then(res => res.json())
        .then(data => displayCountryDetail(data[0]));
}
// display country details
// child create korinai cz, 1 ta data e show korbo
const displayCountryDetail = country => {
    const countriesDiv = document.getElementById('country-detail');
    countriesDiv.innerHTML = `<h3>${country.name}</h3>
    <p>population:${country.population}</p>
    <img width="200px" src="${country.flag}">`;
    countriesDiv.appendChild(countriesDiv);
    console.log(country)
}