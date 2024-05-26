var personName = "sikandar AlI";
// Function to convert a string to title case
function toTitleCase(str) {
    return str.toLowerCase().replace(/\b\w/g, function (char) { return char.toUpperCase(); });
}
console.log("UpperCase: ".concat(personName.toUpperCase()));
console.log("LowerCase: ".concat(personName.toLowerCase()));
console.log("TitleCase: ".concat(toTitleCase(personName)));
