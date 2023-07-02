const celcius = document.getElementById('celcius');
const fahrenheit = document.getElementById('fahrenheit');

celcius.addEventListener("input", convertCtoF);
fahrenheit.addEventListener("input", convertFtoC);


function convertCtoF(e) {
    const num = e.target.value;
    let result = "";

    if (isNaN(num)) {
        alert('Not a number')
    } else {
        result = ((num*1.8)+32);
    }
    
    fahrenheit.value = result.toFixed(2);
}

function convertFtoC(e) {
    const num1 = e.target.value;
    let result1 = "";

    if (isNaN(num1)) {
        alert('Not a number')
    } else {
        result1 = ((num1-32)*(5/9));
    }
    celcius.value = result1.toFixed(2);
}
