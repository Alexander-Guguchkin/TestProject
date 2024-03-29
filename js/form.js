'use strict'
let storage = [];
let buttonSend = document.querySelector('.button__send');
let table = document.querySelector('.output__table');
getUser();
buttonSend.addEventListener('click', ()=>{
    let inputFIO = document.querySelector('#FIO').value;
    let inputAddress = document.querySelector('#address').value;
    let inputPhone = document.querySelector('#phone').value;
    let inputEmail = document.querySelector('#email').value;

    if (inputFIO && inputAddress && inputPhone && inputEmail){
        storage.push(
            {
                'FIO':inputFIO,
                'address':inputAddress,
                'phone':inputPhone,
                'email':inputEmail
            }
        )
    }
    else if (!inputFIO && !inputAddress && !inputPhone && !inputEmail){
        alert('введите данные в форму');
    }
    else{
        alert('не все данные заполнены');
    }
    let lastElement = storage[storage.length-1];
    addUser(lastElement.FIO, lastElement.address, lastElement.phone, lastElement.email)
});
function renderUser(FIO, address, phone, email){
    table.innerHTML+=`
<div class="wrapper__table">
    <div class="head__table">
        <div class="row">
            <div class="column">ФИО</div>
            <div class="column">Адрес</div>
            <div class="column">Телефон</div>
            <div class="column">Email</div>
        </div>
    </div>
    <div class="body__table">
                <div class="row">
                    <div class="column">${FIO}</div>
                    <div class="column">${address}</div>
                    <div class="column">${phone}</div>
                    <div class="column">${email}</div>
            </div>   
    </div>
</div>

   
        `;
}
function addUser(FIO, address, phone, email){
    fetch('/actions/addUser.php', {
        method: 'POST',
        body: JSON.stringify({FIO, address, phone, email}),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    renderUser(FIO, address, phone, email);
}
function getUser(){
    fetch(`/actions/getUser.php`).then(response => {
        return response.json();
    })
        .then(data => {
            for (let dataKey of data) {
                renderUser(dataKey.FIO, dataKey.address, dataKey.phone, dataKey.email)
            }
        });
}