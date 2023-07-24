// ==UserScript==
// @name           Disable Maccabi Datepicker
// @description    Disables Maccabi datepicker, allowing you to store id and birthdate on your password manager
// @match          https://mac.maccabi4u.co.il/login*
// @version        1
// @grant          none
// ==/UserScript==

window.addEventListener('load', function() {
    // Find the input field with the 'birthDate' id and remove the 'readonly' attribute.
    var inputField = document.getElementById('birthDate');
    if (inputField) {
        inputField.removeAttribute('readonly');
    }

    // Continuously check for the presence of the datepicker div and hide it when it appears.
    setInterval(function() {
        var datepickerDiv = document.getElementById('ui-datepicker-div');
        if (datepickerDiv) {
            datepickerDiv.style.display = 'none';
        }
    }, 100); // Check every 100 milliseconds.
}, false);
