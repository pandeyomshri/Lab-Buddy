const firebaseConfig = {
    apiKey: "AIzaSyAidYoKa3t_YPRoG0iOnVi_xZ-YNuLiETQ",
    authDomain: "labforabes.firebaseapp.com",
    databaseURL: "https://labforabes-default-rtdb.firebaseio.com",
    projectId: "labforabes",
    storageBucket: "labforabes.appspot.com",
    messagingSenderId: "758829648052",
    appId: "1:758829648052:web:621cb62d6f8297bdd62fe1"
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
    var branch = getInputVal("branch");
    var section = getInputVal("section");
    var year = getInputVal("year");
    

    // Save message
    saveMessage(branch,section,year);

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
function saveMessage(branch,section,year) {
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        branch:branch,
        section:section,
        year:year
    });
}
function message(){
    alert('Department Created')
    window.location.reload()
}
