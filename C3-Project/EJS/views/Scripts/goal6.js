document.addEventListener('DOMContentLoaded', ()=>{
    fetch("../JSON/main.json")
    .then(response => response.json())
    .then(responseData =>{

        // Main page content //

        let goalContent = document.getElementById("mainSection");
        
        //const goalSection = document.createElement("section");
       //  goalSection.setAttribute("id", "goalSection");

        // goalContent.appendChild(goalSection);

        const overviewSection = document.createElement("section");
        overviewSection.setAttribute("id", "overviewSection");

        overviewSection.setAttribute("id", "goal6Overview");
        goalContent.append(overviewSection);
        const title = document.createElement("h1");
        title.setAttribute("id", "goal6Title");
        title.textContent = responseData.goal6.content.title;
        overviewSection.appendChild(title);

        const goalOverview1 = document.createElement("p");
        goalOverview1.textContent = responseData.goal6.content.overview1;
        overviewSection.appendChild(goalOverview1);
        const goalOverview2 = document.createElement("p");
        goalOverview2.textContent = responseData.goal6.content.overview2;
        overviewSection.appendChild(goalOverview2);

        const reportCard = document.createElement("img");
        reportCard.setAttribute("id", "reportImage");
        reportCard.src = responseData.goal6.content.reportCard;
        overviewSection.appendChild(reportCard);

        

        const issue = document.createElement("h3");
        issue.setAttribute("id", "issueTitle");
        issue.textContent = responseData.goal6.content.issue;
        overviewSection.appendChild(issue);

        const issueInfo = document.createElement("p");
        issueInfo.textContent = responseData.goal6.content.issueInfo;
        overviewSection.appendChild(issueInfo);

        

        let targets = document.createElement("section");
        targets.setAttribute("id", "targets");
        goalContent.appendChild(targets);
        
        
        const targetsTitle = document.createElement("h2");
        targetsTitle.setAttribute("id", "targetsTitle");
        targetsTitle.textContent = responseData.goal6.content.targetsTitle;
        targets.appendChild(targetsTitle);

        const targetsInfo = document.createElement("p");
        targetsInfo.textContent = responseData.goal6.content.targetsInfo;
        targets.appendChild(targetsInfo);

        const revealBtn = document.createElement("button");
        revealBtn.textContent = responseData.goal6.content.reveal;
        targets.appendChild(revealBtn);
        // targets.appendChild(revealBtn);
        
        const scrollBox = document.createElement("article");
        scrollBox.setAttribute("id", "scroll");
        targets.appendChild(scrollBox);
        
        const targetsList = [7];
        targetsList[0] = responseData.goal6.content.targets.target1;
        targetsList[1] = responseData.goal6.content.targets.target2;
        targetsList[2] = responseData.goal6.content.targets.target3;
        targetsList[3] = responseData.goal6.content.targets.target4;
        targetsList[4] = responseData.goal6.content.targets.target5;
        targetsList[5] = responseData.goal6.content.targets.target6;

    
        
       // console.log(targetsList);
        const tList = document.createElement("ol"); 
        for (var i = 0; i < targetsList.length; i++) {
            let listItem = document.createElement('li');
            listItem.innerText = targetsList[i];
            tList.appendChild(listItem);

        }
        scrollBox.appendChild(tList);   
        
        
        revealBtn.addEventListener("click", function() {
            if (scrollBox.style.display == "none"){
                scrollBox.style.display = "block";
                revealBtn.textContent = responseData.goal6.content.hide;
            }
            else{
                scrollBox.style.display = "none";
                revealBtn.textContent = responseData.goal6.content.reveal;
            }


        });

        const conclusion = document.createElement("p");
        conclusion.textContent = responseData.goal6.content.conclusion;
        goalContent.appendChild(conclusion);

        const videoSection = document.getElementById("video");
        const goal6Video = document.createElement("video");
        goal6Video.setAttribute("id", "goal6Vid");
        goal6Video.setAttribute("controls", "controls");
        videoSection.appendChild(goal6Video);
        goal6Video.src = responseData.goal6.content.goal6Vid;

        const subheadings = document.getElementById("subheadings");
       
        const issueLink = document.createElement("a");
        issueLink.setAttribute("class", "headingLinks");
        issueLink.textContent = responseData.goal6.content.issue;
        issueLink.href = "#issueTitle";
        subheadings.appendChild(issueLink);

        const targetsLink = document.createElement("a");
        targetsLink.setAttribute("class", "headingLinks");
        targetsLink.textContent = responseData.goal6.content.targetsTitle;
        targetsLink.href = "#targetsTitle";
        subheadings.appendChild(targetsLink);

        const videoLink = document.createElement("a");
        videoLink.setAttribute("class", "headingLinks");
        videoLink.textContent = responseData.goal6.content.videoHeading;
        videoLink.href = "#goal6Vid";
        subheadings.appendChild(videoLink);

        const targetImg = document.createElement("img");
        targetImg.src = responseData.goal6.content.targetImg;
        targetImg.setAttribute("id", "targetImg");
        subheadings.appendChild(targetImg);

        const topLink = document.createElement("a");
        topLink.setAttribute("class", "headingLinks");
        topLink.setAttribute("id", "topLink");
        topLink.textContent = responseData.goal6.content.back;
        topLink.href = "#goal6Title";
        subheadings.appendChild(topLink);






    



    })


        
        





        

       

    
    .catch(error => console.error("Error fetching JSON data:", error))
})