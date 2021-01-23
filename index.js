
    let eastWest = [
      '1st Avenue',
      '2nd Avenue',
      '3rd Avenue',
      'Lexington Avenue',
      'Park',
      'Madison Avenue',
      '5th Avenue'
    ];
    
class Driver {
  constructor(name, date) {
    this.name = name;
    this.date = new Date(date);
  }
  
  yearsExperienceFromBeginningOf(year) {
    return (date - year)
  }
  
}

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }
}


