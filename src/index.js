var $ = require ('jquery');


console.log($('form'));
console.log("it's working!!!");

$('form').submit(function(event){
    var userEmail = $('#email').val();
    console.log(userEmail);
    event.preventDefault();
    $.ajax({
      url: '/',
      type: 'POST',
      data: {
        email: userEmail
      },
      success: function(response){
        console.log(response);
      }
    });
});
