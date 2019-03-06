//Class created to use the YelpApi
//
class YelpApi {
  url = "https://api.yelp.com/v3/";
  bussiness_search = "/businesses/search";
  cors = "https://cors-anywhere.herokuapp.com/";

  constructor(apikey) {
    this.apikey = apikey;
  }

  getBussinessSearchUrl = () => {
    return `${this.cors}${this.url}${this.bussiness_search}`;
  };

  findBlumenau = () => {
    return fetch(
      `${this.getBussinessSearchUrl()}?location=Blumenau+Santa+Catarina&limit=50`,
      {
        mode: "cors",
        headers: {
          Authorization: `Bearer ${this.apikey}`,
          "Content-Type": "application/json"
        }
      }
    )
      .then(response => {
        return response.json();
      })
      .catch(error => {
        console.error(error.message);
      });
  };
}

export default YelpApi;
