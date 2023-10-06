function passwordValidator(pass) {
    let notOnlyLetterAndDigits = false;

    let lengthRule = function () {
        return (pass.length >= 6 && pass.length <= 10);
    }

    let letterRule = function () {

        for (let i = 0; i < pass.length; i++) {
            const el = pass[i];
            if (el.charCodeAt() < 48 || el.charCodeAt() > 57 && el.charCodeAt() < 65 || el.charCodeAt() > 90 && el.charCodeAt() < 97) {
                notOnlyLetterAndDigits = true;
            }
        }
        return notOnlyLetterAndDigits;
    }

    let digitRule = function () {
        let counter = 0;
        for (let i = 0; i < pass.length; i++) {
            const el = pass[i];
            if (el.charCodeAt() >= 48 && el.charCodeAt() <= 57) {
                counter++;
            }
        }
        return counter >= 2;
    }

    if (!lengthRule(pass)) {
        console.log("Password must be between 6 and 10 characters");
    } 
    if (letterRule(pass)) {
        console.log("Password must consist only of letters and digits");
    }
    if (!digitRule(pass)) {
        console.log("Password must have at least 2 digits");
    }
     if (lengthRule(pass) && !letterRule(pass) && digitRule(pass)){
        console.log("Password is valid");
    }
}
// passwordValidator('MyPass1234');
// passwordValidator('logIn');
passwordValidator('Pa$s$s')