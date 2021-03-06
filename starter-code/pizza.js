// Write your Pizza Builder JavaScript in this file.
function btn (btnClass, ingredient, index) {
  var listElement = '.panel.price li:nth-child(' + index + ')';
  $(btnClass).click(function () {
    if ($(this).hasClass('active')) {
      $(ingredient).css('display', 'none');
      $(listElement).css('display', 'none');
    } else {
      $(ingredient).css('display', 'block');
      $(listElement).css('display', 'block');
    }
    $(this).toggleClass('active');
    updatePrice();
  });
}
function updatePrice() {
  var sumPrices = 0;
  $('.price li').each(function() {
    var texto = $(this).text();
    var itemPrice = texto.substring(1,2);
    itemPrice = parseInt(itemPrice);
    console.log(texto, itemPrice);
    if ($(this).css('display') != 'none'){
      sumPrices = sumPrices + itemPrice;
    }
  });
  sumPrices = sumPrices + 10;
  $('.price strong').html("$" + sumPrices);
}
function init() {
  //Iteration 1: Add and remove toppings
  var pepperonnis = $('.pep');
  var peppers = $('.green-pepper');
  var mushrooms = $('.mushroom');
  $('.green-pepper, .mushroom, .pep').css('display', 'none');
  $('.btn-pepperonni').click(function (){
    pepperonnis.css('display', 'block');
  });
  $('.btn-mushrooms').click(function (){
    mushrooms.css('display', 'block');
  });
  $('.btn-green-peppers').click(function (){
    peppers.css('display', 'block');
  });
  // Iteration 2: Sauce and crust options
  $('.btn-sauce').click(function () {
    if ($(this).hasClass('active')) {
      $('.sauce').removeClass('sauce-white');
      $('.panel.price li:nth-child(4)').css('display', 'none');
    } else {
      $('.sauce').addClass('sauce-white');
      $('.panel.price li:nth-child(4)').css('display', 'block');
    }
    $(this).toggleClass('active');
    updatePrice();
  });
  $('.btn-crust').click(function () {
    if ($(this).hasClass('active')) {
      $('.crust').removeClass('crust-gluten-free');
      $('.panel.price li:nth-child(5)').css('display', 'none');
    } else {
      $('.crust').addClass('crust-gluten-free');
      $('.panel.price li:nth-child(5)').css('display', 'block');
    }
    $(this).toggleClass('active');
    updatePrice();
  });
  // Iteration 3: Change the buttons' state
  btn('.btn-pepperonni', '.pep', 1);
  btn('.btn-mushrooms', '.mushroom', 2);
  btn('.btn-green-peppers', '.green-pepper', 3);
  $('.btn-mushrooms, .btn-pepperonni, .btn-green-peppers').removeClass('active');
  $('.panel.price li:nth-child(-n+3)').css('display', 'none');
  updatePrice();
}
$(document).ready(init);
