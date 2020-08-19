function formattedPhone(phone) {
    if (!isValidPhone(phone)) {
        console.error('Incorrect mobile number format: + and 11 digits : ' + phone);
        return null;
    }

    const cityCode = '+' + phone.charAt(1) + ' (' + phone.substr(2, 3) + ') ';

    const number = phone.substr(5, 3) + '-'
        + phone.substr(8, 2) + '-'
        + phone.substr(10, 2);

        return cityCode + number;

    function isValidPhone(phone) {
        return phone.match(/^\+\d{11}$/);
    }
}

function assertEquals(expected, actual, message) {
    let result = 'fail';
    if (expected === actual) {
        result = 'pass';
    } else if (expected == actual) {
        result = 'half-pass';
    }

    const li = document.createElement('li');
    li.className = result;
    li.appendChild(document.createTextNode(message + ': expected = ' + expected + ', actual = ' + actual));
    document.getElementById('results').appendChild(li);
}


assertEquals('+7 (123) 456-78-90', formattedPhone('+71234567890'), 'Test correct number');
assertEquals('+1 (000) 123-56-89', formattedPhone('+10001235689'), 'Test another number');

assertEquals(null, formattedPhone(''), 'Test empty string');
assertEquals(null, formattedPhone('71234567890'), 'Test number 71234567890 without +');
assertEquals(null, formattedPhone('+7123456789O'), 'Test number +7123456789O with letter \'O\'');
assertEquals(null, formattedPhone('+7123456789'), 'Test number +7123456789 with != 11 digits');
