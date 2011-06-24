var mycat = function(left, right) {
  var result = "";
  if (left == undefined) {
    result = right;
  }
  else if(right == null)  {
    result = left;
  }
  else {
    result = left + right;
  }
  return result;
};
