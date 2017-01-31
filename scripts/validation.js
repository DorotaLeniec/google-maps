
var $emailError = $('#email-error');
var $nameError = $('#name-error');
var $surnameError = $('#surname-error');
var $telError = $('#tel-error');
var $postcodeMessage = $('#postcode-message');
var $telMessage = $('#tel-message');

$emailError.hide();
$nameError.hide();
$surnameError.hide();
$telError.hide();
$postcodeMessage.hide();
$telMessage.hide();

function showMessage(){
  $postcodeMessage.show()
}
function showTelMessage(){
  $telMessage.show();
}

$('#tel-input').inputmask('(+48)-999-999-999');
$('#postcode-input').inputmask('99-999');

var error_name = null;
var error_surname = null;
var error_email = null;

$('#name-input').focusout(function(){
  console.log('focusout', error_name)
  check_name();
});

$('#surname-input').focusout(function(){
check_surname();
});

$('#email-input').focusout(function(){
check_email();
});


function check_name(){
  var name_length = $('#name-input').val().length;
  console.log('checkname', error_name)
  if(name_length < 3 || name_length > 20){
    $nameError.html('od 3 do 20 znaków');
    $nameError.show();
    error_name = true;
  }else{
    $nameError.hide();
    error_name = false;
    $('#name-input').css({'border' : 'solid 1px #b6a9a9'})
  }
}

function check_surname(){

  var surname_length = $('#surname-input').val().length;

  if(surname_length < 3){
    $surnameError.html('Nie mniej niż 3 znaki');
    $surnameError.show();
    error_surname = true;
  }else{
    $surnameError.hide();
    error_surname = false;
  }
}

function check_email(){

  var email_pattern = new RegExp(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+[.][a-zA-Z0-9-]{2,10}/);
  var email = $('#email-input').val();
  if(email_pattern.test(email)){
    $emailError.hide();
    error_email = false;
  }else{
    $emailError.html('Niepoprawny adres email')
    $emailError.show()
    error_email = true;
  }

}

$(document).on('click', '#sendButton', function(event){
  checkForm(event)
})

function checkForm(event){
  event.preventDefault()
  console.log(error_email, error_surname, error_name)
  if(error_email === false && error_surname === false && error_name === false){
    $('#holiday-form').css({'display':'none'})
    $('#form-title').html('Dziękujemy za wypełnienie formularza.').css({'color':'green'})
  } else {
    $('#form-warning').html('<p>Wypełnij wymagane pola.</p>').css({'color':'red'})
    $('#name-input, #surname-input, #email-input').css({'border' : 'solid 1px red'})
  }
}
