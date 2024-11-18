
document.addEventListener("DOMContentLoaded", function () {
    if (document.querySelector('#signup')){ //checks if the current page is the signup using an id="signup" in the opening html tag
        fetch('../JSON/signup.json')
        .then(response => response.json())
        .then(data => {

            /*Loading content into central element*/

            const mainPara = document.getElementById("mainPara");

            const paraHeader = document.createElement("h2");
            paraHeader.textContent = data.content.title;

            /* Creating the form inside a section element */
            const form = document.createElement("form");
            form.setAttribute("id", "myForm");
            form.setAttribute("method", "POST");

            const fieldset = document.createElement("fieldset");

            const fNameLabel = document.createElement("label");
            fNameLabel.textContent = "First Name*:";

            const fNameInput = document.createElement("input");
            fNameInput.setAttribute("id", "firstName");
            fNameInput.setAttribute("type", "text");
            fNameInput.setAttribute("required", true);
            fNameInput.setAttribute("name", "firstName")

            const lNameLabel = document.createElement("label");
            lNameLabel.textContent = "Surname*:";

            const lNameInput = document.createElement("input");
            lNameInput.setAttribute("id", "lastName");
            lNameInput.setAttribute("type", "text");
            lNameInput.setAttribute("required", true);
            lNameInput.setAttribute("name", "lastName")

            const emailLabel = document.createElement("label");
            emailLabel.textContent = "Email*:";

            const emailInput = document.createElement("input");
            emailInput.setAttribute("id", "email");
            emailInput.setAttribute("type", "email");
            emailInput.setAttribute("required", true);
            emailInput.setAttribute("name", "email")

            const messageLabel = document.createElement("label");
            messageLabel.textContent = "Comments:";

            const messageTextarea = document.createElement("textarea");
            messageTextarea.setAttribute("id", "message");
            messageTextarea.setAttribute("name", "message");

            const submitInput = document.createElement("input");
            submitInput.setAttribute("type", "submit");
            submitInput.setAttribute("value", "Send Message");
            submitInput.setAttribute("id", "submitBtn");

            const reqFieldPara = document.createElement("p");
            reqFieldPara.setAttribute("id", "reqField");
            reqFieldPara.textContent = "* = Required field";

            fieldset.appendChild(fNameLabel);
            fieldset.appendChild(fNameInput);
            fieldset.appendChild(lNameLabel);
            fieldset.appendChild(lNameInput);
            fieldset.appendChild(emailLabel);
            fieldset.appendChild(emailInput);
            fieldset.appendChild(messageLabel);
            fieldset.appendChild(messageTextarea);
            fieldset.appendChild(submitInput);
            fieldset.appendChild(reqFieldPara);

            form.appendChild(fieldset);

            mainPara.appendChild(paraHeader);
            mainPara.appendChild(form);


            // Sends data to server and receieves response
            form.addEventListener('submit', (e)=>{
                e.preventDefault();
                const formBody = {
                    fName:fNameInput.value,
                    lName:lNameInput.value,
                    email:emailInput.value,
                    message:messageTextarea.value
                };
                const requestHeaders = {
                    "Content-Type": "application/json"
                };
                fetch("/signup", {
                    method: "POST",
                    headers: requestHeaders,
                    body: JSON.stringify(formBody)
                })
                .then(response => response.json())
                .then(responsedata => {
                    console.log(responsedata);
                    console.log(responsedata.fName);
                    console.log(responsedata.lName);
                    console.log(responsedata.email);
                    console.log(responsedata.message);
                })
                .then(alert(`You have successfully signed up, ${formBody.fName} ${formBody.lName}!
Please check ${formBody.email} for a verification email.`))
                .then(window.location.reload())
                .catch(error => console.log(error));
            });
        })
        .catch(error => console.error("Error fetching JSON data:", error));
    }
});
