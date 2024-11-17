
document.addEventListener("DOMContentLoaded", function () {
    if (document.querySelector('#signup')){ //checks if the current page is the homepage using an id="homepage" in the opening html tag
        fetch('../JSON/signup.json')
        .then(response => response.json())
        .then(data => {
            
            /*Goal & Website Introductions*/

            const dataDisplay = document.getElementById("text1");

            const title = document.createElement("h1");
            title.textContent = data.content.title;

            dataDisplay.appendChild(title);



            /*Loading test content into 2nd central element*/

            const testPara = document.getElementById("testPara");

            const paraHeader = document.createElement("h2");
            paraHeader.textContent = data.temp.header;

            const paraContent1 = document.createElement("p");
            paraContent1.textContent = data.temp.testContent1;

            const paraContent2 = document.createElement("p");
            paraContent2.textContent = data.temp.testContent2;

            testPara.appendChild(paraHeader);
            testPara.appendChild(paraContent1);
            testPara.appendChild(paraContent2);



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



            /*External links section via JSON*/

            let linkElement = document.getElementById("externalLinks");

            const linkHeader = document.createElement("h3");
            linkHeader.textContent = data.links.externalHeader;

            const links = document.createElement("ul");

            const UNHomepageElement = document.createElement("li");
            const UNHomepageLink = document.createElement("a");
            UNHomepageLink.href = data.links.UNHomepage;
            UNHomepageLink.textContent = "UN Homepage";
            UNHomepageElement.appendChild(UNHomepageLink);


            const list6Element = document.createElement("li");
            const goal6Link = document.createElement("a");
            goal6Link.href = data.links.Goal6;
            goal6Link.textContent = "UN Goal 6: Clean Water and Sanitation";
            list6Element.appendChild(goal6Link);

            const list12Element = document.createElement("li");
            const goal12Link = document.createElement("a");
            goal12Link.href = data.links.Goal12;
            goal12Link.textContent = "UN Goal 12: Responsible Consumption and Production";
            list12Element.appendChild(goal12Link);

            const list13Element = document.createElement("li");
            const goal13Link = document.createElement("a");
            goal13Link.href = data.links.Goal13;
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
            footer.textContent = data.footer.content;

        })
        .catch(error => console.error("Error fetching JSON data:", error));
    }
});
