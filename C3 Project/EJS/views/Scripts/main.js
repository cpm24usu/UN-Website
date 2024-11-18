// This file will be where all page-specific JavaScript is combined
// For now, it will hold all JS that is used on every page (e.g., header, footer & clickable image links)

document.addEventListener("DOMContentLoaded", function () {
    fetch('../JSON/signup.json')
        .then(response => response.json())
        .then(data => {

            /* Header */
            const logo = document.getElementById("logo");
            const logoDisplay = document.createElement("img");

            const x = window.matchMedia("(max-width: 1000px)"); // 1140px
            function updateBackground() {
                if (x.matches) { // If the screen is less than 1000px wide
                    logoDisplay.src =  data.media.logoWithoutText; // Change the logo to the version without text
                    logoDisplay.setAttribute("id", "narrowLogo");
                } else {
                    logoDisplay.src =  data.media.logoWithText; // Otherwise, show the version with text
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
            if (document.querySelector("#homepage")) {
                home.setAttribute("id", "active");
            }
            else {
                home.setAttribute("id", "inactive");
            };
            

            let teamNav = document.getElementById("teamNav");

            const team = document.createElement("a");
            team.href = "./team";
            team.textContent = "Team Info";
            if (document.querySelector("#team")) {
                team.setAttribute("id", "active");
            }
            else {
                team.setAttribute("id", "inactive");
            };

            let signUpNav = document.getElementById("signUpNav");

            const signup = document.createElement("a");
            signup.href = "./signup";
            signup.textContent = "Sign Up";
            if (document.querySelector("#signup")) {
                signup.setAttribute("id", "active");
            }
            else {
                signup.setAttribute("id", "inactive");
            };

            homeNav.appendChild(home);
            teamNav.appendChild(team);
            signUpNav.appendChild(signup);



            /* Clickable Image Links */

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
    });