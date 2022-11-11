const firebaseConfig = {
    apiKey: "AIzaSyB-ATY4a9wprCmakhWEM6oJOjyBRF6b2oU",
    authDomain: "add-lab-52deb.firebaseapp.com",
    databaseURL: "https://add-lab-52deb-default-rtdb.firebaseio.com",
    projectId: "add-lab-52deb",
    storageBucket: "add-lab-52deb.appspot.com",
    messagingSenderId: "377607568479",
    appId: "1:377607568479:web:614c70d157cec5149dafea"
    };
firebase.initializeApp(firebaseConfig);

// Reference messages collection
var messagesRef = firebase.database().ref("messages");

// Listen for form submit
document.getElementById("Form").addEventListener("submit", submitForm);

// Submit form
function submitForm(e) {
    e.preventDefault();

    // Get values
    var labname = getInputVal("labname");
    var labcode = getInputVal("labcode");
    var year = getInputVal("year");
    

    // Save message
    saveMessage(labname,labcode,year);

    // Show alert
    document.querySelector(".alert").style.display = "block";

    // Hide alert after 3 seconds
    setTimeout(()=> {
        document.querySelector(".alert").style.display = "none";
    }, 3000);
    // Clear form
    document.getElementById("Form").reset();
}

// Function to get get form values
function getInputVal(id) {
    return document.getElementById(id).value;
}


// Save message to firebase
function saveMessage(labname,labcode,year) {
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        labname:labname,
        labcode:labcode,
        year:year
    });
}
function message(){
    alert('Subject added')
    window.location.reload()
}
