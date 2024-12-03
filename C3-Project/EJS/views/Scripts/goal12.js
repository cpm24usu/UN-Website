document.addEventListener('DOMContentLoaded', ()=>{
    fetch("../JSON/main.json")
    .then(response => response.json())
    .then(responseData =>{

        // Main page content //

        const goalheader = document.querySelector("#grid-contents-maincontent");
        const consumptionsec = document.querySelector("#unlogo2");
        const productionsec = document.querySelector("#head1");
        const sacsec = document.querySelector("#head2");
        const targetsec = document.querySelector("#unlogo3");

        //const goalSection = document.createElement("section");
       //  goalSection.setAttribute("id", "goalSection");

        // goalContent.appendChild(goalSection);
        const title = document.createElement("h1");
        title.setAttribute("id", "title");
        title.textContent = responseData.goal12.content.title;
        goalheader.appendChild(title);

        const Overview = document.createElement("p");
        Overview.setAttribute("id", "Overview")
        Overview.textContent = responseData.goal12.content.overview;
        goalheader.appendChild(Overview);

        const uncrpg12 = document.createElement("img");
        uncrpg12.setAttribute("id", "uncrpg12");
        uncrpg12.src = responseData.goal12.content.uncrpg12;
        consumptionsec.appendChild(uncrpg12);

        const Consumptionh = document.createElement("h2");
        Consumptionh.setAttribute("id", "Consumptionh");
        Consumptionh.textContent = responseData.goal12.content.Consumptionh;
        consumptionsec.appendChild(Consumptionh);

        const Consumptionp = document.createElement("p");
        Consumptionp.setAttribute("id", "Consumptionp");
        Consumptionp.textContent = responseData.goal12.content.Consumptionp;
        consumptionsec.appendChild(Consumptionp);

        const Productionh = document.createElement("h2");
        Productionh.setAttribute("id", "Productionh");
        Productionh.textContent = responseData.goal12.content.Productionh;
        productionsec.appendChild(Productionh);

        const Productionp = document.createElement("p");
        Productionp.setAttribute("id", "Productionp");
        Productionp.textContent = responseData.goal12.content.Productionp;
        productionsec.appendChild(Productionp);

        const greeng12 = document.createElement("img");
        greeng12.setAttribute("id", "greeng12");
        greeng12.src = responseData.goal12.content.greeng12;
        sacsec.appendChild(greeng12);

        const HowtheSACplanstotackletheseissuesh = document.createElement("h2");
        HowtheSACplanstotackletheseissuesh.setAttribute("id", "HowtheSACplanstotackletheseissuesh");
        HowtheSACplanstotackletheseissuesh.textContent = responseData.goal12.content.HowtheSACplanstotackletheseissuesh;
        sacsec.appendChild(HowtheSACplanstotackletheseissuesh);

        const HowtheSACplanstotackletheseissuesp = document.createElement("p");
        HowtheSACplanstotackletheseissuesp.setAttribute("id", "HowtheSACplanstotackletheseissuesp");
        HowtheSACplanstotackletheseissuesp.textContent = responseData.goal12.content.HowtheSACplanstotackletheseissuesp;
        sacsec.appendChild(HowtheSACplanstotackletheseissuesp);
        
        const targetsTitle = document.createElement("h2");
        targetsTitle.textContent = responseData.goal12.content.targetsTitle;
        targetsec.appendChild(targetsTitle);
        
        const scrollBox = document.createElement("article");
        scrollBox.setAttribute("id", "scroll");
        targetsec.appendChild(scrollBox);
        
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