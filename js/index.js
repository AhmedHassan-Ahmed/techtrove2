
function submitted(event){
    event.preventDefault();
    const email = document.getElementById("Email").value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const username = document.getElementById("Name").value;
    const phone = document.getElementById("Phone").value;
    const complaint = document.getElementById("Text").value;
    document.querySelectorAll('.inputBox').forEach(input => {
        input.style.marginBottom = '29px';
    });
    let valid = true;
    if(username === ""){
        document.getElementById("nameerror").style.display = "grid";
        valid = false;
    }
    else{document.getElementById("nameerror").style.display = "none";}

    if(phone === ""){
        document.getElementById("phoneerror").style.display = "grid";
        valid = false;
    } 
    else{document.getElementById("phoneerror").style.display = "none";}

    if(email === ""){
        document.getElementById("emailerror").style.display = "grid";
        valid = false;
    } 
    else if(!emailRegex.test(email)){
        document.getElementById("emailerror").textContent = "please enter a valid email address (example@gmail.com).";
        document.getElementById("emailerror").style.display = "grid";
        valid = false;
    } 
    else{document.getElementById("emailerror").style.display = "none";}

    if(complaint == ""){
        document.getElementById("texterror").style.display = "grid";
        valid=false;
    }
    else{document.getElementById("texterror").style.display = "none";}


    if (valid) {
        document.body.style.transition = "opacity 0.5s";
        document.body.style.opacity = "0.3";
            alert(`Hello : ${username}!\nEmail : ${email}\nPhone : ${phone}\n\nYour message has been sent successfully.`);
            document.body.style.opacity = "1";
            document.querySelectorAll('.inputBox').forEach(input => {
                    input.style.marginBottom = '52.5px';
                }
            );
    }
}    