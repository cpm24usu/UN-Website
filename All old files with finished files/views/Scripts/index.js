
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


        /*Loading video into 2nd central element*/

        const testPara = document.getElementById("testPara");

        const goalsVideo = document.createElement("video");
        goalsVideo.src = data.homepage.media.mp4;
        goalsVideo.setAttribute("class", "goalVideo");
        goalsVideo.setAttribute("controls", "controls");
        
        const videoAlt = document.createElement("p");
        videoAlt.textContent = data.homepage.altText.video;

        testPara.appendChild(goalsVideo);


        /*Left images section via JSON*/

        const goalsImages = document.getElementById("goalImages");

        const allGoals = document.createElement("img");
        allGoals.src = data.homepage.media.allGoals;
        allGoals.setAttribute("class", "goalImg");
        allGoals.setAttribute("alt", data.homepage.altText.allGoals);

        const goalImg1 = document.createElement("img");
        goalImg1.src = data.homepage.media.goal6;
        goalImg1.setAttribute("class", "goalImg");
        goalImg1.setAttribute("alt", data.homepage.altText.goalImg1);

        const goalImg2 = document.createElement("img");
        goalImg2.src = data.homepage.media.goal12;
        goalImg2.setAttribute("class", "goalImg");
        goalImg2.setAttribute("alt", data.homepage.altText.goalImg2);

        const goalImg3 = document.createElement("img");
        goalImg3.src = data.homepage.media.goal13;
        goalImg3.setAttribute("class", "goalImg");
        goalImg3.setAttribute("alt", data.homepage.altText.goalImg3);

        goalImages.appendChild(allGoals);
        goalImages.appendChild(goalImg1);
        goalImages.appendChild(goalImg2);
        goalImages.appendChild(goalImg3);
    })
    .catch(error => console.error("Error fetching JSON data:", error));
});
