/*
 * Programming Quiz: Laugh (5-4)
 */

var laugh = /* finish the function expression */
  function (num) {
      var ha = "";
      for (i = num; i >= 1; i--) {
      ha += "ha";
      }
    return ha + "!";
  }
console.log(laugh(2));
