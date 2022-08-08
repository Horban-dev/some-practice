/* 
let inputText = document.querySelector('#text');
let button = document.querySelector('#btn');
let newItem = document.querySelector('#list');
let block = document.querySelector('#block input');




button.onclick = function(){
    if(block.value.length == 0){
        alert("Введи что-то!")
    }
    else{
        newItem.innerHTML += `
            <ul class="text">
                <li id="textname">
                    ${block.value}
                </li>
            </ul>
        `;
    }
}; */

const { add } = require("lodash");




