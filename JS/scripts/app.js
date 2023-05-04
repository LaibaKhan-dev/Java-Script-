// DAY 01 - 5 APRIL

// alert("Welcome To Our World")

// var user = prompt('Put Your Email', 'email')
// alert("Successfully added")

// var arr= [ 'hello' , 'hi']
// document.write(arr)
// console.log(arr)

// var banoQabil = "web Developement"
// document.write(banoQabil)
//  console.log (banoQabil) 

//  var BanoQabil = "Web Developement"
// document.write(BanoQabil)
//  console.log (BanoQabil)

//  var bano_Qabil = "web_Developement"
// document.write(bano_Qabil)
//  console.log (bano_Qabil)

// var num1 =+ prompt("Num 1 Please")
// var num2 =+ prompt("Num 2 Please")
// document.write(popularNumber)
// console.log(num1+num2)


// var popularNumber = 12 - 24;
// document.write(popularNumber)
// console.log(12-24)

// var num = 10;
// var popularNumber = num + 200;
// document.write(popularNumber)
// console.log(num + 200)

// var popularNumber = 3 * 12;
// document.write(popularNumber)
// console.log(3 * 12)

// var num = 10;
// var anotherNum = 1;
// var popularNumber = num + anotherNum;
// document.write(popularNumber)
// console.log(num + anotherNum)

// var num = 1;
// var newNum = num++
// document.write(newNum)
// console.log(num ++)

// var num = 1;
// var newNum = ++num
// document.write(newNum)
// console.log(++num)

// var num = 1;
// var newNum = num--
// document.write(newNum)
// console.log(num--)

// var num = 1;
// var newNum = --num
// document.write(newNum)
// console.log(--num)

// var totalCost = 1 + 3 * 4;
// var totalCost = 1 + (3 * 4);
// document.write(totalCost)
// console.log(1 + (3 * 4))


// var totalCost = (1 + 3) * 4;
// document.write(totalCost)
// console.log((1 + 3) * 4)


// resultOfComputation = ((2 * 4) * 4) + 2;
// document.write(resultOfComputation)
// console.log(((2 * 4) * 4) + 2)


// resultOfComputation = (2 * 4) * (4 + 2)
// document.write(resultOfComputation)
// console.log((2 * 4) * (4 + 2))


// var message = "Thanks, ";
// var userName = "Susan";
// var banger = "!";
// var customMess = message + userName + banger;
// alert(customMess);

// var question = "Your species?";
// var defaultAnswer = "human";
// var spec = prompt(question, defaultAnswer);

// var numberOfCats = prompt("How many cats?");
// var tooManyCats = numberOfCats + 1;




// DAY 02 - 6 APRIL TASK NO.1

// var zakatPercentage = 0.0254;
// var userInput = Number( prompt("Enter a number"));
// var result = (zakatPercentage) * (userInput);
// alert ("Your zakat value is " + result)




// DAY 02 - 6 APRIL TASK NO.2

// var familyMembers = parseInt(prompt("Enter the total number of family members:"));

// var fitrahMethod = prompt("Choose a fitrah method: \n1. Gandum - 250Rs per person \n2. Jau - 450Rs per person \n3. Khajoor - 2100Rs per person \n4. Kishmish - 2800Rs per person");

// var fitrahPrices;

// if (fitrahMethod === "1") {
//     fitrahPrices = 250;
// } else if (fitrahMethod === "2") {
//     fitrahPrices = 450;
// } else if (fitrahMethod === "3") {
//     fitrahPrices = 2100;
// } else if (fitrahMethod === "4") {               
//     fitrahPrices = 2800;
// }

// else {
//     alert("Invalid input. please Choose valid fitrah method.");
// }

// var fitrahAmount = familyMembers * fitrahPrices;

// alert("The fitrah amount for " + familyMembers + " family members using the " + fitrahMethod + " method is Rs" + fitrahAmount + ".");




// DAY 03 - 12 APRIL Task NO.3

var SecretNumber = +prompt("Guess the secret number between (1 and 10)");

if (SecretNumber == 6) {
alert("Congratulations! You guessed the secret number");
}

else if(SecretNumber <= 6){
    alert("Your guess is too closed"); 
}

else {
    alert("guess again"); 
} 





// DAY 03 - 12 APRIL Task NO.4

// var user = prompt("Enter Your Name");
// console.log(user);
// var letter = user.charAt(0);
// console.log(letter);
// console.log(letter.toUpperCase());
// var rem = user.slice(1);
// console.log(rem);
// console.log(rem.toLowerCase());
// var caps = letter.toUpperCase() + rem.toLowerCase();
// console.log(caps);
// alert(caps)




// DAY 03 - 12 APRIL Task NO.5

// var contactNumber = [];
// var contactName = [];

// for (var i = 0; i < 3; i++) {
//   var number = prompt("Enter a contact number:");
//   var name = prompt("Enter a contact name:");
//   contactNumber.push(number);
//   contactName.push(name);
// }

// for (var i = 0; i < contactNumber.length; i++)
// {
//   console.log(`Contact ${i+1}: ${contactNumber[i]} (${contactName[i]})`);
//   alert(`Contact ${i+1}: ${contactNumber[i]} (${contactName[i]})`);
// }



// DAY 03 - 12 APRIL Task NO.6


// var products = ["Mango", "Apple", "Banana", "Orange", "Grapes", "Pineapple", "Watermelon", "Peach"];


// var userInput = parseInt(prompt(`Enter the position of the item you want to remove (1 - ${products.length}):`));

// var removedItem = products.splice(userInput - 1, 1);

// console.log(`The removed item is: ${removedItem}`);
// alert(`The removed item is: ${removedItem}`);

// console.log(`The remaining items in the array are: ${products}`);
// alert(`The remaining items in the array are: ${products}`);

// console.log(`Total number of items remaining: ${products.length}`);
// alert(`Total number of items remaining: ${products.length}`);





// DAY 03 - 12 APRIL Task NO.7

// var nationality = prompt("Write down your nationality");
// var age = parseInt(prompt("Your age please"));
// var gender = prompt("Your Gender please");

// if( nationality === 'Pakistani' || nationality === 'Indian'){
//     console.log("You are eligible to vote");

//     if( age>= 18 && gender === 'male'){
//         console.logs("You are eligible to vote");
//     }
//     else if( age>= 18 && gender === 'female' ){
//         console.log("You are eligible to vote");
//     }
// }
// else{
//     console.log("You are not eligible to vote");
// }


                                                                                 

// DAY 03 - 12 APRIL Task NO.8
// var WorldcupTeam = ["Player1", "Player01",  "Player02",  "Player03",  "Player04",  "Player05",  "Player06",  "Player07",  "Player08",  "Player09",  "Player10",  "Player12",  "Player13",  "Player14",  "Player15", ];

// var FinalTeam = WorldcupTeam.slice(2,13)

// console.log(WorldcupTeam)
// console.log(FinalTeam)

