function shout(string){
  return string.toUpperCase();
}

function whisper(string){
  return string.toLowerCase();
}

function logShout(string){
  console.log(string.toUpperCase());
}

function logWhisper(string){
  console.log(string.toLowerCase());
}

var uppercase = 'HELLO';
var lowercase = 'hello';
var mixedcase = 'Hi there!';
var love = 'I love you, Grandma.'

function sayHiToGrandma(string){

if(string.toUpperCase() === uppercase  ){
  return "YES INDEED!"

  }else if(string == love ){
    return "I love you, too."
  }else{
    return "I can\'t hear you!";
  }
}
