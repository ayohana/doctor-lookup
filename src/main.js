import 'bootstrap' ; 
import 'bootstrap/dist/css/bootstrap.min.css' ; 
import './styles.css' ;
import $ from 'jquery';

$(document).ready(function(){
  $("form#patientInfo").submit(function(event){
    event.preventDefault();
    let inputSymptom = $("#symptom").val();
    $("#output").text(inputSymptom);
  });
});