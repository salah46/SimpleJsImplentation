function checkRequiredFields() {
    var fields = document.querySelectorAll('input[required], textarea[required], select[required]');
    for (var i = 0; i < fields.length; i++) {
        if (fields[i].value === '') {
            alert("Ce champ est requis!");
            fields[i].focus();
            return false;
        }
    }
    return true;
}

function checkAge() {
    var birthdate = new Date(document.getElementById("birthdate").value);
    var age = calculateAge(birthdate);
    if (age < 12) {
        alert("Vous devez avoir au moins 12 ans pour accéder à ce service.");
        return false; // Prevent form submission
    }
    return true;
}

function calculateAge(birthdate) {
    var today = new Date();
    var age = today.getFullYear() - birthdate.getFullYear();
    var m = today.getMonth() - birthdate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthdate.getDate())) {
        age--;
    }
    return age;
}