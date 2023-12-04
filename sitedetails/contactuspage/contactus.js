var messageusTab = document.getElementById('messageus');
messageusTab.addEventListener("click", messageClicked);

var volunteerTab = document.getElementById('volunteer');
volunteerTab.addEventListener("click", volunteerClicked);

var assistanceTab = document.getElementById('assistance');
assistanceTab.addEventListener("click", assistanceClicked);

var connectForm = document.getElementById('connectForm');
var volunteerForm = document.getElementById('volunteerForm');
var assistanceForm = document.getElementById('assistanceForm');

volunteerForm.style.display = "none";
assistanceForm.style.display = "none";
messageusTab.style.backgroundColor = "#7000BF";

function messageClicked(){
    messageusTab.style.backgroundColor = "#7000BF";
    volunteerTab.style.backgroundColor = "#9500FF";
    assistanceTab.style.backgroundColor = "#9500FF"; 


    connectForm.style.display = "block";
    volunteerForm.style.display = "none";
    assistanceForm.style.display = "none";
}

function volunteerClicked(){
    messageusTab.style.backgroundColor = "#9500FF";
    volunteerTab.style.backgroundColor = "#7000BF";
    assistanceTab.style.backgroundColor = "#9500FF";

    connectForm.style.display = "none";
    volunteerForm.style.display = "block";
    assistanceForm.style.display = "none";
}

function assistanceClicked(){
    messageusTab.style.backgroundColor = "#9500FF";
    volunteerTab.style.backgroundColor = "#9500FF";
    assistanceTab.style.backgroundColor = "#7000BF";

    connectForm.style.display = "none";
    volunteerForm.style.display = "none";
    assistanceForm.style.display = "block";
}


