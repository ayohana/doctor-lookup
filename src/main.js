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
      console.log(response);
      let firstName = response.data[0].profile.first_name;
      let lastName = response.data[0].profile.last_name;
      let practiceAddress = response.data[0].practices[0].visit_address;
      let address = `${practiceAddress.street}, ${practiceAddress.city} ${practiceAddress.state} ${practiceAddress.zip}`;
      let phoneNumber = response.data[0].practices[0].phones[0].number;
      let website = `<a href="${response.data[0].practices[0].website}">${response.data[0].practices[0].name}</a>`;
      let acceptNewPatients = response.data[0].practices[0].accepts_new_patients;

      $("#firstName1").html(firstName);
      $("#lastName1").html(lastName);
      $("#address1").html(address);
      $("#phoneNumber1").html(phoneNumber);
      $("#website1").html(website);
      $("#acceptNewPatients1").html(acceptNewPatients);
    }
  });
});


// console.log(response.data[0].specialties[0].name); // To Add specialties