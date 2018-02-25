$('.option').on('click', function () {
  var $this = $(this);
  
  $('.react').removeClass('react-fade-in');
  $('.emotion').removeClass('emotion-selected');
  $this.find('.react').addClass('react-fade-in');
  $this.find('.emotion').addClass('emotion-selected');
    
});
$('#q-3 .option').on('click', function() {
  var rank3 = $(this).attr('data-value');
  $('.answer-submit').on('click', function() {
    sessionStorage.setItem('rank3', rank3);
    $('#q-3').addClass('hide');
    $('.summary').removeClass('hide');
});
});
$('#q-2 .option').on('click', function() {
  var rank2 = $(this).attr('data-value');
  
  $('.answer-submit').on('click', function() {
    sessionStorage.setItem('rank2', rank2);
    $('#q-3').removeClass('hide');
    $('#q-2').addClass('hide');
  });
});
$('#q-1 .option').on('click', function() {
  var rank1 = $(this).attr('data-value');
  
  $('.answer-submit').on('click', function() {
    sessionStorage.setItem('rank1', rank1);
    $('#q-2').removeClass('hide');
    $('#q-1').addClass('hide');
  });
});