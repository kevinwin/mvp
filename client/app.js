$(function() {
  // event listener on hex
  $('.hex').change(function() {
    console.log($(this).val());
    $('body').css('background-color','#'+$(this).val());
  })

});
