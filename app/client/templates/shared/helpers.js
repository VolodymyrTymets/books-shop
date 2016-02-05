Template.registerHelper('cut', function (text, length) {
    //trim the string to the maximum length
    var trimmedString = text.substr(0, length);

    //re-trim if we are in the middle of a word
    return trimmedString = trimmedString.substr(0, Math.min(trimmedString.length, trimmedString.lastIndexOf(" "))) + '...'
});