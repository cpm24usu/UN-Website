
document.addEventListener("DOMContentLoaded", function () {
    if (document.querySelector('#homepage')){ //checks if the current page is the homepage using an id="homepage" in the opening html tag
        fetch('../JSON/index.JSON')
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
