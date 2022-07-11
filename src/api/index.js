import Geocode from "react-geocode";

//const access_key = "7a929e3f7349d1d2615e53bed0b1426f";
//const BASE_URL = `http://api.weatherstack.com/current?access_key=${access_key}&query=Brisbane`;
const access_key = "bb7f96ab1a54d18aaf0dade37da9a12e";
const BNE_LAT = -27.470125;
const BNE_LONG = 153.021072;
// set Google Maps Geocoding API for purposes of quota management. Its optional but recommended.
Geocode.setApiKey("AIzaSyAK5WdJLyljHi8_rXuIKhEGq_RWY761pu0");
// set response language. Defaults to english.
Geocode.setLanguage("en");
Geocode.setLocationType("ROOFTOP");
Geocode.enableDebug();

export default {
  getCurrent: (lat, long) => {
    const BASE_URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${access_key}`;
    return fetch(BASE_URL)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Unable to get weather!");
      })
      .then((data) => data);
  },
  getLatLong: (cityName) => {
    // Get latitude & longitude from address.
    return new Promise((resolve, reject) => {
      Geocode.fromAddress(cityName).then(
        (response) => {
          const { lat, lng } = response.results[0].geometry.location;
          const result = { lat: lat, lng: lng };
          resolve(result);
        },
        (error) => {
          reject();
        }
      );
    });
  },
};
