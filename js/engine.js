var gb = ["3GB", "6GB", "15GB", "30GB"];
var prices = ['£15', '£17', '£22', '£27'];

$('.gb-button').click(function(event){
  var gb_price = parseInt(this.getAttribute("value"));
   console.log(gb_price);
   return gb_price;
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
 var billing_frequency = parseInt(this.getAttribute("data-billing"));
 console.log(billing_frequency);
 return billing_frequency;
 console.log(gb_price);
});

function calc_final_price_lw (){
  var final_price_lw = gb_price * billing_frequency;
  console.log(final_price_lw);
  return final_price_lw;
}


//
// var gb = prices();
// for (i=0; i<3; i++){
// gb[i] = prices[i]
// return gb;
// }
