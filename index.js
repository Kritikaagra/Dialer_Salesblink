function dialerClick(type, value) {
    let input = document.getElementById('numberBox');
    let input_val = input.innerText;
    if (type == 'dial') {
        input.innerText= input_val + value;
    } else if (type == 'clear') {
        input_val = input_val.substring(0, input_val.length - 1);
        input.innerText = input_val;
    } 
}