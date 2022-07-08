const access_key = "7a929e3f7349d1d2615e53bed0b1426f";
const BASE_URL = `http://api.weatherstack.com/current?access_key=${access_key}&query=Brisbane`;

export default {
  getCurrent: (url) => {
    return fetch(url || BASE_URL)
      .then((response) => {
        console.log("12132141124");
        if (response.ok) {
          console.log("IN API RES:", response);
          return response.json();
        }
        throw new Error("Unable to get weather!");
      })
      .then((data) => data);
  },
};
