var rate = 0.06;
var shipRate = 20.00; 
var fT = 300;

function update(input)
{
  var pR = $(input).parent().parent();
  var cost = parseFloat(pR.children('.price').text());
  var quantity = $(input).val();
  var price = cost * quantity;  
  pR.children('.prices').each(function () {
    $(this).fadeOut(fT, function() {
      $(this).text(price.toFixed(2));
      recompute();
      $(this).fadeIn(fT);
    });
  });  
}


function validate(){
window.location = "creditCard.html";
}

function removeProduct(button)
{
  var pR = $(button).parent().parent();
  pR.slideUp(fT, function() {
    pR.remove();
    recompute();
  });
}

$('.quantity input').change( function() {
  update(this);
});

$('.removal button').click( function() {
  removeProduct(this);
});

function recompute()
{
  var sT = 0;
  $('.product').each(function () {
    sT += parseFloat($(this).children('.prices').text());
  });
  var tax = sT * rate;
  var shipping = (sT > 0 ? shipRate : 0);
  var total = sT + tax + shipping;
  $('.values').fadeOut(fT, function() {
    $('#subtotal').html(sT.toFixed(2));
    $('#tax').html(tax.toFixed(2));
    $('#shipping').html(shipping.toFixed(2));
    $('#total').html(total.toFixed(2));
    if(total == 0){
      alert ("select at least one item, redirecting you back to the shopping page");
      total=1;
      window.location = "shop.html";
    }else{
      $('.checkout').fadeIn(fT);
    }
    $('.values').fadeIn(fT);
  });
}
