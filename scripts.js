

function sendMail(event){
    event.preventDefault()

    let parameters = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("mail-content").value
    }

    emailjs.send("service_yiw4t4p","template_ykz06zh",parameters).then(
        document.getElementById("form-mail").reset()
    )
}

document.getElementById("form-mail").onsubmit =sendMail