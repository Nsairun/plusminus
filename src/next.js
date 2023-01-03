let value = 0;

function add (){
    value = Math.max(value, Math.floor(Math.random() * 1000))
}

function sub (){
    value = Math.min(value, Math.floor(Math.random() * 1000))
}

function getCurrentValue() {
    return value;
}

export default {add, sub, getCurrentValue}

