function passwordValidator(pass) {

    let counter = 0;
    let haveTwoDigits = false;
    let isValid = false;
    let notOnlyLetterAndDigits = false;

    for (let i = 0; i < pass.length; i++) {
        const el = pass[i];
        if (el.charCodeAt() < 48 || el.charCodeAt() > 57 && el.charCodeAt() < 65 || el.charCodeAt() > 90 && el.charCodeAt() < 97) {
            notOnlyLetterAndDigits = true
        } else if (el.charCodeAt() >= 48 && el.charCodeAt() <= 57) {
            counter++
        }
    }
    if (pass.length < 6 || pass.length > 10) {

        console.log("Password must be between 6 and 10 characters");
    }
    if (notOnlyLetterAndDigits) {
        console.log("Password must consist only of letters and digits");
    }
    if (counter >= 2) {
        haveTwoDigits = true;
        isValid = true;
    }else{
        console.log("Password must have at least 2 digits");
    }
    if (isValid) {
        console.log("Password is valid");
    }
}
passwordValidator('MyPass1234');
// passwordValidator('logIn');
// passwordValidator('Pa$s$s')