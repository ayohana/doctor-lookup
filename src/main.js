import 'bootstrap' ; 
import 'bootstrap/dist/css/bootstrap.min.css' ; 
import '../src/styles.css' ;
import $ from 'jquery';
import { DoctorService } from '../src/doctor-service';

$(document).ready(function(){

  $("form#patientInfo").submit(function(event){
    event.preventDefault();
    let symptom = $("#symptom").val();

    (async () => {
      let doctorService = new DoctorService();
      const response = await doctorService.getList(symptom);
      displayList(response);
    })();

    const displayList = function(response) {
      let doctor = response.data;
      console.log(response)
      $("#listOfDoctors").show();
      for (let i = 0; i < doctor.length; i++) {
        let firstName = doctor[i].profile.first_name;
        let lastName = doctor[i].profile.last_name;
        let practiceAddress = doctor[i].practices[0].visit_address;
        let address = `${practiceAddress.street}, ${practiceAddress.city} ${practiceAddress.state} ${practiceAddress.zip}`;
        let phoneNumber = doctor[i].practices[0].phones[0].number;
        let website = `<a href="${doctor[i].practices[0].website}">${doctor[i].practices[0].name}</a>`;
        let acceptNewPatients = doctor[i].practices[0].accepts_new_patients;
  
        let rowNumber = i+1;
        $(`#number${rowNumber}`).html(rowNumber);
        $(`#firstName${rowNumber}`).html(firstName);
        $(`#lastName${rowNumber}`).html(lastName);
        $(`#address${rowNumber}`).html(address);
        $(`#phoneNumber${rowNumber}`).html(phoneNumber);
        $(`#website${rowNumber}`).html(website);
        $(`#acceptNewPatients${rowNumber}`).html(acceptNewPatients);
      }
    }
  });
});