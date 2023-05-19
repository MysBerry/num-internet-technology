const exchangeArray = [2870, 3120, 3500, 2.3, 123, 11];
let currency = 0;
let input = document.getElementById('input');
let output = document.getElementById('output');
let numbers = Array.from(document.getElementsByClassName('number'));
numbers.map( number => {
    number.addEventListener('click', (e) => {
        switch(e.target.innerText) {
            case 'USD':
                currency = 0;
                if(input.innerText) {
                    output.innerText = input.innerText * exchangeArray[currency];
                }
                break;
            case 'EURO':
                currency = 1;
                if(input.innerText) {
                    output.innerText = input.innerText * exchangeArray[currency];
                }
                break;
            case 'POUND':
                currency = 2;
                if(input.innerText) {
                    output.innerText = input.innerText * exchangeArray[currency];
                }
                break;
            case 'WON':
                currency = 3;
                if(input.innerText) {
                    output.innerText = input.innerText * exchangeArray[currency];
                }
                break;
            case 'YEN':
                currency = 4;
                if(input.innerText) {
                    output.innerText = input.innerText * exchangeArray[currency];
                }
                break;
            case 'YUAN':
                currency = 5;
                if(input.innerText) {
                    output.innerText = input.innerText * exchangeArray[currency];
                }
                break;
            case '←':
                if(input.innerText) {
                    input.innerText = input.innerText.slice(0, -1);
                    if(input.innerText) {
                        output.innerText = input.innerText * exchangeArray[currency];
                    }
                    else {
                        output.innerText = input.innerText;
                    }
                }
                break;
            default:
                input.innerText += e.target.innerText;
                output.innerText = input.innerText * exchangeArray[currency];
        }
    });
});