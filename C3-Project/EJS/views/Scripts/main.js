// This file will be where all page-specific JavaScript is combined
// For now, it will hold all JS that is used on every page (e.g., header, footer & clickable image links)

document.addEventListener("DOMContentLoaded", function () {
    fetch('../JSON/main.json')
        .then(response => response.json())
        .then(data => {

            /* Header */

            // Toggle dark mode button (modified from https://stackoverflow.com/questions/72822021/how-to-set-light-dark-mode-across-multiple-pages)
            const header = document.querySelector('header');
            const darkModeButton = document.createElement('button');
            darkModeButton.textContent = data.common.headerText.darkModeButton;
            darkModeButton.id = 'toggleDarkMode'

            // This section was modified from https://ultimatecourses.com/blog/detecting-dark-mode-in-javascript
            // It checks the user's browser preferences to start in either light or dark mode
            const runColorMode = (fn) => {
                if (!window.matchMedia) {
                    return;
                }
                
                const query = window.matchMedia('(prefers-color-scheme: dark)');
              
                fn(query.matches);
              
                query.addEventListener('change', (event) => fn(event.matches));
            };
              
            runColorMode((isDarkMode) => {
                if (isDarkMode) {
                    darkModeButton.classList.add('darkMode');
                    document.body.classList.add('dark-mode');
                }
            });

              // First checks if the button has been pressed before to determine mode, if not, then uses browser preferences
            if (localStorage.getItem('darkMode') === 'enabled') {
                darkModeButton.classList.add('darkMode');
                document.body.classList.add('dark-mode');
            } else if (localStorage.getItem('darkMode') === 'disabled') {
                darkModeButton.classList.remove('darkMode');
                document.body.classList.remove('dark-mode');
            }

            darkModeButton.addEventListener('click', function() {
                document.body.classList.toggle('dark-mode'); // Adds/removes dark-mode class to body 
                darkModeButton.classList.toggle(`darkMode`);

                if (document.body.classList.contains('dark-mode')) {
                    localStorage.setItem('darkMode', 'enabled') // Local storage stores info between browsing sessions
                }                                               // such as different pages of the same site
                else {
                    localStorage.setItem('darkMode', 'disabled') // Local storage of whether ndark mode is enabled
                }
            });
            header.appendChild(darkModeButton);


            // Adding the logo to the header
            const logo = document.querySelector("#logo");
            const logoDisplay = document.createElement("img");

            const x1 = window.matchMedia("(max-width: 1000px)"); // Stops overlap of nav and logo by swapping to no text version
            const x2 = window.matchMedia("(max-width: 800px)"); // Change back to logo with text for media rule
            const x3 = window.matchMedia("(max-width: 680px)"); // Stop overlap on smaller screens for media rule
            function changeLogo() {
                if (x3.matches) { // If the screen is at least 800px wide (media rule)
                    logoDisplay.src =  data.common.media.logoWithoutText; // Change the logo to the version with text
                    logoDisplay.setAttribute("id", "narrowLogo");
                    logoDisplay.setAttribute("alt", data.common.headerText.logoAlts.narrowLogo);
                } else if (x2.matches) { // If the screen is less than 680px wide (media rule)
                    logoDisplay.src =  data.common.media.logoWithText; // Change the logo to the version without text
                    logoDisplay.setAttribute("id", "wideLogo");
                    logoDisplay.setAttribute("alt", data.common.headerText.logoAlts.wideLogo);
                } else if (x1.matches) { // If the screen is less than 1000px wide
                    logoDisplay.src =  data.common.media.logoWithoutText; // Change the logo to the version without text
                    logoDisplay.setAttribute("id", "narrowLogo");
                    logoDisplay.setAttribute("alt", data.common.headerText.logoAlts.narrowLogo);
                } else {
                    logoDisplay.src =  data.common.media.logoWithText; // Otherwise, show the version with text
                    logoDisplay.setAttribute("id", "wideLogo");
                    logoDisplay.setAttribute("alt" , data.common.headerText.logoAlts.wideLogo);
                }
            }
            x1.addEventListener("change", changeLogo);
            x2.addEventListener("change", changeLogo);
            x3.addEventListener("change", changeLogo);
            changeLogo();

            logo.appendChild(logoDisplay);


            // Adding the navigation options for the header (not goal pages)
            let homeNav = document.querySelector("#homeNav");

            const home = document.createElement("a");
            home.href = ".";
            home.textContent = data.common.headerText.homeLink;
            if (document.querySelector("#homepage")) { // Checks if the current page is the homepage
                home.setAttribute("id", "active");
            }
            else {
                home.setAttribute("class", "inactive");
            };
            

            let teamNav = document.querySelector("#teamNav");

            const team = document.createElement("a");
            team.href = "./team";
            team.textContent = data.common.headerText.teamLink;
            if (document.querySelector("#team")) { // Checks if the current page is the team info page
                team.setAttribute("class", "active");
            }
            else {
                team.setAttribute("class", "inactive");
            };

            let signUpNav = document.querySelector("#signUpNav");

            const signup = document.createElement("a");
            signup.href = "./signup";
            signup.textContent = data.common.headerText.signUpLink;
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

            const goal6 = document.querySelector("#goal6");
            const goal6a = document.createElement("a");
            goal6a.href = "goal6";
            const goal6img = document.createElement("img");
            goal6img.setAttribute("id", "imgLink1");
            goal6img.src = data.common.media.goal6;
            goal6img.setAttribute("alt", "Link to Goal 6: Clean Water and Sanitation");
            goal6a.appendChild(goal6img);
            goal6.appendChild(goal6a);

            const goal12 = document.querySelector("#goal12");
            const goal12a = document.createElement("a");
            goal12a.href = "./goal12";
            const goal12img = document.createElement("img");
            goal12img.setAttribute("id", "imgLink2");
            goal12img.src = data.common.media.goal12;
            goal12img.setAttribute("alt", "Link to Goal 12: Responsible Consumption and Production");
            goal12a.appendChild(goal12img);
            goal12.appendChild(goal12a);

            const goal13 = document.querySelector("#goal13");
            const goal13a = document.createElement("a");
            goal13a.href = "./goal13";
            const goal13img = document.createElement("img");
            goal13img.setAttribute("id", "imgLink3");
            goal13img.src = data.common.media.goal13;
            goal13img.setAttribute("alt", "Link to Goal 13: Climate Action");
            goal13a.appendChild(goal13img);
            goal13.appendChild(goal13a);


            
            /*External links section via JSON*/

            let linkElement = document.querySelector("#externalLinks");

            const linkHeader = document.createElement("h3");
            linkHeader.textContent = data.common.links.externalHeader;

            const links = document.createElement("ul");

            const UNHomepageElement = document.createElement("li");
            const UNHomepageLink = document.createElement("a");
            UNHomepageLink.href = data.common.links.UNHomepage;
            UNHomepageLink.textContent = data.common.externalLinks.UNHomepage;
            UNHomepageElement.appendChild(UNHomepageLink);


            const list6Element = document.createElement("li");
            const goal6Link = document.createElement("a");
            goal6Link.href = data.common.links.Goal6;
            goal6Link.textContent = data.common.externalLinks.goal6;
            list6Element.appendChild(goal6Link);

            const list12Element = document.createElement("li");
            const goal12Link = document.createElement("a");
            goal12Link.href = data.common.links.Goal12;
            goal12Link.textContent = data.common.externalLinks.goal12;
            list12Element.appendChild(goal12Link);

            const list13Element = document.createElement("li");
            const goal13Link = document.createElement("a");
            goal13Link.href = data.common.links.Goal13;
            goal13Link.textContent = data.common.externalLinks.goal13;
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
        .catch(error => console.error("An error has occured:", error));
    });