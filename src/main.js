import 'bootstrap' ; 
import 'bootstrap/dist/css/bootstrap.min.css' ; 
import '../src/styles.css' ;
import $ from 'jquery';
import { DoctorService } from '../src/doctor-service';

$(document).ready(function(){

  $("form#patientInfo").submit(function(event){
    event.preventDefault();
    let symptom = $("#symptom").val();
    $("#output").text(symptom);

    (async () => {
      let doctorService = new DoctorService();
      const response = await doctorService.getList(symptom);
      displayList(response);
    })();

    const displayList = function(response) {
      console.log(response);
      console.log(response.data[0].profile.first_name);
      console.log(response.data[0].specialties[0].name);
      $("#output").text(symptom);
    }
  });
});