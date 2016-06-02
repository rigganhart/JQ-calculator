



// click on syntax and this syntax from nathan's repository from in class demo
$("button").on('click', function(event) {
  event.preventDefault();
  var symbol=$(this).attr("value");
  var numOneStr = $('input[name=num_one]').val();
  var numTwoStr = $('input[name=num_two]').val();
  var numOneStrToInt = Number($(numOneStr));


  var answer = eval(numOneStr + symbol + numTwoStr);

  console.log(typeof numOneStrToInt);

  $('input[name=answer]').val(answer);

});
