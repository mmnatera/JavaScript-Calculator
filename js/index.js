$(document).ready(function() {
  var result = 0;
  var prevEntry = 0;
  var operation = null;
  var currentEntry = [null];
  updateScreen(result);
  
  $(".btn").on("click", function(evt) {
    var buttonPressed = $(this).html();
    console.log(buttonPressed);
    
    if (buttonPressed === "AC") {
      result = 0;
      currentEntry = "0";
    } 
    else if (buttonPressed === "+/-") {
      currentEntry *= -1;
    } 
    else if (buttonPressed === ".") {
      currentEntry += ".";
    } 
    else if (isNumber(buttonPressed)) {
      if (currentEntry === "0") currentEntry = buttonPressed;
      else currentEntry = currentEntry + buttonPressed;
    } 
    
    else if (isOperator(buttonPressed)) {
      prevEntry = parseFloat(currentEntry);
      operation = buttonPressed;
      currentEntry = "";
    
    } 
    else if(buttonPressed === "%") {
      currentEntry = currentEntry / 100;
      
    } 
    else if (buttonPressed === "=") {
      currentEntry = operate(prevEntry, currentEntry, operation);
      operation = null;
    }
    
    updateScreen(currentEntry);
  });
});

updateScreen = function(displayValue) {
  var displayValue = displayValue.toString();
  $("#display").html(displayValue.substring(0, 10));
};

isNumber = function(value) {
  return !isNaN(value);
}

isOperator = function(value) {
  return value === '/' || value === '*' || value === '+' || value === '-';
};

operate = function(a, b, operation) {
  a = parseFloat(a);
  b = parseFloat(b);
  console.log(a, b, operation);
  if (operation === '+') return a + b;
  if (operation === '-') return a - b;
  if (operation === '*') return a * b;
  if (operation === '/') return a / b;
}







// THIS SECTION WAS NOT REQUIRED BY FCC BUT WANTED TO LEARN ANYWAY FOR FUN


//adding keyboard input functionality
document.onkeydown = function(event) {

	var key_press = String.fromCharCode(event.keyCode);
	var key_code = event.keyCode;
	var input = document.querySelector("#display");
	var inputVal = input.innerHTML;
	var btnVal = this.innerHTML;
  var lastChar = inputVal[inputVal.length - 1];
  var equation = inputVal;
	// Using regex to replace all instances of x, ÷, ^ with *, / and ** respectively. 
	equation = equation.replace(/\*/g, "*").replace(/÷/g, "/").replace(/total/g, "=");

 // Target each keypress and update the input screen
 
    if(key_press==1) {
      input.innerHTML += key_press;
  }
    if(key_press==2) {
      input.innerHTML += key_press; 
  }
    if(key_press==3 || key_code == 32) {
      input.innerHTML += key_press; 
  }
    if(key_press==4) {
      input.innerHTML += key_press; 
  }
    if(key_press==5) {
      input.innerHTML += key_press; 
  }
    if(key_press==6 && event.shiftKey == false) {
      input.innerHTML += key_press; 
  }
    if(key_press==7) {
      input.innerHTML += key_press; 
  }
    if(key_press==8 && event.shiftKey == false) {
      input.innerHTML += key_press; 
  }
    if(key_press==9) {
      input.innerHTML += key_press; 
  }
    if(key_press==0) {
      input.innerHTML += key_press;
  }
    
  
  
  // Cature operators and prevent from addint two consecutuve operators
  
    if ((inputVal != "" && operators.indexOf(lastChar) == -1 && key_code == 187 && event.shiftKey) || (key_code == 107) || (key_code == 61 && event.shiftKey)) {
      document.querySelector("#display").innerHTML += "+";
  }
    if ((inputVal != "" && operators.indexOf(lastChar) == -1 && key_code == 189 && event.shiftKey) || (inputVal != "" && operators.indexOf(lastChar) == -1 && key_code == 107)) {
      document.querySelector("#display").innerHTML += "-";
  }
    if ((inputVal != "" && operators.indexOf(lastChar) == -1 && key_code == 56 && event.shiftKey) || (inputVal != "" && operators.indexOf(lastChar) == -1 && key_code == 106)) {
      document.querySelector("#display").innerHTML += "*";
  }
    if ((inputVal != "" && operators.indexOf(lastChar) == -1 && key_code == 191) || (inputVal != "" && operators.indexOf(lastChar) == -1 && key_code == 111)) {
      document.querySelector("#display").innerHTML += "÷";
  }
   
    if(key_code==13 || key_code==187 && event.shiftKey == false) {
      input.innerHTML = eval(equation);
      //reset decimal added flag
      decimalAdded =false;
  }
    if(key_code==8 || key_code==46) {
			input.innerHTML = "";
			decimalAdded =false;
  }
}