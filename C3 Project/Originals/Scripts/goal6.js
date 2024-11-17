

var goal6Json = "../JSON/goal6.json";

document.addEventListener('DOMContentLoaded', ()=>{
    fetch(goal6Json)
    .then(response => response.json())
    .then(responseData =>{

        // header - logo display and navigation links
        

        const displayLogo = document.getElementById("logo");
        var logo = new Image();
        logo.src = responseData.headerContent.logoPath;
        logo.setAttribute("class", "unLogo");
        logo.setAttribute("alt", "UN Logo");
        displayLogo.appendChild(logo);


        const homeLink = document.getElementById("homeNav");
        const teamLink = document.getElementById("teamNav");
        const signUpLink = document.getElementById("signUpNav");

        let home = document.createElement("a");
        home.href = "../html/index.html";
        home.textContent = responseData.headerContent.home;
        homeLink.appendChild(home);

        let team = document.createElement("a");
        team.href = "../html/teaminfo.html";
        team.textContent = responseData.headerContent.team;
        teamLink.appendChild(team);

        let signUp = document.createElement("a");
        signUp.href = "../html/signup.html";
        signUp.textContent = responseData.headerContent.signup;
        signUpLink.appendChild(signUp);

        // main body of page

        const mainBody = document.getElementById("mainSection");
        let mainBox = document.createElement("section")
        mainBox.setAttribute("class", "mainBox");
        mainBody.appendChild(mainBox);

        const pageTitle = document.getElementById("pageTitle");
        const question = document.getElementById("question");
        const goalInfo = document.getElementById("info");
        const goalImportance = document.getElementById("importance");
        const moreInfo = document.getElementById("moreInfo");
        const targets = document.getElementById("targets");
        const targetList = document.getElementById("targetsList");
       

        let mainTitle = document.createElement("h1");
        mainTitle.textContent = responseData.goalContent.title;
        pageTitle.appendChild(mainTitle);
        mainBody.appendChild(pageTitle);

        let goalQ = document.createElement("h3")
        goalQ.textContent = responseData.goalContent.goalQuestion;
        question.appendChild(goalQ);
        mainBody.appendChild(question);

        let info = document.createElement("p");
        info.textContent = responseData.goalContent.info;
        goalInfo.appendChild(info);
        mainBody.appendChild(goalInfo);
        
        let goalImp = document.createElement("h3");
        goalImp.textContent = responseData.goalContent.goalImportance;
        goalImportance.appendChild(goalImp);
        mainBody.appendChild(goalImportance);

        let impInfo = document.createElement("p");
        impInfo.textContent = responseData.goalContent.importanceInfo;
        moreInfo.appendChild(impInfo);
        mainBody.appendChild(moreInfo);

        let gTargets = document.createElement("h3")
        gTargets.textContent = responseData.goalContent.goalTargets;
        targets.appendChild(gTargets);
        mainBody.appendChild(targets);

        let scrollBox = document.createElement("article");
        let tList = document.createElement("ol");
        let listItems = responseData.goalContent.targets;
        // console.log(listItems);
        for(let i = 0; i < listItems.length; i++){
            let current = listItems[i];
            const target = document.createElement("li");
            target.textContent = current;
            tList.appendChild(target);
            
        }
       
        scrollBox.appendChild(tList);
        mainBody.appendChild(scrollBox);

        





        

       

    })
    .catch(error => console.error("Error fetching JSON data:", error))
})