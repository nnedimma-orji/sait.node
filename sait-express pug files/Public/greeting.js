const greetings = ["Hello", "Good Morning", "Welcome to our page"];
/*function getGreeting()
{
   let rand = Math.floor(Math.random() * greetings.length);
   
   return greetings[rand];
}
  exports.greet = ()=>
  {
    return getGreeting();
};*/
    
exports.greet = function getGreeting()
{
   let rand = Math.floor(Math.random() * greetings.length);
   
   return greetings[rand];
}
  