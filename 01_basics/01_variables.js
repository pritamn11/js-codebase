const accountId = 1456
let accountEmail = "pritam@google.com"
var accountPassword = "1234"
var accountCity = "Mumbai"   /*avoid declaring variable using var*/
let accountState


/*
prefer not to use var, because of issue in block scope and functional scope

Recommendation :
- Use `const` most of the time.
- If you know you'll need to change the value later, use `let`.
- Try not to use `var` in modern JavaScript; it's not used as often.

*/


console.log(accountId)
console.table([accountId, accountCity, accountEmail, accountPassword, accountState])
