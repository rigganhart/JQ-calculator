



//
// found: http://stackoverflow.com/questions/487056/retrieve-button-value-with-jquery from steady_daddy
$("input[type=button]").click(function(){
  var symbol=$(this).attr("value");
  var numOneStr = $('input[name=num_one]').attr("value");
  var numTwoStr = $('input[name=num_one]').attr("value");
  var numOneStrToInt = parseInt($(numOneStr));
  console.log(symbol);
  $('input[name=answer]').attr(numOneStr);

});
