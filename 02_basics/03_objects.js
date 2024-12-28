const mySym = Symbol("key1")

const JsUser = {
    name : "Jay",
    "full name" : "Jay Thanki",
    [mySym] : "mykey1",
    age : 21,
    location : "Ahmedabad",
    email : "jay@google.com",
    isLoggedIn : false,
    lastLognDay : ["Monday", "Saturday"]
}

console.log(JsUser[mySym])

JsUser.email = "jay@microsoft.com"
console.log(JsUser)

JsUser.greeting = function(){
    console.log(`Hello Js User, ${this.name}`)
}
