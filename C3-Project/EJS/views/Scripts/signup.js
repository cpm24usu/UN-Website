
document.addEventListener("DOMContentLoaded", function () {
    if (document.querySelector('#signup')){ //checks if the current page is the signup using an id="signup" in the opening html tag
        fetch('../JSON/main.json')
        .then(response => response.json())
        .then(data => {

            /*Loading heading into central element*/

            const mainPara = document.getElementById("formPara");

            const paraHeader = document.createElement("h2");
            paraHeader.textContent = data.signup.content.title;

            /* Creating the form inside a section element (inside the central element) */
            const form = document.createElement("form");
            form.setAttribute("id", "myForm");
            form.setAttribute("method", "POST");

            const fieldset = document.createElement("fieldset");

            // First Name
            const fNameLabel = document.createElement("label");
            fNameLabel.textContent = "First Name*:";

            const fNameInput = document.createElement("input");
            fNameInput.setAttribute("id", "firstName");
            fNameInput.setAttribute("type", "text");
            fNameInput.setAttribute("required", true);
            fNameInput.setAttribute("name", "firstName")

            // Last Name
            const lNameLabel = document.createElement("label");
            lNameLabel.textContent = "Surname*:";

            const lNameInput = document.createElement("input");
            lNameInput.setAttribute("id", "lastName");
            lNameInput.setAttribute("type", "text");
            lNameInput.setAttribute("required", true);
            lNameInput.setAttribute("name", "lastName")

            // Email
            const emailLabel = document.createElement("label");
            emailLabel.textContent = "Email*:";

            const emailInput = document.createElement("input");
            emailInput.setAttribute("id", "email");
            emailInput.setAttribute("type", "email");
            emailInput.setAttribute("required", true);
            emailInput.setAttribute("name", "email")

            // Comments
            const commentsLabel = document.createElement("label");
            commentsLabel.textContent = "Comments:";

            const commentsTextarea = document.createElement("textarea");
            commentsTextarea.setAttribute("id", "comments");
            commentsTextarea.setAttribute("name", "comments");

            const submitInput = document.createElement("input");
            submitInput.setAttribute("type", "submit");
            submitInput.setAttribute("value", "Send comments");
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
            fieldset.appendChild(commentsLabel);
            fieldset.appendChild(commentsTextarea);
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
                    comments:commentsTextarea.value
                };
                const requestHeaders = {
                    "Content-Type": "application/json"
                };

                let response;

                fetch("/signup", {
                    method: "POST",
                    headers: requestHeaders,
                    body: JSON.stringify(formBody)
                })
                .then(response => response.json())
                .then(responsedata => {
                    response = responsedata;
                })
                .then(() => {
                    for (const [key, value] of Object.entries(response)) {console.log(`${key}: ${value}`);};
                    if (response.send == true) {
                        console.log("Sending email");
                        window.alert(`You have successfully signed up for the newsletter! Check ${response.email} for confirmation.`);
                    }
                    else {
                        console.log("Not sending email");
                        window.alert(`One or more fields was not valid. Please try again.`);
                    };
                })
                //.then(window.location.reload())
                .catch(error => console.log(error));
            });
        })
        .catch(error => console.error("Error fetching JSON data:", error));
    }
});
