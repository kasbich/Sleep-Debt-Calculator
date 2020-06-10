const getSleepHours = day => {
  switch(day) {
    case 'monday':
      return 6;
    case 'tuesday':
      return 6;
    case 'wednesday':
      return 7;
    case 'thursday':
      return 7;
    case 'friday':
      return 7;
    case 'saturday':
      return 9;
    case 'sunday':
      return 9;
  }
};

const getActualSleepHours = () => getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');

const getIdealSleepHours = () => {
  const idealHours = 8;
  return idealHours * 7;
}

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();
    if (actualSleepHours === idealSleepHours) {
      console.log('You got the perfect amount of sleep!');
    } else if (actualSleepHours > idealSleepHours) {
      console.log('You got more sleep than needed.');
    } else if (actualSleepHours < idealSleepHours) {
      console.log('You got ' + (idealSleepHours - actualSleepHours) + ' hours less sleep than you needed this week. Get some rest!');
    }
}

calculateSleepDebt();


