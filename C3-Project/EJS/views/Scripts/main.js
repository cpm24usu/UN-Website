// This file will be where all page-specific JavaScript is combined
// For now, it will hold all JS that is used on every page (e.g., header, footer & clickable image links)

document.addEventListener("DOMContentLoaded", function () {
    fetch('../JSON/main.json')
        .then(response => response.json())
        .then(data => {

            /* Header */
            const logo = document.getElementById("logo");
            const logoDisplay = document.createElement("img");

            const x = window.matchMedia("(max-width: 1000px)"); // 1140px
            function updateBackground() {
                if (x.matches) { // If the screen is less than 1000px wide
                    logoDisplay.src =  data.common.media.logoWithoutText; // Change the logo to the version without text
                    logoDisplay.setAttribute("id", "narrowLogo");
                } else {
                    logoDisplay.src =  data.common.media.logoWithText; // Otherwise, show the version with text
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
            if (document.querySelector("#homepage")) { // Checks if the current page is the homepage
                home.setAttribute("id", "active");
            }
            else {
                home.setAttribute("id", "inactive");
            };
            

            let teamNav = document.getElementById("teamNav");

            const team = document.createElement("a");
            team.href = "./team";
            team.textContent = "Team Info";
            if (document.querySelector("#team")) { // Checks if the current page is the team info page
                team.setAttribute("id", "active");
            }
            else {
                team.setAttribute("id", "inactive");
            };

            let signUpNav = document.getElementById("signUpNav");

            const signup = document.createElement("a");
            signup.href = "./signup";
            signup.textContent = "Sign Up";
            if (document.querySelector("#signup")) { // Checks if the current page is the signup page
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
            goal6img.src = data.common.media.goal6;
            goal6img.setAttribute("alt", "Link to Goal 6: Clean Water and Sanitation");
            goal6a.appendChild(goal6img);
            goal6.appendChild(goal6a);

            const goal12 = document.getElementById("goal12");
            const goal12a = document.createElement("a");
            goal12a.href = "./goal12";
            const goal12img = document.createElement("img");
            goal12img.setAttribute("id", "imgLink2");
            goal12img.src = data.common.media.goal12;
            goal12img.setAttribute("alt", "Link to Goal 12: Responsible Consumption and Production");
            goal12a.appendChild(goal12img);
            goal12.appendChild(goal12a);

            const goal13 = document.getElementById("goal13");
            const goal13a = document.createElement("a");
            goal13a.href = "./goal13";
            const goal13img = document.createElement("img");
            goal13img.setAttribute("id", "imgLink3");
            goal13img.src = data.common.media.goal13;
            goal13img.setAttribute("alt", "Link to Goal 13: Climate Action");
            goal13a.appendChild(goal13img);
            goal13.appendChild(goal13a);


            
            /*External links section via JSON*/

            let linkElement = document.getElementById("externalLinks");

            const linkHeader = document.createElement("h3");
            linkHeader.textContent = data.common.links.externalHeader;

            const links = document.createElement("ul");

            const UNHomepageElement = document.createElement("li");
            const UNHomepageLink = document.createElement("a");
            UNHomepageLink.href = data.common.links.UNHomepage;
            UNHomepageLink.textContent = "UN Homepage";
            UNHomepageElement.appendChild(UNHomepageLink);


            const list6Element = document.createElement("li");
            const goal6Link = document.createElement("a");
            goal6Link.href = data.common.links.Goal6;
            goal6Link.textContent = "UN Goal 6: Clean Water and Sanitation";
            list6Element.appendChild(goal6Link);

            const list12Element = document.createElement("li");
            const goal12Link = document.createElement("a");
            goal12Link.href = data.common.links.Goal12;
            goal12Link.textContent = "UN Goal 12: Responsible Consumption and Production";
            list12Element.appendChild(goal12Link);

            const list13Element = document.createElement("li");
            const goal13Link = document.createElement("a");
            goal13Link.href = data.common.links.Goal13;
            goal13Link.textContent = "UN Goal 13: Climate Action";
            list13Element.appendChild(goal13Link);

            linkElement.append(linkHeader);
            links.appendChild(UNHomepageElement);
            links.appendChild(list6Element);
            links.appendChild(list12Element);
            links.appendChild(list13Element);

            linkElement.appendChild(links);



            /* Footer */
            const footer = this.querySelector("footer");
            footer.textContent = data.common.footer.content;
        })
        .catch(error => console.error("Error fetching JSON data:", error));
    });