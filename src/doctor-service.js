export class DoctorService {
  async getList(issue, nameOfDoctor){
    try {
      issue = encodeURI(issue);
      nameOfDoctor = encodeURI(nameOfDoctor);
      let url = `https://api.betterdoctor.com/2016-03-01/doctors?query=${nameOfDoctor},${issue}&location=wa-seattle&sort=best-match-desc&skip=0&limit=5&user_key=${process.env.API_KEY}`;
      let response = await fetch(url);
      let jsonifiedResponse = await response.json();
      return jsonifiedResponse;
    } catch(error) {
      console.error("There was an error handling your request: " + error.message);
    }
  }
}