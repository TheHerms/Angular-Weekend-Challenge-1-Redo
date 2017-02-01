var app = angular.module('weekendApp', []);//this will reference the ngapp in index.html

app.controller('WeekendController', function(){
 console.log('WeekendController loaded');

var weekend = this;
 console.log(this);

weekend.employees = [];
weekend.totalSalary = [0];
weekend.monthlyExpenditures = [0];

weekend.addEmployee = function (firstName, lastName, idNumber, jobTitle, employeeSalary) {
   weekend.employees.push({name:firstName, lastname:lastName, id:idNumber, job:jobTitle, salary:employeeSalary });
   weekend.totalSalary[0] += Number(employeeSalary);
   weekend.monthlyExpenditures = [(weekend.totalSalary[0] / 12).toFixed(2)];


 };

});
