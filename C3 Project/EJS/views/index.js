
document.addEventListener("DOMContentLoaded", function () {
    if (document.querySelector('#homepage')){ //checks if the current page is the homepage using an id="homepage" in the opening html tag
        fetch('../index.json')
        .then(response => response.json())
        .then(data => {
            
            /*Goal & Website Introductions*/

            const dataDisplay = document.getElementById("text1");

            const title = document.createElement("h1");
            title.textContent = data.content.title;

            const intro = document.createElement("p");
            intro.textContent = data.content.intro;


            const goal6header = document.createElement("h2");
            const goal6para = document.createElement("p");
            goal6header.textContent = data.content.goal6header;
            goal6para.textContent = data.content.goal6;

            const goal12header = document.createElement("h2");
            const goal12para = document.createElement("p");
            goal12header.textContent = data.content.goal12header;
            goal12para.textContent = data.content.goal12;

            const goal13header = document.createElement("h2");
            const goal13para = document.createElement("p");
            goal13header.textContent = data.content.goal13header;
            goal13para.textContent = data.content.goal13;

            const outro = document.createElement("p");
            outro.textContent = data.content.outro;
            outro.setAttribute("id", "outro");


            dataDisplay.appendChild(title);
            dataDisplay.appendChild(intro);
            dataDisplay.appendChild(goal6header);
            dataDisplay.appendChild(goal6para);
            dataDisplay.appendChild(goal12header);
            dataDisplay.appendChild(goal12para);
            dataDisplay.appendChild(goal13header);
            dataDisplay.appendChild(goal13para);
            dataDisplay.appendChild(outro);


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
            home.setAttribute("id", "active");

            let teamNav = document.getElementById("teamNav");

            const team = document.createElement("a");
            team.href = "./team";
            team.textContent = "Team Info";
            team.setAttribute("id", "inactive");

            let signUpNav = document.getElementById("signUpNav");

            const signup = document.createElement("a");
            signup.href = "./signup";
            signup.textContent = "Sign Up";
            signup.setAttribute("id", "inactive");

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


            /*Left images section via JSON*/

            const goalImages = document.getElementById("goalImages");

            const tempImg1 = document.createElement("img");
            tempImg1.src = data.temp.media.homeTemplate;
            tempImg1.setAttribute("id", "temp1");

            const tempImg2 = document.createElement("img");
            tempImg2.src = data.temp.media.goalTemplate;
            tempImg2.setAttribute("id", "temp2");

            const tempImg3 = document.createElement("img");
            tempImg3.src = data.temp.media.formTemplate;
            tempImg3.setAttribute("id", "temp3");

            const tempImg4 = document.createElement("img");
            tempImg4.src = data.temp.media.teamTemplate;
            tempImg4.setAttribute("id", "temp4");

            goalImages.appendChild(tempImg1);
            goalImages.appendChild(tempImg2);
            goalImages.appendChild(tempImg3);
            goalImages.appendChild(tempImg4);



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
