/*
 * Programming Quiz: Laugh it Off 2 (5-2)
 */

// declare your function
// then, call it!
// print the output with console.log

function laugh(num) {
    var ha = "";
    for (var x = num; x > 0; x--){
        ha += "ha";
    }
    return ha + "!";
}
console.log(laugh(3));
