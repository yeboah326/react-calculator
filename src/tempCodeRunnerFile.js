const divide = (expression) => {
    for (let index = 0; index < expression.length; index++) {
        if(index === "/"){
            return parseFloat(expression[index - 1]) / parseFloat(expression[index + 1])
        }        
    }
}