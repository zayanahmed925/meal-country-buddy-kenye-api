const loadCountry = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayCountries(data));
}
loadCountry();

const displayCountries = countries => {
    // console.log(countries);
    const countriesArea = document.getElementById('countries');
    countries.forEach(country => {
        // console.log(country.capital);
        const div = document.createElement('div');
        div.classList.add('country');
        div.innerHTML = `
        <h2> ${country.name.common} </h2>
        <p> ${country.capital}</p>
        <button onClick="loadDetails('${country.name.common}')">Details</button>`
        // const h2 = document.createElement('h2');
        // h2.innerText = country.name.common;
        // div.appendChild(h2);
        // const p = document.createElement('p');
        // p.innerText = country.capital;
        // div.appendChild(p);
        countriesArea.appendChild(div);
    });
}
const loadDetails = (name) => {
    const url = `https://restcountries.com/v3.1/name/${name}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayCountryDetail(data[0]))
    // console.log(url)
}
const displayCountryDetail = (country) => {
    const countryDiv = document.getElementById('details');
    countryDiv.innerHTML = `
    <h3>${country.name.common}</h3>
    <p>continents: ${country.continents}</p>
    <p>Population: ${country.population}</p>
    <img src="${country.flags.png}">`
}