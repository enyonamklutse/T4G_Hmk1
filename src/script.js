let student_name=prompt("WHAT IS YOUR NAME?")

let student_age=prompt("PLEASE TYPE YOUR AGE?")
let student_email=prompt("WHAT IS YOUR EMAIL?")

if(student_age <= 12){
    alert(`Hi ${student_name}, you are ${student_age} years old and you are too young to register. Sorry😔😔`);
}else if(student_age >=12 && student_age <= 18){
alert(`Hi ${student_name}, you are ${student_age} yaers old and you have limited options to register for. We will keep in touch via your email: ${student_email}👋👋`);
}else if(student_age >= 18){
alert(`Hi ${student_name}, you are ${student_age} years old and you can register for any option of your choosing. We will keep in touch via your email: ${student_email}👋👋`);
}




// let message= alert(`Hi ${student_name}, you are ${student_age} years old and we'll keep in touch via your email: ${student_email}`) 