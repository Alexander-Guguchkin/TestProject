'use strict'
let storage = [];
let buttonSend = document.querySelector('.button__send');
let tbody = document.querySelector('tbody');
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

    for (let storageElement of storage) {
        tbody.innerHTML+=`
            <tr>
                <td>${storageElement.FIO}</td>
                <td>${storageElement.address}</td>
                <td>${storageElement.phone}</td>
                <td>${storageElement.email}</td>
            </tr>      
        `;
    }
    console.log(storage)
});

