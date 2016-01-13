$(document).ready(function(){
var age = parseInt(prompt("What is your age?"));

if (age > 17){
  $("#over18").show();
}
else{
  $("#under18").show();
};
});
