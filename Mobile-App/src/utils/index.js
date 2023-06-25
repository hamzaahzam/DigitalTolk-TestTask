import moment from "moment";

class utilsClass {
    reg = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!()%*#?&^_-]).{8,}/;

    validEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    validPassword = new RegExp(
        "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!()@#?/$%^&*])(?=.{8,})"
    );


    validatePassword = (pass) => {
        return this.validPassword.test(pass);
    };
    isEmailValid = email => {
        return this.validEmail.test(email);
    };
    getPasswordStrength = (password) => {
        if(password.length == 0) return "";
        const hasUpperCase = /[A-Z]/.test(password);
        const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
        const length = password.length;

        if(length < 6) {
            return 'Weak';
        } else if(length >= 6 && hasUpperCase && hasSpecialChar) {
            return 'Very Strong';
        } else if(length >= 6) {
            return 'Strong';
        } else {
            return 'Weak';
        }
    };

    getFullName = user => {
        let fullName =
            this.capitalizedFirstLetter(user.firstName) +
            ' ' +
            this.capitalizedFirstLetter(user.lastName);
        return fullName;
    };

    capitalizedFirstLetter = str => {
        return str.charAt(0).toUpperCase() + str?.slice(1)?.toLowerCase();
    };

    getFormatedDate = dateStr => {

        const date = moment(dateStr);

        // Get the current date
        const currentDate = moment().startOf('day');

        // Determine the appropriate descriptor for the date
        let descriptor;
        if(date.isSame(currentDate, 'day')) {
            descriptor = 'Today';
        } else if(date.isSame(currentDate.clone().add(1, 'day'), 'day')) {
            descriptor = 'Tomorrow';
        } else {
            descriptor = date.format('MMM D, YYYY');
        }

        // Format the time
        const formattedTime = date.format('HH:mm');

        // Format the complete date and time string
        const formattedDate = `${descriptor} at ${formattedTime}`;

        return formattedDate;

    };

}

const utils = new utilsClass();

export default utils;
