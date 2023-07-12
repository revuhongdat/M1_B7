let result = document.getElementById("result1")
let elements = document.getElementsByTagName('td');
let toanHang1 = "";
let toanHang2 = "";
let toanTu = "";
for(let i = 0; i <= elements.length; i++) {
    if(elements[i] != null) {

        elements[i].addEventListener('click', function(){
            switch (elements[i].innerText) {
                case '+':
                    if(toanHang1 === '') {
                        if(toanHang2 === '') {
                            toanHang2 = 0;
                        }
                    } else if(toanHang2 === '') {
                        toanHang2 = toanHang1;
                    } else {
                        toanHang2 = tinh(toanHang1, toanHang2, toanTu);
                        result.innerHTML = toanHang2;
                    }

                    toanTu = '+';
                    toanHang1 = '';
                    break;
                case '-':
                    if(toanHang1 === '') {
                        if(toanHang2 === '') {
                            toanHang2 = 0;
                        }
                    } else if(toanHang2 === '') {
                        toanHang2 = toanHang1;
                    } else {
                        toanHang2 = tinh(toanHang1, toanHang2, toanTu);
                        result.innerHTML = toanHang2;
                    }

                    toanTu = '-';
                    toanHang1 = '';
                    break;
                case 'x':
                    if(toanHang1 === '') {
                        if(toanHang2 === '') {
                            toanHang2 = 0;
                        }
                    } else if(toanHang2 === '') {
                        toanHang2 = toanHang1;
                    } else {
                        toanHang2 = tinh(toanHang1, toanHang2, toanTu);
                        result.innerHTML = toanHang2;
                    }

                    toanTu = 'x';
                    toanHang1 = '';
                    break;
                case '/':
                    if(toanHang1 === '') {
                        if(toanHang2 === '') {
                            toanHang2 = 0;
                        }
                    } else if(toanHang2 === '') {
                        toanHang2 = toanHang1;
                    } else {
                        toanHang2 = tinh(toanHang1, toanHang2, toanTu);
                        result.innerHTML = toanHang2;
                    }
                    toanTu = '/';
                    toanHang1 = '';
                    break;
                case 'x!':
                    if(toanHang2 === '' && toanHang1 === ''){
                        toanHang2 = 1;
                    } else {
                        if (toanHang2 === '') {
                            toanHang2 = toanHang1;
                            toanHang1 = '';
                        }
                        toanHang2 = parseFloat(toanHang2);
                        if(Number.isInteger(toanHang2)) {
                            let giaiThua = 1;
                            for (let i = 1; i < toanHang2; i++){
                                giaiThua *= i;
                            }
                            toanHang2 = giaiThua;
                        } else {
                            result.innerHTML = "Not integer!";
                            break;
                        }
                    }
                    result.innerHTML = toanHang2;
                    break;
                case '=':
                    if(toanTu == '='){
                        break;
                    } else {
                        if(toanHang1 == ''){
                            toanHang1 = toanHang2;
                        }
                        toanHang1 = tinh(toanHang1, toanHang2, toanTu);
                        result.innerHTML = toanHang1;
                        toanHang2 = '';
                        toanTu = '=';
                    }
                    break;
                case '.':
                    if(toanHang1 === '') {
                        toanHang1 = '0.'
                        result.innerHTML = toanHang1;
                    } else {
                        if(toanHang1.includes('.')) {
                            toanHang1 += elements[i].innerText;
                        } else {
                            toanHang1 = toanHang1 + '.';
                        }
                        result.innerHTML = toanHang1;
                    }
                    break
                case '%':
                    if(toanHang1 === '') {
                        if(toanHang2 === '') {
                            toanHang2 = 0;
                        }
                    } else if(toanHang2 === '') {
                        toanHang2 = toanHang1;
                    } else {
                        toanHang2 = tinh(toanHang1, toanHang2, toanTu);
                        result.innerHTML = toanHang2;
                    }
                    toanTu = '%';
                    toanHang1 = '';
                    break;
                case 'AC':
                    toanHang1 = '';
                    toanHang2 = '';
                    toanTu = '';
                    result.innerHTML = 0;
                    break;
                case '^':
                    if(toanHang1 === '') {
                        if(toanHang2 === '') {
                            toanHang2 = 0;
                        }
                    } else if(toanHang2 === '') {
                        toanHang2 = toanHang1;
                    } else {
                        toanHang2 = tinh(toanHang1, toanHang2, toanTu);
                        result.innerHTML = toanHang2;
                    }

                    toanTu = '^';
                    toanHang1 = '';
                    break;
                case 'Can':
                    if(toanHang1 == ''){
                        if(toanHang2 == '') {
                            toanHang1 = 0;
                        } else {
                            toanHang1 = toanHang2;
                            toanHang2 = '';
                        }
                    }
                    toanHang1 =  Math.sqrt(toanHang1);
                    result.innerHTML = toanHang1;
                    break;
                case 'log':
                    if(toanHang1 == ''){
                        if(toanHang2 == '') {
                            toanHang1 = 0;
                        } else {
                            toanHang1 = toanHang2;
                            toanHang2 = '';
                        }
                    }
                    toanHang1 =  Math.log(toanHang1);
                    result.innerHTML = toanHang1;
                    break;
                case 'tan':
                    if(toanHang1 == ''){
                        if(toanHang2 == '') {
                            toanHang1 = 0;
                        } else {
                            toanHang1 = toanHang2;
                            toanHang2 = '';
                        }
                    }
                    toanHang1 =  Math.tan(toanHang1);
                    result.innerHTML = toanHang1;
                    break;
                default:
                    toanHang1 += elements[i].innerText;
                    result.innerHTML = toanHang1;
                    break;
            }

        });
    }
}

function tinh (toanHang1, toanHang2, toanTu) {
    toanHang1 = Number(toanHang1);
    toanHang2 = Number(toanHang2);
    if(toanTu == 'x') {
        return toanHang2*toanHang1;
    } else if(toanTu == '/'){
        if(toanHang1 == 0) {
            return toanHang2 = 'Cannot divide by zero'
        } else {
            return toanHang2/toanHang1;
        }
    } else if(toanTu == '%') {
        if(toanHang1 == 0) {
            return toanHang2 = 'Cannot divide by zero'
        } else {
            return toanHang2%toanHang1;
        }
    } else if (toanTu == '+') {
        return toanHang2+toanHang1;
    } else if (toanTu == '-') {
        return toanHang2-toanHang1;
    } else if(toanTu == '^') {
        return toanHang2**toanHang1;
    }
}
function giaiThua(x) {
    let result = 1;
    for(let i = 2; i < x; i++) {
        result *= i;
    }
    return result;
}