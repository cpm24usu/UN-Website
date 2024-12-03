document.addEventListener('DOMContentLoaded', ()=>{
    fetch("../JSON/main.json")
    .then(response => response.json())
    .then(responseData =>{

        // Main page content //

        let goalContent = document.getElementById("grid-contents-maincontent");
        
        //const goalSection = document.createElement("section");
       //  goalSection.setAttribute("id", "goalSection");

        // goalContent.appendChild(goalSection);
        const title = document.createElement("head1");
        title.setAttribute("id", "head1");
        title.textContent = responseData.goal6.content.title;
        goalContent.appendChild(title);

        const goalOverview = document.createElement("p");
        goalOverview.textContent = responseData.goal6.content.overview;
        goalContent.appendChild(goalOverview);

        const reportCard = document.createElement("unrcrpg12");
        reportCard.setAttribute("id", "unrcrpg12");
        reportCard.src = responseData.goal6.content.reportCard;
        goalContent.appendChild(reportCard);

        const issue = document.createElement("h3");
        issue.setAttribute("id", "issueTitle");
        issue.textContent = responseData.goal6.content.issue;
        goalContent.appendChild(issue);

        const issueInfo = document.createElement("p");
        issueInfo.textContent = responseData.goal6.content.issueInfo;
        goalContent.appendChild(issueInfo);

        let targets = document.getElementById("goalTargets");
        
        
        const targetsTitle = document.createElement("h2");
        targetsTitle.textContent = responseData.goal6.content.targetsTitle;
        targets.appendChild(targetsTitle);
        
        const scrollBox = document.createElement("article");
        scrollBox.setAttribute("id", "scroll");
        targets.appendChild(scrollBox);
        
        const targetsList = [7];
        targetsList[0] = responseData.goal12.content.targets.target1;
        targetsList[1] = responseData.goal12.content.targets.target2;
        targetsList[2] = responseData.goal12.content.targets.target3;
        targetsList[3] = responseData.goal12.content.targets.target4;
        targetsList[4] = responseData.goal12.content.targets.target5;
        targetsList[5] = responseData.goal12.content.targets.target6;
    
        
       // console.log(targetsList);
        const tList = document.createElement("ol"); 
        for (var i = 0; i < targetsList.length; i++) {
            let listItem = document.createElement('li');
            listItem.innerText = targetsList[i];
            tList.appendChild(listItem);

        }
        scrollBox.appendChild(tList);        

    



    })

        
        





        

       

    
    .catch(error => console.error("Error fetching JSON data:", error))
})