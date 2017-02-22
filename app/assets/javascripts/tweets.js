// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
$(document).ready(function(){

  $('#new_tweet').on('submit', function(event){
    // alert('yes!');
    event.preventDefault();
    $.ajax({
      url: $(this).attr('action'),
      method: $(this).attr('method'),
      dataType: 'json',
      data: $(this).serialize()

    }).done(function(responseData){
      console.log(responseData);
      console.log("sucess");
      $('.tweet').prepend(responseData);
    }).fail(function(responseData){
      console.log("fail");
    }).always(function(responseData){
      console.log("alway to happen");
    });

  });

});
