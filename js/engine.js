// var gb_lw = ["3GB", "6GB", "15GB", "30GB"];
// var prices_lw = ['£15', '£17', '£22', '£27'];
var gb_price = 0;
var final_price_lw = 0;
var billing_frequency = 0;
var data_mins = 0;
var final_price_c = 0;
var f_increment = 0;
var f_inc_math = 0;
var calc_sum_f = 0;

// hide price
$('.final-price-block').hide();

$('.lw-gb-button').click(function(event){
  // hide price
  $('.final-price-block').hide();
  $('.lw-gb-button').css('background-color', '#C3D677');
   gb_price = parseInt(this.getAttribute("value"));
   $(this).css('background-color', '#94AB34');
   console.log("GB price " + gb_price);
});

 $('.lw-pay-frequency-button').click(function(event){
 billing_frequency = parseInt(this.getAttribute("data-billing"));
 console.log("Billing freq " + billing_frequency);
 calc_final_price_lw();
 // calc_final_price_c();
});

function calc_final_price_lw(){
  final_price_lw = gb_price * billing_frequency;
  console.log("LW final price " + final_price_lw);
    $('#final-price-lw').text(final_price_lw);
    //show price
    $(".final-price-block").show();
}

//CHATTERBOX STARTES HERE:
$('.c-gb-button').click(function(event){
  // hide price
  $('.final-price-block').hide();
  $('.c-gb-button').css('background-color', '#C3D677');
  $('.mins-button').css('background-color', '#C3D677');
    $('.c-pay-frequency-button').css('background-color', '#C3D677');
  gb_price = parseInt(this.getAttribute("value"));
  $(this).css('background-color', '#94AB34');
  console.log("GB price " + gb_price);
});

$('.mins-button').click(function(event){
  // hide price
  $('.final-price-block').hide();
  $('.mins-button').css('background-color', '#C3D677');
  // $('.c-gb-button').css('background-color', '#C3D677');
  $('.c-pay-frequency-button').css('background-color', '#C3D677');
  data_mins = parseInt(this.getAttribute("data-mins"));
  $(this).css('background-color', '#94AB34');
  console.log('Mins price ' + data_mins);
});

$('.c-pay-frequency-button').click(function(event){
  $('.c-pay-frequency-button').css('background-color', '#C3D677');
  billing_frequency = parseInt(this.getAttribute("data-billing"));
  $(this).css('background-color', '#94AB34');
  console.log("Billing freq " + billing_frequency);
  calc_final_price_c();
});

function calc_final_price_c(){
  final_price_c = (gb_price + data_mins) * billing_frequency;
  console.log('C final price ' + final_price_c);
  $('#final-price-c').text(final_price_c);
  //show price
  $('.final-price-block').show();
}


//FAMILY STARTS HERE
$('.f-gb-button').click(function(event){
  // hide price
  $('.final-price-block').hide();
  $('.f-gb-button').css('background-color', '#C3D677');
  $('.f-sim-button').css('background-color', '#C3D677');
    $('.f-pay-frequency-button').css('background-color', '#C3D677');

  gb_price = parseInt(this.getAttribute("value"));
  $(this).css('background-color', '#94AB34');
  console.log("GB price " + gb_price);
  f_increment = parseInt(this.getAttribute("data-increment"));
  console.log("Increment " + f_increment);
});

$('.f-sim-button').click(function(event){
  // hide price
  $('.final-price-block').hide();
  $('.f-sim-button').css('background-color', '#C3D677');
  // $('.c-gb-button').css('background-color', '#C3D677');
  $('.f-pay-frequency-button').css('background-color', '#C3D677');
  f_inc_math = parseInt(this.getAttribute("data-inc-math"));
  $(this).css('background-color', '#94AB34');
  console.log('Increment math ' + f_inc_math);
  calc_sum_f = (f_increment* f_inc_math) + gb_price;
  console.log('Price before billing option ' + calc_sum_f);
});

$('.f-pay-frequency-button').click(function(event){
  $('.f-pay-frequency-button').css('background-color', '#C3D677');
  billing_frequency = parseInt(this.getAttribute("data-billing"));
  $(this).css('background-color', '#94AB34');
  console.log("Billing freq " + billing_frequency);
  calc_final_price_f();
});

function calc_final_price_f (){
final_price_f = calc_sum_f * billing_frequency;
console.log('F final price ' + final_price_f);
$('#final-price-f').text(final_price_f);
//show price
$('.final-price-block').show();
}
//
// var gb = prices();
// for (i=0; i<3; i++){
// gb[i] = prices[i]
// return gb;
// }

// function fetchprices(gb_price)
// {
//   if (gb_price == '15'){
//        $('#final-price').text(gb_price);
//    }
//
//   else {
//     // beer = 'dunno';
//     $('#final-price').text('dunno2');
//   }
// }
// END OF CALCULATOR
