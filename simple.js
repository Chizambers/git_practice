// This is a simple JavaScript file.
console.log('Welcome to the practice project!')


let month = '';
let travellerName = '';
let location = '';
let rand = 0;

function getRandomNumber(rand){
  return Math.floor(Math.random() * rand);
}

rand = getRandomNumber(8);
console.log(rand);

switch (rand){
  case 0:
    location = 'Bermuda';
    break;
  case 1:
    location = 'Tokyo';
    break;
  case 2:
    location = 'Paris';
    break;
  case 3:
    location = 'London';
    break;
  case 4:
    location = 'Rio De Janeiro';
    break;
  case 5:
    location = 'Rome';
    break;
  case 6:
    location = 'Moscow';
    break;
  case 7:
    location = 'New York';
    break;

}

rand = getRandomNumber(12);
console.log(rand);

switch (rand){
    case 0:
        month = 'January';
        break;
      case 1:
        month = 'February';
        break;
      case 2:
        month = 'March';
        break;
      case 3:
        month = 'April';
        break;
      case 4:
        month = 'May';
        break;
      case 5:
        month = 'June';
        break;
      case 6:
        month = 'July';
        break;
      case 7:
        month = 'August';
        break;
      case 8:
        month = 'September';
        break;
      case 9:
        month = 'October';
        break;
      case 10:
        month = 'November';
        break;
      case 11:
        month = 'December';
        break;
}

rand = getRandomNumber(12);
console.log(rand);

switch (rand){
    case 0:
        travellerName = 'Kyle';
        break;
    case 1:
        travellerName = 'Thomas';
        break;
    case 2:
        travellerName = 'Emma';
        break;
    case 3:
        travellerName = 'Heidi';
        break;
    case 4:
        travellerName = 'Max';
        break;
    case 5:
        travellerName = 'Josh';
        break;
    case 6:
        travellerName = 'Shay';
        break;
    case 7:
        travellerName = 'Nikita';
        break;
    case 8:
        travellerName = 'Ricky';
        break;
    case 9:
        travellerName = 'Valarie';
        break;
    case 10:
        travellerName = 'Mindy';
        break;
    case 11:
        travellerName = 'Angel';
        break;

}


console.log(`In the month of ${month}, ${travellerName} will travel to ${location}!`);
