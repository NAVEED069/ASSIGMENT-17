let firstName = prompt("Enter your first name:");
let lastName = prompt("Enter your last name:");
let fullName = firstName + " " + lastName;
alert("Hello " + fullName);

let mobile = prompt("Enter your favourite mobile phone model:");
document.write("Your input: " + mobile + "<br>");
document.write("Length of input: " + mobile.length + "<br><br>");

let word1 = "Pakistani";
document.write("String: " + word1 + "<br>");
document.write("Index of 'n': " + word1.indexOf("n") + "<br><br>");

let word2 = "Hello World";
document.write("String: " + word2 + "<br>");
document.write("Last index of 'l': " + word2.lastIndexOf("l") + "<br><br>");

document.write("String: Pakistani<br>");
document.write("Character at index 3: " + word1.charAt(3) + "<br><br>");

let fullName2 = firstName.concat(" ", lastName);
alert("Hello again (concat method): " + fullName2);

let city = "Hyderabad";
let newCity = city.replace("Hyder", "Islam");
document.write("City: " + city + "<br>");
document.write("After replacement: " + newCity + "<br><br>");

let message = "Ali and Sami are best friends. They play cricket and football and study together.";
let replacedMsg = message.replace(/and/g, "&");
document.write("Original Message: " + message + "<br>");
document.write("Updated Message: " + replacedMsg + "<br><br>");

let strNum = "472";
let num = Number(strNum);
document.write("Value: " + num + "<br>");
document.write("Type: " + typeof num + "<br><br>");

let userInput = prompt("Enter any text:");
document.write("User Input: " + userInput + "<br>");
document.write("Uppercase: " + userInput.toUpperCase() + "<br><br>");

let userInput2 = prompt("Enter text for Title Case:");
let firstChar = userInput2.slice(0,1).toUpperCase();
let restChars = userInput2.slice(1).toLowerCase();
let titleCase = firstChar + restChars;
document.write("User Input: " + userInput2 + "<br>");
document.write("Title Case: " + titleCase + "<br><br>");

let num2 = 35.36;
let numStr = num2.toString().replace(".", "");
document.write("Original number: " + num2 + "<br>");
document.write("After removing dot: " + numStr + "<br><br>");

let username = prompt("Enter a username:");
let invalid = /[@.,!]/;

if (invalid.test(username)) {
    alert("Invalid username! Please avoid special characters @ . , !");
} else {
    alert("Username accepted: " + username);
}

let A = ["cake", "apple pie", "cookie", "chips", "patties"];
let searchItem = prompt("Welcome to ABC Bakery. What do you want to order?")
                    .toLowerCase();

let found = false;
for (let i=0; i<A.length; i++) {
    if (A[i].toLowerCase() === searchItem) {
        found = true;
        break;
    }
}
if (found) {
    alert(searchItem + " is available in our bakery.");
} else {
    alert("Sorry, " + searchItem + " is not available.");
}

let password = prompt("Enter your password:");

if (!isNaN(password.charAt(0))) {
    alert("Password should not start with a number!");
} else if (password.length < 6) {
    alert("Password must be at least 6 characters long!");
} else if (!/[a-zA-Z]/.test(password) || !/[0-9]/.test(password)) {
    alert("Password must contain letters and numbers!");
} else {
    alert("Password accepted!");
}

let university = "University of Karachi";
let uniArr = university.split(" ");
document.write("String to array:<br>");
for (let i=0; i<uniArr.length; i++) {
    document.write(uniArr[i] + "<br>");
}
document.write("<br>");

let userInput3 = prompt("Enter text:");
let lastChar = userInput3.charAt(userInput3.length - 1);
document.write("User Input: " + userInput3 + "<br>");
document.write("Last character: " + lastChar + "<br><br>");

let sentence = "The quick brown fox jumps over the lazy dog";
let lowerSentence = sentence.toLowerCase();
let count = (lowerSentence.match(/the/g) || []).length;

document.write("Sentence: " + sentence + "<br>");
document.write("Occurrences of 'the': " + count + "<br><br>");
