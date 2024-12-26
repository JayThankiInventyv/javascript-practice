const accountId = 15345
let accountEmail = "jay@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

//accountId = 2  ***not allowed***

accountEmail = "jay2@google.com"
accountPassword = "54321"
accountCity = "Bengaluru"
console.log(accountId)

/*
Prefer to not use var because of issue in block scope and functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);
