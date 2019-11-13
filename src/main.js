import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
import { Triangle } from './tracker';
// import { checkType } from './tracker';

$(document).ready(function() {
  $('.triangle-form').submit(function(event){
    event.preventDefault();

    var side1t = parseInt($('#input1').val());
    var side2t = parseInt($('#input2').val());
    var side3t = parseInt($('#input3').val());

    var endResult = Triangle(side1t, side2t, side3t);

    $("#result").text(endResult);
    $(".result").show();
  });
});
