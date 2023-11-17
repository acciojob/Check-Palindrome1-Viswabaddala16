// complete the given function

 function palindrome(str) {
    // Function to check if a character is alphanumeric
    function isAlphanumeric(char) {
        const code = char.charCodeAt(0);
        return (code >= 48 && code <= 57) || (code >= 65 && code <= 90) || (code >= 97 && code <= 122);
    }

    // Function to convert a character to lowercase
    function toLowerCase(char) {
        return char.toLowerCase();
    }

    // Clean and lowercase the string
    let cleanStr = '';
    for (let i = 0; i < str.length; i++) {
        if (isAlphanumeric(str[i])) {
            cleanStr += toLowerCase(str[i]);
        }
    }

    // Check if the cleaned string is a palindrome
    const length = cleanStr.length;
    for (let i = 0; i < Math.floor(length / 2); i++) {
        if (cleanStr[i] !== cleanStr[length - 1 - i]) {
            return false;
        }
    }

    return true;
 }
module.exports = palindrome
