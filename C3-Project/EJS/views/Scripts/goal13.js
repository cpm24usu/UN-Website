let jsonFile = "climate.json"
// console.log(jsonFile);

document.addEventListener('DOMContentLoaded', () =>{
    fetch(jsonFile)
    .then(response => response.json())
    .then(responseData => {

        let main = document.getElementById("main");

        let description = document.querySelector('#description');
        let goalArticle = document.createElement('article');
        goalArticle.id = "goal";
        let goalfigure = document.createElement('figure');

        let goalimg = document.createElement('img');
        //fetching image from json file
        goalimg.src = responseData.images.climateAction;
        goalimg.alt = responseData.alt.climateAction;
        goalimg.id = "goalimg";

        
        let figcap = document.createElement('figcaption');
        let goalText = document.createElement('p');
        //fetching text from json file
        goalText.textContent = responseData.filler.description;

        //combining the first set of elements 
        description.appendChild(goalArticle);
        goalArticle.appendChild(goalfigure);
        goalfigure.appendChild(goalimg);
        goalfigure.appendChild(figcap);
        figcap.appendChild(goalText);


        // main information section 

        let mainInfo = document.getElementById("mainInfo");

        let infoArticle = document.createElement('article');
        infoArticle.id = "info";
        let infoFigure = document.createElement('figure');
        infoFigure.classList.add("left");

        let infoImg = document.createElement('img');
        infoImg.src = responseData.images.imgone;
        infoImg.alt = responseData.alt.forest;
        infoImg.id = "forest"

        let figcapOne = document.createElement('figcaption');
        let infoText = document.createElement('p');
        infoText.textContent = responseData.filler.effects;

        let infoArticleOne = document.createElement('article');
        let infoFigureOne = document.createElement('figure');

        let infoImgOne = document.createElement('img');
        infoImgOne.src = responseData.images.imgtwo;
        infoImgOne.alt = responseData.alt.tornado;
        infoImgOne.id = "tornado";

        let figcapTwo = document.createElement('figcaption');
        let infoTextOne = document.createElement('p');
        infoTextOne.textContent = responseData.filler.solutions;

        //adding the main info elemnets together 

        mainInfo.appendChild(infoArticle);
        infoArticle.appendChild(infoFigure);
        infoFigure.appendChild(infoImg);
        infoFigure.appendChild(figcapOne);
        figcapOne.appendChild(infoText);

        mainInfo.appendChild(infoArticleOne);
        infoArticleOne.appendChild(infoFigureOne);
        infoFigureOne.appendChild(infoImgOne)
        infoFigureOne.appendChild(figcapTwo);
        figcapTwo.appendChild(infoTextOne);

        //break away image 

        let breakImg = document.createElement('img');
        breakImg.src = responseData.images.breakimg;
        breakImg.alt = responseData.alt.break;

        // stats section 

        let stats = document.querySelector('#stats');

        let plasticStatVal = document.createElement('p');
        plasticStatVal.textContent = responseData.stats.plasticVal;

        let plasticStat = document.createElement('p');
        plasticStat.textContent = responseData.stats.plastic;

        let disasterStatVal = document.createElement('p');
        disasterStatVal.textContent = responseData.stats.disasterVal;

        let disasterStat = document.createElement('p');
        disasterStat.textContent = responseData.stats.disaster;

        let paperStatVal = document.createElement('p');
        paperStatVal.textContent = responseData.stats.paperVal;

        let paperStat = document.createElement('p');
        paperStat.textContent = responseData.stats.paper;


        //combining stats elemnets 

        stats.appendChild(plasticStatVal);
        stats.appendChild(plasticStat);
        stats.appendChild(paperStatVal);
        stats.appendChild(paperStat);
        stats.appendChild(disasterStatVal);
        stats.appendChild(disasterStat);

        // inserting the break away image between sections two and three (main info and stats)
        // main.insertBefore(breakImg, stats);


        // last section
        let conclusion = document.getElementById('conclusion');

        let concArticle = document.createElement('article');
        let concFigure = document.createElement('figure');
        concFigure.classList.add("left");

        let concImg = document.createElement('img');
        concImg.src = responseData.images.imgfour;
        concImg.alt = responseData.alt.plantinhand;

        let concFigcap = document.createElement('figcaption');
        let concText = document.createElement('p');

        concText.textContent = responseData.filler.change;

        // combining elements 

        conclusion.appendChild(concArticle);
        concArticle.appendChild(concFigure);
        concFigure.appendChild(concImg);
        concFigure.appendChild(concFigcap);
        concFigcap.appendChild(concText);








         /* Header */
         const logo = document.querySelector("#logo");
         const logoDisplay = document.createElement("img");

         const x = window.matchMedia("(max-width: 1000px)"); // 1140px
         function updateBackground() {
             if (x.matches) { // If the screen is less than 1000px wide
                 logoDisplay.src =  responseData.common.media.logoWithoutText; // Change the logo to the version without text
                 logoDisplay.setAttribute("id", "narrowLogo");
             } else {
                 logoDisplay.src =  responseData.common.media.logoWithText; // Otherwise, show the version with text
                 logoDisplay.setAttribute("id", "wideLogo");
             }
         }
         x.addEventListener("change", updateBackground);
         updateBackground();

         logo.appendChild(logoDisplay);


         let homeNav = document.querySelector("#homeNav");

         const home = document.createElement("a");
         home.href = ".";
         home.textContent = "Home";
         if (document.querySelector("#homepage")) { // Checks if the current page is the homepage
             home.setAttribute("id", "active");
         }
         else {
             home.setAttribute("id", "inactive");
         };
         

         let teamNav = document.querySelector("#teamNav");

         const team = document.createElement("a");
         team.href = "./team";
         team.textContent = "Team Info";
         if (document.querySelector("#team")) { // Checks if the current page is the team info page
             team.setAttribute("id", "active");
         }
         else {
             team.setAttribute("id", "inactive");
         };

         let signUpNav = document.querySelector("#signUpNav");

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

         const goal6 = document.querySelector("#goal6");
         const goal6a = document.createElement("a");
         goal6a.href = "goal6";
         const goal6img = document.createElement("img");
         goal6img.setAttribute("id", "imgLink1");
         goal6img.src = responseData.common.media.goal6;
         goal6img.setAttribute("alt", "Link to Goal 6: Clean Water and Sanitation");
         goal6a.appendChild(goal6img);
         goal6.appendChild(goal6a);

         const goal12 = document.querySelector("#goal12");
         const goal12a = document.createElement("a");
         goal12a.href = "./goal12";
         const goal12img = document.createElement("img");
         goal12img.setAttribute("id", "imgLink2");
         goal12img.src = responseData.common.media.goal12;
         goal12img.setAttribute("alt", "Link to Goal 12: Responsible Consumption and Production");
         goal12a.appendChild(goal12img);
         goal12.appendChild(goal12a);

         const goal13 = document.querySelector("#goal13");
         const goal13a = document.createElement("a");
         goal13a.href = "./goal13";
         const goal13img = document.createElement("img");
         goal13img.setAttribute("id", "imgLink3");
         goal13img.src = responseData.common.media.goal13;
         goal13img.setAttribute("alt", "Link to Goal 13: Climate Action");
         goal13a.appendChild(goal13img);
         goal13.appendChild(goal13a);


         
         /*External links section via JSON*/

         let linkElement = document.querySelector("#externalLinks");

         const linkHeader = document.createElement("h3");
         linkHeader.textContent = responseData.common.links.externalHeader;

         const links = document.createElement("ul");

         const UNHomepageElement = document.createElement("li");
         const UNHomepageLink = document.createElement("a");
         UNHomepageLink.href = responseData.common.links.UNHomepage;
         UNHomepageLink.textContent = "UN Homepage";
         UNHomepageElement.appendChild(UNHomepageLink);


         const list6Element = document.createElement("li");
         const goal6Link = document.createElement("a");
         goal6Link.href = responseData.common.links.Goal6;
         goal6Link.textContent = "UN Goal 6: Clean Water and Sanitation";
         list6Element.appendChild(goal6Link);

         const list12Element = document.createElement("li");
         const goal12Link = document.createElement("a");
         goal12Link.href = responseData.common.links.Goal12;
         goal12Link.textContent = "UN Goal 12: Responsible Consumption and Production";
         list12Element.appendChild(goal12Link);

         const list13Element = document.createElement("li");
         const goal13Link = document.createElement("a");
         goal13Link.href = responseData.common.links.Goal13;
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
         footer.textContent = responseData.common.footer.content;
    })

    .catch(error =>{ console.error("Error fetching JSON data", error);
        
    });
});