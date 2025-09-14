// task 1
function f_sum(...numbers) {
    let summa = 0;
    for (let i of numbers) {
        summa+=i;
    }
    console.log("summa="+ " " +summa);    
}

 f_sum(10, 50, 6, 7, 8, 11, 6, 3, 9);


 // task 2
let user = {
    firstname: 'giorgi',
    lastname: 'saakadze',
    isloggedin: true 
};

function f_user (someone) {
    if (someone.isloggedin === true) {
        return someone.firstname+ " " + someone.lastname;  
    } else {
        return false 
    }    
 };
 console.log(f_user(user));



// task 3
 function f_max(array) {
    let max = array[0]; 
    for (let i = 1; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i]; 
        }
    }
    return max;
};
console.log("max="+ " " +f_max([500, 56, 6, 78, 1, 16, 23, 19])); 



// task 4
function f_number(number) {
    if (number % 2 === 1) { 
        return "this number is odd";
    } else {
        return "this number is even";
    }
}
console.log(15+ "  " +f_number(15)); 
console.log(44+ "  " +f_number(44));







