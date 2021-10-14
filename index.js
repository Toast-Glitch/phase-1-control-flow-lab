
function scuberGreetingForFeet(distanceForGreeting) {
  if (distanceForGreeting <= 400) {
    return "This one is on me!"
  }
  else if (distanceForGreeting >= 2000 && distanceForGreeting <= 2500) {
    return "I will gladly take your thirty bucks."
  }
  else if (distanceForGreeting > 2500) {
    return "No can do."
  }
}



function ternaryCheckCity(someCity){
  if (someCity == "NYC") {
    return "Ok, sounds good."
  }
  else if (someCity != "NYC") {
    return "No go."
  }
 return ternaryCheckCity;
}


function switchOnCharmFromTip(tipAmount){
  switch (tipAmount) {
  case 'generous':
    return 'Thank you so much.'
  case 'not as generous':
    return 'Thank you.'
  case 'thanks for everything':
    return 'Bye.'
}
  return switchOnCharmFromTip;
}