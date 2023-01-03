import data from "./next.js"
import "./styles.css"

const minus = document.querySelector('.minus')
const result = document.querySelector('.result')
const plus = document.querySelector('.plus')

// data = 0;

// function plus (){
//     data = Math.max(data, Math.floor(Math.random * 1000))
// }

// function minus (){
//     data = Math.min(data, Math.floor(Math.random * 1000))
// }

// export function getCurrentValue() {
//     return data;
// }



function displayValue (text = data.getCurrentValue() ){
    result.innerHTML = text;
    console.log(result, text)
}

minus.addEventListener('click', () => {
    data.sub()
    displayValue()
})

plus.addEventListener('click', () => {
    data.add()
    displayValue()
})
