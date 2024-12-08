document.addEventListener('DOMContentLoaded', ()=>{
    fetch("../JSON/main.json")
    .then(response => response.json())
    .then(responseData =>{

        const top = document.createElement("h1");
        top.setAttribute("id", "top");


        // Main page content //

        let goalContent = document.getElementById("mainSection"); 
        // creates a constant for the main section of the page to append all the goal content to it
        
    

        const overviewSection = document.createElement("section"); // section for the goal overview 
        overviewSection.setAttribute("id", "overviewSection");
        overviewSection.setAttribute("id", "goal6Overview"); 
        goalContent.append(overviewSection);
        const title = document.createElement("h1");

        title.setAttribute("id", "goal6Title"); // page title
        title.textContent = responseData.goal6.content.title;
        overviewSection.appendChild(title);

        const goalOverview1 = document.createElement("p"); 
        goalOverview1.textContent = responseData.goal6.content.overview1;
        overviewSection.appendChild(goalOverview1);
        const goalOverview2 = document.createElement("p");
        goalOverview2.textContent = responseData.goal6.content.overview2;
        overviewSection.appendChild(goalOverview2);
        // goal overview paragraphs

        const reportCard = document.createElement("img"); // creates image element to the goal page
        reportCard.setAttribute("id", "reportImage");
        reportCard.src = responseData.goal6.content.reportCard;
        overviewSection.appendChild(reportCard);

        

        const issue = document.createElement("h3");
        issue.setAttribute("id", "issueTitle");
        issue.textContent = responseData.goal6.content.issue; 
        overviewSection.appendChild(issue);
        // header element for why clean water and sanitation is an issue

        const issueInfo = document.createElement("p");
        issueInfo.textContent = responseData.goal6.content.issueInfo;
        overviewSection.appendChild(issueInfo);
        // creates paragraph element for information on the issue

        

        let targets = document.createElement("section");
        targets.setAttribute("id", "targets");
        goalContent.appendChild(targets);
        // creates section element for goal targets
        
        const targetsTitle = document.createElement("h2");
        targetsTitle.setAttribute("id", "targetsTitle");
        targetsTitle.textContent = responseData.goal6.content.targetsTitle;
        targets.appendChild(targetsTitle);
        // creates header element for the targets section

        const targetsInfo = document.createElement("p");
        targetsInfo.textContent = responseData.goal6.content.targetsInfo;
        targets.appendChild(targetsInfo);
        // creates paragraph element for information on the targets section

        const revealBtn = document.createElement("button");
        revealBtn.setAttribute("id", "revealTargets");

        revealBtn.textContent = responseData.goal6.content.reveal;
        targets.appendChild(revealBtn);
        // targets.appendChild(revealBtn);
        
        const scrollBox = document.createElement("article");
        scrollBox.setAttribute("id", "scroll");
        scrollBox.style.display = "none";
        targets.appendChild(scrollBox);
        // creates an article element which will hold the targets
        
        const targetsList = [7];
        targetsList[0] = responseData.goal6.content.targets.target1;
        targetsList[1] = responseData.goal6.content.targets.target2;
        targetsList[2] = responseData.goal6.content.targets.target3;
        targetsList[3] = responseData.goal6.content.targets.target4;
        targetsList[4] = responseData.goal6.content.targets.target5;
        targetsList[5] = responseData.goal6.content.targets.target6;
        // appends the json text for each target to an array

    
        
       // console.log(targetsList);
        const tList = document.createElement("ol");  // creates an ordered list element
        for (var i = 0; i < targetsList.length; i++) {
            let listItem = document.createElement('li'); // creates a list element for each item in the targetsList array
            listItem.innerText = targetsList[i]; // sets the text content of each list item as the current element in the array
            tList.appendChild(listItem);

        }
        scrollBox.appendChild(tList);   
        
        
        revealBtn.addEventListener("click", function() {
            if (scrollBox.style.display == "none"){
                scrollBox.style.display = "block"; // if targets article isn't visible, make it visible when the button is clicked
                revealBtn.textContent = responseData.goal6.content.hide; // changes the text content to prompt the user to click to hide the article
            }
            else{
                scrollBox.style.display = "none"; // if the target article is visible, set it to not visible when the button is clicked
                revealBtn.textContent = responseData.goal6.content.reveal; // changes the text content to prompt the user to click to reveal the article
            }


        });

        const conclusion = document.createElement("p");
        conclusion.textContent = responseData.goal6.content.conclusion;
        goalContent.appendChild(conclusion); // creates a paragraph element for the goal conclusion

        const videoSection = document.getElementById("video");
        const goal6Video = document.createElement("video");
        goal6Video.setAttribute("id", "goal6Vid");
        goal6Video.setAttribute("controls", "controls"); 
        videoSection.appendChild(goal6Video);
        goal6Video.src = responseData.goal6.content.goal6Vid;
        // creates video element to display the video

        const subheadings = document.getElementById("subheadings");
        // gets id of div for the subheadings section
       
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

        // creates a link element for each subheading for each section

        const targetImg = document.createElement("img");
        targetImg.src = responseData.goal6.content.targetImg;
        targetImg.setAttribute("id", "targetImg");
        subheadings.appendChild(targetImg);
        // creates an image element for the target image

        const topLink = document.createElement("a");
        topLink.setAttribute("class", "headingLinks");
        topLink.setAttribute("id", "topLink");
        topLink.textContent = responseData.goal6.content.back;
        topLink.href = "#top";
        subheadings.appendChild(topLink);
        // creates link element to take the user back to the top of the page






    



    })


        
        





        

       

    
    .catch(error => console.error("Error fetching JSON data:", error))
})