'use strict';
export function CalculatorX(){

const calculator = document.createElement("div");
calculator.className = "calculator";

const body = document.body;

body.prepend(calculator);

const pad = document.createElement("div");
pad.className = "pad";

calculator.prepend(pad);


const result = document.createElement("div");
result.className = "result";

calculator.prepend(result);

const num = document.createElement("div");
num.className = "num";

pad.prepend(num);

const operator = document.createElement("div");
operator.className = "operator";

pad.prepend(operator);


const egal = document.createElement("div");
egal.className = "egal";

num.prepend(egal);


const numbers = document.createElement("div");
numbers.className = "numbers";

num.prepend(numbers);

const numbersline1 = document.createElement("div");
numbersline1.className = "numbersline1";

numbers.append(numbersline1);

const numbersline2 = document.createElement("div");
numbersline2.className = "numbersline2";

numbers.append(numbersline2);

const numbersline3 = document.createElement("div");
numbersline3.className = "numbersline3";

numbers.append(numbersline3);

const numbersline4 = document.createElement("div");
numbersline4.className = "numbersline4";

numbers.append(numbersline4);


function createButtonOperator(text) {
    const btn = document.createElement("button");
    btn.textContent = text;
    btn.className = text;
    operator.append(btn);
}

createButtonOperator("+");
createButtonOperator("-");
createButtonOperator("x");
createButtonOperator("÷");


function createButtonNumbersLine1(text) {
    const btn = document.createElement("button");
    btn.textContent = text;
    btn.className = text;

    numbersline1.append(btn);
}
createButtonNumbersLine1("7");
createButtonNumbersLine1("8");
createButtonNumbersLine1("9");


function createButtonNumbersLine2(text) {
    const btn = document.createElement("button");
    btn.textContent = text;
    btn.className = text;

    numbersline2.append(btn);
}



createButtonNumbersLine2("4");
createButtonNumbersLine2("5");
createButtonNumbersLine2("6");

function createButtonNumbersLine3(text) {
    const btn = document.createElement("button");
    btn.textContent = text;
    btn.className = text;

    numbersline3.append(btn);
}




createButtonNumbersLine3("1");
createButtonNumbersLine3("2");
createButtonNumbersLine3("3");



function createButtonNumbersLine4bt1(text) {
    const btn = document.createElement("button");
    btn.textContent = text;
    btn.className = text;

    numbersline4.append(btn);
}

createButtonNumbersLine4bt1("0");

function createButtonNumbersLine4bt2(text) {
    const btn = document.createElement("button");
    btn.textContent = ".";
    btn.className = text;

    numbersline4.append(btn);
}

createButtonNumbersLine4bt2("point");

function createButtonNumbersLine4bt3(text) {
    const btn = document.createElement("button");
    btn.textContent = text;
    btn.className = text;

    numbersline4.append(btn);
}

createButtonNumbersLine4bt3("AC");


function createButtonEgale(text) {
    const btn = document.createElement("button");
    btn.textContent = text;
    btn.className = "egalebtn";

    egal.append(btn);
}
createButtonEgale("=");


function resultValue(cal){
    const val = document.createElement("p");
    val.textContent = cal;
    val.className = "resultvalue";
    result.append(val);

}
resultValue();

function sign(cal){
    const val = document.createElement("p");
    val.textContent = cal;
    val.className = "sign";
    result.append(val);

}
sign();

//************************************************************************************************************************* */

const tout1 = document.querySelector(".calculator");

tout1.addEventListener("click", getVar1);
let d = document.querySelector(".resultvalue");
let s = document.querySelector(".sign");
let stringcal = '';
let inst = '';
let verif = "";
d.textContent = "0";
s.textContent = "";
function getVar1(e){

    const x = e.target.className;


    
    if (x == "0" || x =="1" || x =="2" || x =="3" || x =="4" || x =="5" || x =="6" || x =="7" || x =="8" || x =="9") {
        inst += x;
        stringcal += x;
        d.textContent = inst;

        if (d.textContent.charAt(0)=="0"){

            if (d.textContent.charAt(1)!=""){
                if (d.textContent.charAt(1)!="."){
                    inst = inst.substr(1);
                    stringcal = stringcal.substr(1);
                    d.textContent = inst;
                }
            }
        }
        if(d.textContent.length === 10){
            d.textContent = d.textContent.substr(0,d.textContent.length-1);
            inst = inst.substr(1);
            stringcal = stringcal.substr(1);
            d.textContent = inst;
        }
    }
    if( x == "point"){
        if(d.textContent.includes(".") == false){
            inst += ".";
            stringcal += ".";
            d.textContent = inst;
            }
    }
    if( x == "+"){
        if (stringcal.charAt(stringcal.length - 1) == "+" | stringcal.charAt(stringcal.length - 1) == "-" | stringcal.charAt(stringcal.length - 1) == "*" | stringcal.charAt(stringcal.length - 1) == "/" ){
            stringcal = stringcal.substr(0,stringcal.length-1);
             }

        d.textContent = (eval(stringcal));
        inst="";
        stringcal += "+";
        s.textContent ="+";
        console.log(stringcal);
    }

    if( x == "-"){
        console.log(stringcal.length - 1);
        if (stringcal.charAt(stringcal.length - 1) == "+" | stringcal.charAt(stringcal.length - 1) == "-" | stringcal.charAt(stringcal.length - 1) == "*" | stringcal.charAt(stringcal.length - 1) == "/" ){
            stringcal = stringcal.substr(0,stringcal.length-1);
             }
        d.textContent = (eval(stringcal));
        inst="";
        stringcal += "-";
        s.textContent ="-";

    }

    if( x == "x"){
        if (stringcal.charAt(stringcal.length - 1) == "+" | stringcal.charAt(stringcal.length - 1) == "-" | stringcal.charAt(stringcal.length - 1) == "*" | stringcal.charAt(stringcal.length - 1) == "/" ){
            stringcal = stringcal.substr(0,stringcal.length-1);
             }

        d.textContent = (eval(stringcal));
        inst="";
        stringcal += "*";
        s.textContent ="x";

    }

    if( x == "÷"){
        if (stringcal.charAt(stringcal.length - 1) == "+" | stringcal.charAt(stringcal.length - 1) == "-" | stringcal.charAt(stringcal.length - 1) == "*" | stringcal.charAt(stringcal.length - 1) == "/" ){
            stringcal = stringcal.substr(0,stringcal.length-1);
             }

        d.textContent = (eval(stringcal));
        inst="";
        stringcal += "/";
        console.log(stringcal);
        s.textContent ="÷";

    }

    if( x == "egalebtn"){

        let a = stringcal;
        let b = inst;
        let e = verif;

        console.log( "a:"+a +" b:"+ b +" e:"+ e );

        console.log("longueyr de b:" + b.length);

        console.log("valeur trouvée :" + stringcal.charAt(stringcal.length - ((b.length)+1)));

        if (stringcal.charAt(stringcal.length - ((b.length)+1)) == "+" | stringcal.charAt(stringcal.length - ((b.length)+1)) == "-" | stringcal.charAt(stringcal.length - ((b.length)+1)) == "*" | stringcal.charAt(stringcal.length - ((b.length)+1)) == "/" ){
            console.log('conforme !');
            if( stringcal.charAt(stringcal.length-1) == "+" | stringcal.charAt(stringcal.length-1) == "-" | stringcal.charAt(stringcal.length-1) == "*" | stringcal.charAt(stringcal.length-1) == "/"){
                console.log('tention ya +');
                stringcal = stringcal.substr(0,stringcal.length-1);
                inst = (eval(stringcal));
                d.textContent = inst;
                inst = "";
                s.textContent ="";
                if( d.textContent == ""){
                    d.textContent="0";
                }

            }
            else{
                        verif = inst;
    
                inst = (eval(stringcal));
                d.textContent = inst;
                inst = "";
                s.textContent ="";


            }
        }
        else{
            d.textContent="";
            d.textContent = inst;
            console.log('Pas conforme !');
            stringcal = inst;
            s.textContent ="";
            if( d.textContent == ""){
                d.textContent="0";
            }
            

        }
        }
        if (d.textContent.length > 10){
            d.textContent="error";

        s.textContent ="";

        console.log(verif);
        console.log(stringcal);
        console.log(d.textContent);
    }

    if( x == "AC"){
        d.textContent = "0";
        stringcal = "";
        inst="";
        s.textContent ="";

    }

        
}

   


} 
