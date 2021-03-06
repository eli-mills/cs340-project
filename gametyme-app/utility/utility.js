function escapeString(stringToClean) {
    if (typeof stringToClean !== 'string') {
        return stringToClean;
    }
    const specialChars = ["'", '`', '$', '{', '}'];
    let outputString = '';
    for ( char of stringToClean ) {
        if ( specialChars.includes(char) ) {
            outputString += '\\';
            outputString += char;
        } else if (char === '"') {
            outputString += "\\'"
        } else if (char === ';') {
            continue
        } else {
            outputString += char;
        }

    }

    return outputString;
}

function escapeObject( inputObject ) {
    for (key in inputObject) {
        inputObject[key] = escapeString(inputObject[key]);
    }
}

module.exports = {escapeString, escapeObject};