let screenClear = false;
let getFirstVal;
let oper;

function numberDisplay(numbers){
    console.log(numbers);

    screen2.value += numbers;

    if(screenClear){
        screen2.value = numbers;
        screenClear = false;
    }
};

function operators(message){
    getFirstVal = screen2.value;
    oper = message;
    screen1.value = getFirstVal + message;

    screenClear = true;
    console.log(screenClear);
};

function clearButton(){
    screen2.value = "";
};

function backspace(){
    screen2.value = screen2.value.slice(0,-1);
};

function decimal(deci){
    screen2.value += deci;
};

function clean(){
    screen1.value = "";
    screen2.value = "";
};

function equals(){
    if(oper == '+'){
        screen1.value = getFirstVal + oper + screen2.value + '=';
        screen2.value = Number(getFirstVal) + Number(screen2.value)
    }
    else if(oper == '-'){
        screen1.value = getFirstVal + oper + screen2.value + '=';
        screen2.value = getFirstVal - screen2.value;
    }
    else if(oper == '÷'){
        screen1.value = getFirstVal + oper + screen2.value + '=';
        screen2.value = getFirstVal / screen2.value;
    }
    else if(oper == '×'){
        screen1.value = getFirstVal + oper + screen2.value + '=';
        screen2.value = getFirstVal * screen2.value;
    }
    else if(oper == '%'){
        screen1.value = getFirstVal + oper + screen2.value + '=';
        screen2.value = getFirstVal % screen2.value;
    }
    else if(oper == '^2'){
        screen1.value = getFirstVal + oper + '=';
        screen2.value = getFirstVal ** 2;
    }
    else if(oper == '1/x'){
        screen1.value = oper + getFirstVal + '=';
        screen2.value = 1 / getFirstVal;
    }
    else if(oper == '✓'){
        screen1.value = getFirstVal + oper + '=';
        screen2.value = Math.sqrt(Number(getFirstVal))
    }
}
