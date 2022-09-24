const form = document.querySelector(".message-form");

// send mail from message
function sendMsg(event) {
    event.preventDefault();
    const name = document.querySelector(".name");
    const email = document.querySelector(".email");
    const message = document.querySelector(".message");
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "nnahid878@gmail.com",
        Password : "813898518A3C710A8DDA4B439C39B306FEB9",
        To : 'mushfiqulislamchowdhury@gmail.com',
        From : "nnahid878@gmail.com",
        Subject : "Message From Personal Website",
        Body : "Name: " + name.value + "<br/>Email: "+ email.value + 
        "<br/>Send you a message through your personal site, message: <br/>"
        + message.value.replace(/[\n]/g,"<br>")
    }).then(message => alert(message));
}
        
form.addEventListener("submit", sendMsg);

// print CV
function printCV() {
    var pdf= window.open('assets/Mushfiqul_Islam_Chowdhury__Resume-v-1.4.pdf');
    pdf.print();
}

// download CV
function downloadCV() {
    var pdf= window.open('assets/Mushfiqul_Islam_Chowdhury__Resume-v-1.4.pdf');

}
