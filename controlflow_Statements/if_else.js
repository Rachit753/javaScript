function getGrade(marks) {
  if (marks < 0 || marks > 100) return "enter valid number";
  else if (marks < 40) return "fail";
  else if (marks <= 50) return "E";
  else if (marks <= 60) return "D";
  else if (marks <= 70) return "C";
  else if (marks <= 80) return "B";
  else if (marks <= 90) return "A";
  else return "O";
}

function login_check(isLoggedin, isAdmin) {
    
    if (isLoggedin == false) return "first loggedin";
    else if (isLoggedin == true && isAdmin == true) return "Hello Admin";
    else return "Hello user";
}

console.log(getGrade(40));
console.log(login_check(true, true));
//Early return statement will only be used in function in js.