
document.addEventListener("DOMContentLoaded", function () {
    fetch('../JSON/main.JSON')
    .then(response => response.json())
    .then(data => {
        
        // Main Paragraph - Intro to site

        const dataDisplay = document.getElementById("mainPara");

        const title = document.createElement("h1");
        title.textContent = data.homepage.content.title;

        const intro = document.createElement("p");
        intro.textContent = data.homepage.content.intro;


        const goal6header = document.createElement("h2");
        const goal6para = document.createElement("p");
        goal6header.textContent = data.homepage.content.goal6header;
        goal6para.textContent = data.homepage.content.goal6;

        const goal12header = document.createElement("h2");
        const goal12para = document.createElement("p");
        goal12header.textContent = data.homepage.content.goal12header;
        goal12para.textContent = data.homepage.content.goal12;

        const goal13header = document.createElement("h2");
        const goal13para = document.createElement("p");
        goal13header.textContent = data.homepage.content.goal13header;
        goal13para.textContent = data.homepage.content.goal13;

        const outro = document.createElement("p");
        outro.textContent = data.homepage.content.outro;
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

        const goalsVideo = document.createElement("video");
        goalsVideo.src = data.homepage.media.mp4;
        goalsVideo.setAttribute("class", "goalVideo");
        goalsVideo.setAttribute("controls", "controls");
        goalsVideo.setAttribute("alt","Short video from the UN website showing all 17 SDGs");

        testPara.appendChild(goalsVideo);


        /*Left images section via JSON*/

        const goalsImages = document.getElementById("goalImages");

        const allGoals = document.createElement("img");
        allGoals.src = data.homepage.media.allGoals;
        allGoals.setAttribute("class", "goalImg");
        allGoals.setAttribute("alt", "Image showing all 17 goals from the UN website");

        const goalImg2 = document.createElement("img");
        goalImg2.src = data.homepage.media.goal6;
        goalImg2.setAttribute("class", "goalImg");
        goalImg2.setAttribute("alt", "Image for goal 6 from the UN website");

        const goalImg3 = document.createElement("img");
        goalImg3.src = data.homepage.media.goal12;
        goalImg3.setAttribute("class", "goalImg");
        goalImg3.setAttribute("alt", "Image for goal 12 from the UN website");

        const goalImg4 = document.createElement("img");
        goalImg4.src = data.homepage.media.goal13;
        goalImg4.setAttribute("class", "goalImg");
        goalImg4.setAttribute("alt", "Image for goal 13 from the UN website");

        goalImages.appendChild(allGoals);
        goalImages.appendChild(goalImg2);
        goalImages.appendChild(goalImg3);
        goalImages.appendChild(goalImg4);
    })
    .catch(error => console.error("Error fetching JSON data:", error));
});
