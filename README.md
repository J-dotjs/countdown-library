# qol-date-functions
Uses a Date object to get a certain amount of time specified from the date, converts date to unix timestamp, and converts date into seconds, min, hours, etc.

## Table of Contents
- [Installation](#installation)
- [Initialization](#initialization)
- [Usage](#usage)
    - [Add time to Date object](#add-time-to-date-object)
    - [Convert date object](#convert-date-object)
- [Planned Features](#planned-features)
- [License](#license)
- [Author](#author)
- [Disclaimer](#disclaimer)

## Installation

npm i qol-date-functions

## Initialization
```node.js
const timeFunctions = require('qol-date-functions');
```

## Usage
#### Add time to Date object
```node.js
timeFunctions.addSeconds(date, 10); // adds 10 seconds to the date object
timeFunctions.addMinutes(date, 10); // adds 10 minutes to the date object
timeFunctions.addHours(date, 10); // adds 10 hours to the date object
timeFunctions.addDays(date, 10); // adds 10 days to the date object
timeFunctions.addWeeks(date, 10); // adds 10 weeks to the date object
timeFunctions.addMonths(date, 10); // adds 10 months to the date object
timeFunctions.addYears(date, 10); // adds 10 years to the date object
```
#### Convert date object

```node.js
timeFunctions.toUnix(date); // converts the date object to unix timestamp

timeFunctions.convertToSeconds(date); // converts the date object to seconds
timeFunctions.convertToMinutes(date); // converts the date object to minutes
timeFunctions.convertToHours(date); // converts the date object to hours
timeFunctions.convertToDays(date); // converts the date object to days
timeFunctions.convertToWeeks(date); // converts the date object to weeks
```

## Planned Features
- [ ] Subtract from date object instead of add to it

## License
[MIT](https://choosealicense.com/licenses/mit/)

## Author
[J-dotJS](https://github.com/J-dotjs)
