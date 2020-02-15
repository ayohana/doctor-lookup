export class DoctorService {
  async getList(symptom, lastName){
    try {
      let url = `https://api.betterdoctor.com/2016-03-01/doctors?query=${lastName},${symptom}&location=wa-seattle&sort=best-match-desc&skip=0&limit=5&user_key=${process.env.API_KEY}`;
      let response = await fetch(url);
      console.log(url);
      let jsonifiedResponse = await response.json();
      return jsonifiedResponse;
    } catch(error) {
      console.error("There was an error handling your request: " + error.message);
    }
  }
}