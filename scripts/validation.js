
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

var error_name = false;
var error_surname = false;
var error_email = false;

$('#name-input').focusout(function(){
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

  if(name_length < 3 || name_length > 20){
    $nameError.html('od 3 do 20 znaków');
    $nameError.show();
    error_name = true;
  }else{
    $nameError.hide();
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
  }
}

function check_email(){

  var email_pattern = new RegExp(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+[.][a-zA-Z0-9-]{2,10}/);
  var email = $('#email-input').val();
  if(email_pattern.test(email)){
    $emailError.hide()
  }else{
    $emailError.html('Niepoprawny adres email')
    $emailError.show()
    error_email = true;
  }

}
