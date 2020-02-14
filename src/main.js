import 'bootstrap' ; 
import 'bootstrap/dist/css/bootstrap.min.css' ; 
import '../src/styles.css' ;
import $ from 'jquery';
// import { DoctorService } from '../src/doctor-service';
const Handlebars = require("handlebars");

$(document).ready(function(){


  // const template = Handlebars.compile("Name: {{name}}");
  // console.log(template({ name: "Nils" }));

  // var source = document.getElementById("entry-template").innerHTML;
  // var template = Handlebars.compile(source);

  // var context = { title: "My New Post", body: "This is my first post!" };
  // var html = template(context);
  // console.log(html);

  var api_key = process.env.API_KEY; // Get your API key at developer.betterdoctor.com

  var resource_url = 'https://api.betterdoctor.com/2016-03-01/doctors?location=wa-seattle&skip=2&limit=10&user_key=' + api_key;

  $.get(resource_url, function (data) {
    // data: { meta: {<metadata>}, data: {<array[Practice]>} }
    var template = Handlebars.compile(document.getElementById('docs-template').innerHTML);
    document.getElementById('content-placeholder').innerHTML = template(data);
  });

  var conditions_resource_url = 'https://api.betterdoctor.com/2016-03-01/conditions?user_key=' + api_key;
  $.get(conditions_resource_url, function (data) {
      // data: { meta: {<metadata>}, data: {<array[Condition]>} }
      
      var template = Handlebars.compile(document.getElementById('conditions-template').innerHTML);
      document.getElementById('conditions-content-placeholder').innerHTML = template(data);
  });



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