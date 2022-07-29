let password = "stringofyourchoice"
const regex = /[a-zA-Z]/
const numbers = /[0-9]/
if (password.length > 10 && (regex.test(password) === true) && (numbers.test(password))){console.log('success Message')}
else {console.log('failure message')}

