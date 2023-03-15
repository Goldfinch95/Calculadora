const inputFirstNumber = document.getElementById ("input__Number-First");
const inputSecondNumber = document.getElementById ("input__Number-Second");
const btnAdd = document.getElementById("add");
const btnSubtract = document.getElementById("subtract");
const btnMultiply = document.getElementById("multiply");
const btnSplit = document.getElementById("split");
const btnPower = document.getElementById("power");
const btnRoot = document.getElementById("root");
const btnClean = document.getElementById("clean");
const btnGoOut = document.getElementById("go_out");

const getInputs = () => {
    const firstInputValue = Number(inputFirstNumber.value);
    const secondInputValue = Number(inputSecondNumber.value);
    return {firstInputValue, secondInputValue}
}

const addNumbers = (firstNumber, secondNumber) => {
    const result = firstNumber + secondNumber;
    return result
}

const subtractNumbers = (firstNumber, secondNumber) => {
    const result = firstNumber - secondNumber;
    return result
}

const multiplyNumbers = (firstNumber, secondNumber) => {
    const result = firstNumber * secondNumber;
    return result
}

const divideNumbers = (firstNumber, secondNumber) => {
    const result = firstNumber / secondNumber;
    return result
}

const boostNumbers = (firstNumber, secondNumber) => {
    const result = firstNumber ** secondNumber;
    return result
}

const rootNumbers = (firstNumber, secondNumber) => {
    const result = Math.pow(secondNumber,(1/firstNumber));
    return result
}

const deleteInputValues = ()=>{
    document.getElementById('input__Number-First').value= '';
    document.getElementById('input__Number-Second').value= '';
}

const showResults = (result)=>{
    document.getElementById ("result").innerHTML = (`${result}`);
}



btnAdd.addEventListener("click", () => {
    const {firstInputValue, secondInputValue} = getInputs();
    const result = addNumbers(firstInputValue,secondInputValue);
    showResults(result);
})

btnSubtract.addEventListener("click", () => {
   const {firstInputValue, secondInputValue} = getInputs();
   const result = subtractNumbers(firstInputValue,secondInputValue);
   showResults(result);
})

btnMultiply.addEventListener("click", () => {
    const {firstInputValue, secondInputValue} = getInputs();
    const result = multiplyNumbers(firstInputValue,secondInputValue);
    showResults(result);
 })

 btnSplit.addEventListener("click", () => {
    const {firstInputValue, secondInputValue} = getInputs();
    const result = divideNumbers(firstInputValue,secondInputValue);
    showResults(result);
 })

 btnPower.addEventListener("click", ()=>{
    const {firstInputValue, secondInputValue} = getInputs();
    const result = boostNumbers(firstInputValue,secondInputValue);
    showResults(result);
 })

 btnRoot.addEventListener("click", ()=>{
    const {firstInputValue, secondInputValue} = getInputs();
    const result = rootNumbers(firstInputValue,secondInputValue);
    showResults(result);
 })

 btnClean.addEventListener("click", ()=>{
    deleteInputValues();
 })

 btnGoOut.addEventListener("click", ()=>{
    window.close();
 })
