var canvas, database, users = [], mail;

function preload() { }

function setup() {
    canvas = createCanvas(windowWidth, 0);

    database = firebase.database();
}

function draw() {
    background("black");

    users = [{ email: database.ref('/users/name/email') }, { password: database.ref('/users/name/password') }];
}

function getInfo() {
    var emailread = database.ref('users/name/email');
    var email = (readData(emailread));
    var password = database.ref('users/name/password');

    if (email != undefined && password != undefined && email != 0 && password != 0) {
        for (var i = 0; i < users.length; i++) {
            if (email == users[i].email && password == users[i].password) {
                document.location.href = "index.html";
                return;
            }
        }
    }
    else {
        alert("Something is missing");
    }
}

function setInfo() {
    var mailTxt = (document.getElementById('EmaiL').value);
    var passwordTxt = (document.getElementById('passworD').value);

    if (mailTxt != 0 && passwordTxt != 0) {
        var userupdate = updateEmailPass(mailTxt, passwordTxt);
        document.location.href = "form.html";
    }
    else {
        alert("Something is missing");
    }
}

function updateEmailPass(mailTxt, passwordTxt) {
    database.ref('/users/name/').update({
        email: mailTxt,
        password: passwordTxt
    });
}

function updateProfile(name, dob, state, gender) {
    database.ref('/users/name/').update({
        name: name,
        dob: dob,
        state: state,
        gender: gender,
    });
}

function loadHomeUpdate() {
    var name = (document.getElementById('name').value);
    var dob = (document.getElementById('dob').value);
    var state = (document.getElementById('state').value);
    var gender = (document.getElementById('gender').value);

    if (name != 0 && dob != 0 && state != "Select State" && gender != "Select Gender") {
        updateProfile(name, dob, state, gender);
        document.location.href = "index.html";
    }
    else {
        alert("Something is missing");
    }
    
    document.location.href = "home.html";
}

function home() {
    document.location.href = "home.html";
}

function achive() {
    document.location.href = "achivemeants.html";
}

function profile() {
    document.location.href = "profile.html";
}

function report() {
    document.location.href = "report.html";
}

function rate() {
    document.location.href = "rate.html";
}

function readData(read) {
    read.on('value', (read) => {
        const data = read.val();
    });
}

function sendReport() {
    var dangerSel = (document.getElementById('dangerSel').value);
    var dangerWrite = (document.getElementById('dangerType').value);
    var dangerImage = (document.getElementById('dangerImages').value);

    if (dangerSel == "Select Danger Type" && dangerWrite == 0) {
        alert("Something is missing or you have selected an option as well as written one danger type");
    }
    else {
        if (dangerSel == "Select Danger Type" && dangerWrite == 0 && dangerImage) {
            alert("Your report is submitted");
        }
        else if (dangerSel != "Select Danger Type" && dangerWrite != 0 && dangerImage) {
            alert("Your report is submitted");
        }
        else {
            alert("Something is missing or you have selected an option as well as written one danger type");
        }
    }
}

function editProfileUser() {
    document.location.href = "profileEdit.html";
}

function profileReUpdate() {
    var name = (document.getElementById('nameUp').value);
    var state = (document.getElementById('stateEdit').value);
    var dob = (document.getElementById('dob').value);
    var gender = (document.getElementById('gender').value);

    if (name != 0 && state == "Select State") {
        updateProfile(name, dob, state, gender);
        document.location.href = "profile.html";
    }
    else if (name == 0 && state != "Select State") {
        updateProfile(name, dob, state, gender);
        document.location.href = "profile.html";
    }
    else if (name != 0 && state != "Select State") {
        updateProfile(name, dob, state, gender);
        document.location.href = "profile.html";
    }
    else {
        alert("Not given anything");
        document.location.href = "profile.html";
    }
}