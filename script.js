function add(first,second){
    let sum=first+second;
    return(sum);
}

function subtract(first,second){
    let difference=first-second;
    return(difference);
}

function multiply(first, second){
    let product=first*second;
    return(product);
}

function divide(first, second){

        let quotient=first/second;
        return(quotient);
    
}

let resultDisplayed=false;

let firstOperand, 
    secondOperand,
    operator;

function operate(firstNumber,operator,secondNumber){
    if(operator=="+"){
        display.textContent=add(firstNumber,secondNumber);
        resultDisplayed=true;
        expression=""+add(firstNumber,secondNumber);
    }
    else if(operator=='-'){
        display.textContent=subtract(firstNumber,secondNumber);
        resultDisplayed=true;
        expression=""+subtract(firstNumber,secondNumber);
    }
    else if(operator=='*'){
        display.textContent=multiply(firstNumber,secondNumber);
        resultDisplayed=true;
        expression=""+multiply(firstNumber,secondNumber);
    }
    else if(operator=='/'){
        if(secondNumber==0){
            display.textContent="ERROR: Division by 0";
            resultDisplayed=true;
            expression="";
        }
        else{

            display.textContent=divide(firstNumber,secondNumber);
            resultDisplayed=true;
            expression=""+divide(firstNumber,secondNumber);
        }
    }
}

const one=document.querySelector("#one");
const two=document.querySelector("#two");
const three=document.querySelector("#three");
const four=document.querySelector("#four");
const five=document.querySelector("#five");
const six=document.querySelector("#six");
const seven=document.querySelector("#seven");
const eight=document.querySelector("#eight");
const nine=document.querySelector("#nine");
const zero=document.querySelector("#zero");
const plus=document.querySelector("#plus");
const minus=document.querySelector("#minus");
const backspaace=document.querySelector("#backspace");
const asterisk=document.querySelector("#multiply");
const slash=document.querySelector("#divide");
const clear=document.querySelector("#clear");
const equals=document.querySelector("#equals");
const display=document.querySelector(".display");

let expression="";

one.addEventListener("click",() => {
  if(resultDisplayed==true){
    expression="";
    display.textContent="";
    resultDisplayed=false;
  }
  expression=expression+"1";
  display.textContent+="1";
});
two.addEventListener("click",() => {
if(resultDisplayed==true){
    expression="";
    display.textContent="";
    resultDisplayed=false;
  }
  expression=expression+"2";
  display.textContent+="2";
});
three.addEventListener("click",() => {
if(resultDisplayed==true){
    expression="";
    display.textContent="";
    resultDisplayed=false;
  }
  expression=expression+"3";
  display.textContent+="3";
});
four.addEventListener("click",() => {
if(resultDisplayed==true){
    expression="";
    display.textContent="";
    resultDisplayed=false;
  }
  expression=expression+"4";
  display.textContent+="4";
});
five.addEventListener("click",() => {
if(resultDisplayed==true){
    expression="";
    display.textContent="";
    resultDisplayed=false;
  }
  expression=expression+"5";
  display.textContent+="5";
});
six.addEventListener("click",() => {
if(resultDisplayed==true){
    expression="";
    display.textContent="";
    resultDisplayed=false;
  }
  expression=expression+"6";
  display.textContent+="6";
});
seven.addEventListener("click",() => {
if(resultDisplayed==true){
    expression="";
    display.textContent="";
    resultDisplayed=false;
  }
  expression=expression+"7";
  display.textContent+="7";
});
eight.addEventListener("click",() => {
if(resultDisplayed==true){
    expression="";
    display.textContent="";
    resultDisplayed=false;
  }
  expression=expression+"8";
  display.textContent+="8";
});
nine.addEventListener("click",() => {
if(resultDisplayed==true){
    expression="";
    display.textContent="";
    resultDisplayed=false;
  }
  expression=expression+"9";
  display.textContent+="9";
});
zero.addEventListener("click",() => {
  if(resultDisplayed==true){
    expression="";
    display.textContent="";
    resultDisplayed=false;
  }
  expression=expression+"0";
  display.textContent+="0";
});
plus.addEventListener("click",() => {
    resultDisplayed=false;
  expression=expression+"+";
  display.textContent+="+";
});
minus.addEventListener("click",() => {
    resultDisplayed=false;
  expression=expression+"-";
  display.textContent+="-";
});
asterisk.addEventListener("click",() => {
    resultDisplayed=false;
  expression=expression+"*";
  display.textContent+="*";
});
slash.addEventListener("click",() => {
    resultDisplayed=false;
  expression=expression+"/";
  display.textContent+="/";
});
clear.addEventListener("click",() => {
    resultDisplayed=false;
    display.textContent="";
    expression="";
});
backspaace.addEventListener("click",() => {
    expression=expression.substring(0,expression.length-1);
    display.textContent=expression;
})
equals.addEventListener("click",() => {
    display.textContent+="=";
    const operatorion=["+","-","*","/"];
    for(let op of operatorion){
        if(expression.includes(op)){
            [firstOperand,secondOperand]=expression.split(op);
            for(let ope of operatorion){
                if(secondOperand.includes(ope)){
                    display.textContent="ERROR: Use a single operator at a time";
                    expression="";
                    resultDisplayed=true;
                    return;
                }
            }
            if(secondOperand==""&&firstOperand==""){
                display.textContent="No operand is present";
                expression="";
                resultDisplayed=true;
                return;
            }
            if(secondOperand==""){
                display.textContent="No second operand present";
                expression="";
                resultDisplayed=true;
                return;
            }
            if(firstOperand==""){
                display.textContent="No first Operand present";
                expression="";
                resultDisplayed=true;
                return;
            }
            return(operate(Number(firstOperand),op,Number(secondOperand)));
        }
    }
    display.textContent="ERROR: No operator is present in the expression";
    resultDisplayed=true;
});