var person = { firstName: 'Kenny', lastName: 'Park', hobby: 'Tennis' };
console.log(person);
var fullName = person.firstName + ' ' + person.lastName;
console.log("The person's name is:", fullName + '.');
person.job = 'Student';
console.log("The person's current job is:", person.job + '.');
person.previousJob = 'Teacher';
console.log("The person's previous job is:", person.previousJob + '.');
console.log('The complete person object:', person);
