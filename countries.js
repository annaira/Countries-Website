function showCountry() {
    const countryId = document.getElementById('country_id').value;
    const countries = JSON.parse(localStorage.getItem("countries"));

    const country = countries[countryId - 1];

    if(country){
        document.getElementById("countryName").innerHTML = country.name;
    } else {
        document.getElementById("countryName").innerHTML = "not found";
    }
}

const showCountryButton = document.getElementById('showCountryButton');
showCountryButton.addEventListener('click', showCountry, true);

window.onload = function () {
    const request = new XMLHttpRequest();

    request.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            localStorage.setItem("countries", this.responseText);
        }
    };

    request.open('GET', 'http://127.0.0.1:5000/countries');
    request.send();
}