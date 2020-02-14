import 'bootstrap' ; 
import 'bootstrap/dist/css/bootstrap.min.css' ; 
import '../src/styles.css' ;
import $ from 'jquery';
// import { DoctorService } from '../src/doctor-service';
const Handlebars = require("handlebars");

$(document).ready(function(){


  const template = Handlebars.compile("Name: {{name}}");
  console.log(template({ name: "Nils" }));




  // $("form#patientInfo").submit(function(event){
  //   event.preventDefault();
  //   let symptom = $("#symptom").val();
  //   $("#output").text(symptom);

  //   (async () => {
  //     let doctorService = new DoctorService();
  //     const response = await doctorService.getList(symptom);
  //     displayList(response);
  //   })();

  //   const displayList = function(response) {
  //     console.log(response.meta);
  //     $("#output").text(symptom + response.data);
  //   }
  // });
});