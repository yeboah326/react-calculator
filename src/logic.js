const simplify = (expresion) =>{

}
let operations = ["/", "x", "+", "-"];

const divide = (expression) => {
    let leftOperand = [];
    let rightOperand = [];
    for (let index = 0; index < expression.length; index++) {
        if(index < expression.indexOf("/")){
            leftOperand.push(expression[index])
        }else if(index > expression.indexOf("/")){
            rightOperand.push(expression[index])
        }
    }
    return parseFloat(leftOperand.join("")) / parseFloat(rightOperand.join(""))
}

const multiplication = (expression) => {
    let leftOperand = [];
    let rightOperand = [];
    for (let index = 0; index < expression.length; index++) {
        if(index < expression.indexOf("x")){
            leftOperand.push(expression[index])
        }else if(index > expression.indexOf("x")){
            rightOperand.push(expression[index])
        }
    }
    return parseFloat(leftOperand.join("")) * parseFloat(rightOperand.join(""))
    
}

const addition = (expression) => {
    let leftOperand = [];
    let rightOperand = [];
    for (let index = 0; index < expression.length; index++) {
        if(index < expression.indexOf("+")){
            leftOperand.push(expression[index])
        }else if(index > expression.indexOf("+")){
            rightOperand.push(expression[index])
        }
    }
    return parseFloat(leftOperand.join("")) + parseFloat(rightOperand.join(""))
}

const subtraction = (expression) => {
    let leftOperand = [];
    let rightOperand = [];
    for (let index = 0; index < expression.length; index++) {
        if(index < expression.indexOf("-")){
            leftOperand.push(expression[index])
        }else if(index > expression.indexOf("-")){
            rightOperand.push(expression[index])
        }
    }
    return parseFloat(leftOperand.join("")) - parseFloat(rightOperand.join(""))
}

console.log(subtraction("85-2"))