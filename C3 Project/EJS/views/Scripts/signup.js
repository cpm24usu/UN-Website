
document.addEventListener("DOMContentLoaded", function () {
    if (document.querySelector('#signup')){ //checks if the current page is the homepage using an id="homepage" in the opening html tag
        fetch('../JSON/signup.json')
        .then(response => response.json())
        .then(data => {

            /*Loading test content into 2nd central element*/

            const testPara = document.getElementById("mainPara");

            const paraHeader = document.createElement("h2");
            paraHeader.textContent = data.content.title;

            /* Creating tthe form inside a section element */
            const formSection = document.createElement("section");

            const form = document.createElement("form");
            form.setAttribute("id", "myForm");
            form.setAttribute("method", "POST");
            form.setAttribute("action", "/signup");

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
            formSection.appendChild(form);

            testPara.appendChild(paraHeader);
            testPara.appendChild(formSection);



            /*Loading head content from JSON*/

            const logo = document.getElementById("logo");
            const logoDisplay = document.createElement("img");

            const x = window.matchMedia("(max-width: 1000px)"); /* 1140px */
            function updateBackground() {
                if (x.matches) { /* If the screen is less than 1000px wide */
                    logoDisplay.src =  data.media.logoWithoutText; /* Change the logo to the version without text */
                    logoDisplay.setAttribute("id", "narrowLogo");
                } else {
                    logoDisplay.src =  data.media.logoWithText; /* Otherwise, show the version with text */
                    logoDisplay.setAttribute("id", "wideLogo");
                }
            }
            x.addEventListener("change", updateBackground);
            updateBackground();

            logo.appendChild(logoDisplay);


            let homeNav = document.getElementById("homeNav");

            const home = document.createElement("a");
            home.href = ".";
            home.textContent = "Home";
            home.setAttribute("id", "inactive");

            let teamNav = document.getElementById("teamNav");

            const team = document.createElement("a");
            team.href = "./team";
            team.textContent = "Team Info";
            team.setAttribute("id", "inactive");

            let signUpNav = document.getElementById("signUpNav");

            const signup = document.createElement("a");
            signup.href = "./signup";
            signup.textContent = "Sign Up";
            signup.setAttribute("id", "active");

            homeNav.appendChild(home);
            teamNav.appendChild(team);
            signUpNav.appendChild(signup);



            /*Right images section via JSON*/

            const goal6 = document.getElementById("goal6");
            const goal6a = document.createElement("a");
            goal6a.href = "goal6";
            const goal6img = document.createElement("img");
            goal6img.setAttribute("id", "imgLink1");
            goal6img.src = data.media.goal6;
            goal6img.setAttribute("alt", "Link to Goal 6: Clean Water and Sanitation");
            goal6a.appendChild(goal6img);
            goal6.appendChild(goal6a);

            const goal12 = document.getElementById("goal12");
            const goal12a = document.createElement("a");
            goal12a.href = "./goal12";
            const goal12img = document.createElement("img");
            goal12img.setAttribute("id", "imgLink2");
            goal12img.src = data.media.goal12;
            goal12img.setAttribute("alt", "Link to Goal 12: Responsible Consumption and Production");
            goal12a.appendChild(goal12img);
            goal12.appendChild(goal12a);

            const goal13 = document.getElementById("goal13");
            const goal13a = document.createElement("a");
            goal13a.href = "./goal13";
            const goal13img = document.createElement("img");
            goal13img.setAttribute("id", "imgLink3");
            goal13img.src = data.media.goal13;
            goal13img.setAttribute("alt", "Link to Goal 13: Climate Action");
            goal13a.appendChild(goal13img);
            goal13.appendChild(goal13a);



            /* Footer */
            const footer = this.querySelector("footer");
            footer.textContent = data.footer.content;

        })
        .catch(error => console.error("Error fetching JSON data:", error));
    }
});
