fetch('https://restcountries.com/v3.1/all')
      .then(response => response.json())
      .then(json => showCountry(json))

      function showCountry(countries) {
        var parentDiv = document.getElementById('country-container');
        for ( var country of countries){
            console.log(countries);
            var childDiv =document.createElement('div');
            childDiv.classList.add('childDiv')
            childDiv.innerHTML = `
            <h3>${country.name.common}</h3>
            <button onclick="showDetails('${country.cca2}')" class="btn btn-success">Show details</button>
            
            `
            parentDiv.appendChild(childDiv)
        }
      }

      function showDetails(countryDetails) {
        fetch(`https://restcountries.com/v3.1/alpha/${countryDetails}`)
      .then(respon => respon.json())
      .then(countries => details(countries[0]));
      }
      function details(countries) {
       var get = document.getElementById('details')
       var card = document.createElement('div');
       card.innerHTML =`
       <div class="card mb-3" style="max-width: 540px;">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="${countries.flags.png}" class="img-fluid rounded-start h-100" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">${countries.name.common}</h5>
        <p class="card-text">Capital:${countries.capital}</p>
        <p class="card-text">Population:${countries.population}</p>
        <p class="card-text">Region:${countries.region}</p>
        <p class="card-text">Currencies:${countries.currencies}</p>
      </div>
    </div>
  </div>
</div>
       `
       get.appendChild(card)
      }