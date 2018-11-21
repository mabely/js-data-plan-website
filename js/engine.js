// var gb_lw = ["3GB", "6GB", "15GB", "30GB"];
// var prices_lw = ['£15', '£17', '£22', '£27'];
var gb_price = 0;
var final_price_lw = 0;
var billing_frequency = 0;

$('.gb-button').click(function(event){
   gb_price = parseInt(this.getAttribute("value"));
   console.log("GB price " + gb_price);
});

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

 $('.pay-frequency-button').click(function(event){
 billing_frequency = parseInt(this.getAttribute("data-billing"));
 console.log("Billing freq " + billing_frequency);
 calc_final_price_lw();
});

function calc_final_price_lw(){
  final_price_lw = gb_price * billing_frequency;
  console.log("Final " + final_price_lw);
    $('#final-price').text(final_price_lw);
}


//
// var gb = prices();
// for (i=0; i<3; i++){
// gb[i] = prices[i]
// return gb;
// }
