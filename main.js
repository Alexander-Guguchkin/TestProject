'use strict'
let storage = [];
let buttonSend = document.querySelector('.button__send');
let tbody = document.querySelector('tbody');
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

    for (let storageElement of storage) {
        addUser(storageElement.FIO, storageElement.address, storageElement.phone, storageElement.email);

    }
});
function renderUser(FIO, address, phone, email){
    tbody.innerHTML+=`
            <tr>
                <td>${FIO}</td>
                <td>${address}</td>
                <td>${phone}</td>
                <td>${email}</td>
            </tr>      
        `;
}
function addUser(FIO, address, phone, email){
    fetch('/addUser.php', {
        method: 'POST',
        body: JSON.stringify({FIO, address, phone, email}),
        headers: {
            'Content-Type': 'application/json'
        }
    })  .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
        });
    renderUser(FIO, address, phone, email);
}
function getUser(){
    fetch(`/getUser.php`).then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
        .then(data => {
            for (let dataKey of data) {
                renderUser(dataKey.FIO, dataKey.address, dataKey.phone, dataKey.email)
            }
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
        });
}