
 // MODAL
let openMOdal = document.getElementById('open');
let modal = document.getElementById('modal');
let closeModal = document.getElementById('close');

openMOdal.onclick = function () {
    modal.style.display = 'block';
};
closeModal.onclick = function () {
    modal.style.display = 'none';
};
window.onclick = function (event) {
    if(event.target == modal) {
        modal.style.display = 'none';
    }
};

// DO LIST
let inputText = document.querySelector('#text');
let button = document.querySelector('#btn');
let newItem = document.querySelector('#list');
let block = document.querySelector('#block input');
let doL = document.getElementById('dela');
let doList = document.getElementById('doList');



doL.onclick = function () {
    doList.style.display = 'block';
};
window.onclick = function (event) {
    if(event.target == doList) {
        doList.style.display = 'none';
    }
};

button.onclick = function(){
    if(block.value.length == 0){
        alert("Введи что-то!");
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
} ;

let image = document.getElementById('row');
let image1 = document.getElementById('img1');
let mainImg = document.getElementById('img');
image.onclick = function () {
    mainImg.style.display = 'none';
    image1.style.display = 'block';
}; 


