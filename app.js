window.addEventListener('load', ()=> {
let long;
let lat;
let temperatureDescription = document.querySelector('.temperature-description');
let temperatureDegree = document.querySelector(".temperature-degree");
let locationTimezone = document.querySelector(".location-timezone");
let temperatureSection = document.querySelector(".temperature");
const temperatureSpan = document.querySelector(".temperature span");




if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
       long = position.coords.longitude;
       lat = position.coords.latitude;

        const proxy = "https://cors-anywhere.herokuapp.com/";
        const api = `${proxy}https://api.darksky.net/forecast/0adcc61512982fc85813a13d08c097ea/${lat},${long}`;

        fetch(api)
        .then(response =>{
            return response.json();        
        })
        .then(data => {
           const { temperature, summary, } = data.currently;
            //set DOM ELements from the APi
            temperatureDegree.textContent = temperature;
            temperatureDescription.textContent = summary;
            locationTimezone.textContent = data.timezone;
                  });
    });
  }
  }
});
