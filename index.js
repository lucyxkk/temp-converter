
function convert(event){
    let num = document.getElementById("celcius").value;
    let result = ((num*1.8)+32);
    document.getElementById("fahrenheit").value = result;
    event.preventDefault();
}


