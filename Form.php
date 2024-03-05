<?php
require_once 'PrimaryHeader.php';
?>
    <div class="wrapper">
        <div  class="form">
            <h4>Обратная связь</h4>
                <input type="text" placeholder="ФИО" class="form__input" id="FIO">
                <input type="text" placeholder="Адрес" class="form__input" id="address">
                <input type="tel" placeholder="Телефон" class="form__input" id="phone">
                <input type="email" placeholder="Email" class="form__input" id="email">
            <div class="form__button">
                <button class="button__send">Отправить</button>
            </div>
        </div>
        <table class="output__table">
            <thead>
                <tr>
                    <td>ФИО</td>
                    <td>Адрес</td>
                    <td>Телефон</td>
                    <td>Email</td>
                </tr>
            </thead>
            <tbody>
            </tbody>
        </table>
    </div>
    <script src="form.js"></script>
