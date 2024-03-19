function isPalyndrom(){
    //Easy way
    // var input = document.getElementById('input').value;
    // var reverse = input.split('').reverse().join('');
    // var div = document.getElementById('div');
    // if(input==reverse){
    //     alert("isisisi")
    //     div.style.backgroundColor= "green";
    // }
    // else{
    //     div.style.backgroundColor = "red";
    // }

    //=============Hard way

    var input = document.getElementById('input').value;
    var length = input.length;
    var isPalindrome = true;

    for (var i = 0; i < length / 2; i++) {
        if (input[i] !== input[length - 1 - i]) {
            isPalindrome = false;
            break;
        }
    }

    var div = document.getElementById('div');

    // Change background color based on palindrome status
    if (isPalindrome) {
        alert("It's a palindrome!");
        div.style.backgroundColor = "green";
    } else {
        div.style.backgroundColor = "red";
    }
    
}

function decimalToBinary() {
    var decimal = parseInt(document.getElementById('input').value);
    var binary = '';
    
    // Handle the case when the input is 0 separately
    if (decimal === 0) {
        binary = '0';
    } else {
        // Convert decimal to binary
        while (decimal > 0) {
            // Append the remainder of division by 2 to the binary string
            binary = (decimal % 2) + binary;
            // Integer division by 2
            decimal = Math.floor(decimal / 2);
        }
    }

    var div = document.getElementById('div');

    // Change background color based on conversion status
    if (binary !== '') {
        alert("Binary representation: " + binary);
        div.style.backgroundColor = "green";
    } else {
        div.style.backgroundColor = "red";
    }
}

function decimalToHexadecimal() {
    var decimal = parseInt(document.getElementById('input').value);
    var hexadecimal = '';
    var hexDigits = '0123456789ABCDEF';

    // Handle the case when the input is 0 separately
    if (decimal === 0) {
        hexadecimal = '0';
    } else {
        // Convert decimal to hexadecimal
        while (decimal > 0) {
            // Get the remainder of division by 16
            var remainder = decimal % 16;
            // Prepend the corresponding hexadecimal digit
            hexadecimal = hexDigits.charAt(remainder) + hexadecimal;
            // Integer division by 16
            decimal = Math.floor(decimal / 16);
        }
    }

    var div = document.getElementById('div');

    // Change background color based on conversion status
    if (hexadecimal !== '') {
        alert("Hexadecimal representation: " + hexadecimal);
        div.style.backgroundColor = "green";
    } else {
        div.style.backgroundColor = "red";
    }
}

function reset(){
    var decimal = document.getElementById('input');
    var div = document.getElementById('div');
    decimal.value="";
    div.style.backgroundColor="white";
}




