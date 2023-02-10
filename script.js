const form = document.getElementById("city-form");
const findCityBtn = document.getElementById("find-city-btn");
const countrySelect = document.getElementById("country-select");
const postcodeSelect = document.getElementById("postcode-select");
const locationInfo = document.getElementById("location-info"); 

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const countryAbbreviation = countrySelect.value;
  const postcode = postcodeSelect.value;

  fetch(`https://api.zippopotam.us/${countryAbbreviation}/${postcode}`)
    .then(response => response.json())
    .then(data => {
      locationInfo.innerHTML = `
        <p>Country: ${data.country}</p>
        <p>Place Name: ${data.places[0]["place name"]}</p>
        <p>Postcode: ${postcode}</p>
        <p>Longitude: ${data.places[0]["longitude"]}</p>
        <p>State: ${data.places[0]["state"]}</p>
        <p>State Abbreviation: ${data.places[0]["state abbreviation"]}</p>
        <p>Latitude: ${data.places[0]["latitude"]}</p>
      `;
    })
    .catch(error => {
      locationInfo.textContent = `Error: ${error}`;
    });
});

